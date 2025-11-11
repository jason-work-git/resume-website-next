// app/api/github/route.ts
import { NextResponse } from 'next/server';

const TOKEN = process.env.GITHUB_TOKEN!;
const USERNAME = 'jason-work-git'; // ← your username

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json({ error: 'No token' }, { status: 500 });
  }

  try {
    // 1. REST API: User + Repos
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
      }),
      fetch('https://api.github.com/user/repos?sort=updated&per_page=100', {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
      }),
    ]);

    const user = await userRes.json();
    const allRepos = await reposRes.json();

    // 2. GraphQL API: Contributions Calendar
    const graphqlRes = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      color
                      weekday
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username: USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    const graphqlJson = await graphqlRes.json();
    const calendar =
      graphqlJson.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      throw new Error('Failed to fetch contributions');
    }

    // Generate months
    const months = generateMonths(calendar.weeks);
    const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

    // Filter repos (optional)
    const repos = allRepos
      .filter((repo: any) => !repo.fork && !repo.private)
      .slice(0, 12);

    // RETURN EVERYTHING IN ONE OBJECT
    return NextResponse.json({
      user,
      repos,
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
      months,
      colors,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function generateMonths(weeks: any[]) {
  const months: any[] = [];
  let current: any = null;

  weeks.forEach((week: any) => {
    const day = week.contributionDays[0];
    if (!day) return;

    const date = new Date(day.date);
    const monthName = date.toLocaleString('default', { month: 'short' });
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

    if (!current || current.firstDay.slice(0, 7) !== day.date.slice(0, 7)) {
      current = {
        name: monthName,
        firstDay: day.date,
        totalWeeks: 0,
        contributionsCount: 0,
      };
      months.push(current);
    }

    current.totalWeeks += 1;
    current.contributionsCount += week.contributionDays.reduce(
      (sum: number, d: any) => sum + d.contributionCount,
      0,
    );
  });

  return months;
}
