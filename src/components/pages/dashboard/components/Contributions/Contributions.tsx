import Link from 'next/link';
import { BsGithub as GithubIcon } from 'react-icons/bs';

import Calendar from './Calendar';
import Overview from './Overview';
import SectionHeading from '@/components/common/SectionHeading';
import SectionSubHeading from '@/components/common/SectionSubHeading';

type ContributionsProps = {
  username: string;
  type: string;
  endpoint: string;
};
async function getGitHubData() {
  const res = await fetch('http://localhost:3000/api/github', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
const Contributions = async ({ username, endpoint }: ContributionsProps) => {
  const data = await getGitHubData();
  console.log(data);
  // NOW IT WORKS
  // if (!data?.weeks?.length) {
  //     return <div className="dark:text-neutral-400">No contribution data</div>;
  // }

  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading
        title='Contributions'
        icon={<GithubIcon className='mr-1' />}
      />
      <SectionSubHeading>
        <p className='dark:text-neutral-400'>
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${username}`}
          target='_blank'
          passHref
          className='font-code text-sm text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 hover:dark:text-neutral-400'
        >
          @{username}
        </Link>
      </SectionSubHeading>

      <div className='space-y-3'>
        <Overview data={data} />
        <Calendar data={data} />
      </div>
    </section>
  );
};

export default Contributions;
