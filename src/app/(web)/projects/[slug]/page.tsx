import { NextPage } from 'next';
// import { NextSeo } from 'next-seo';

// import Container from '@/common/components/elements/Container';
// import PageHeading from '@/common/components/elements/PageHeading';
// import prisma from '@/common/libs/prisma';
import { ProjectItemProps } from '@/types/projects';
import BackButton from '@/components/common/BackButton';
import ProjectDetail from '@/components/pages/projects/components/ProjectDetail';
import PageHeading from '@/components/common/PageHeading';
import { mockProjects } from '@/constant/projects';

interface ProjectsDetailPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = async ({
  params,
}) => {
  const { slug } = await params;
  console.log('slug', slug);
  const project: ProjectItemProps = mockProjects.find(
    (val) => val.slug === slug,
  ) ?? {
    id: 8,
    title: 'Abolfazl Nazari',
    slug: 'Abolfazl-Nazari',
    description:
      'Personal website was built originally from scratch using several powerful stacks.',
    image: 'https://cloud.abolfazl.com/public/images/projects/abolfazl.id.webp',
    link_demo: 'https://abolfazl.id',
    link_github: 'https://github.com/abolfazl/abolfazl.id',
    stacks:
      '["Next.js", "React.js", "TypeScript", "TailwindCSS", "Prisma", "Firebase"]',
    is_show: true,
    updated_at: '2023-07-24T12:29:09.882Z',
    content:
      '## Introduction\n\nThis website was meticulously crafted from the ground up using Next.js, along with various complementary technologies. Its inception dates back to June 2023.\n\nOngoing enhancements, encompassing both functionality and content, are in the pipeline. This website stands as a treasured repository of my acquired knowledge, also serving as a platform for me to disseminate insights.\n\nFeel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements.\n\nShould you find value in this resource, your consideration of leaving a rating is greatly appreciated. 😎👍🏻\n\nIf you have any questions, suggestions, input or anything else, don\'t hesitate to contact me🧑‍💻\n<br /><br />\n\n## Features\n\nOn this website there are several features that will continue to be updated and added in the future.\n\n### 🤖 ChatGPT AI\n\nYou can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for.\n\nNote:\n\nIf you\'re using Chat Completions engine model of ChatGPT, please concern about this:\n\nDue this site is using free cloud hosting services (Vercel) with certain limitations (Serverless Function Execution Timeout), sometimes an error will occur if the response from the open AI API is too long, but you can change it in the vercel.json file to upgrade memory and maxDuration to be bigger according to the capabilities of your vercel plan.\n\n### 💻 JavaScript Playground\n\nA no-fuss pure JavaScript playground with a live feedback loop.\n\n### 💬 Real-time Chat\n\nReal-Time Chat is powered by Firebase. Anyone can leave me a message in this website.\n\n### 🎧 Spotify\n\nDisplays song information being played on spotify in real time using the Spotify API and SWR.\n\n### 🕗 Wakatime\n\nData is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.\n\n### 📝 Blogs\n\nThe CMS Blog on this website utilizes the API from the dev.to platform. The displayed articles are one-to-one with the articles published on my dev.to blog and are updated in real-time.\n\nThe data fetching technique used to retrieve articles from dev.to involves using Client-Side Rendering (CSR) for the blog list and Server-Side Rendering (SSR) for the blog details.\n\n### 🗳 Projects\n\nThe data projects on this blog are taken from the MySQL database connected through the Prisma Client. The database for this application is hosted on PlanetScale DB.\n\nThe data fetching method used to retrieve data projects is Incremental Static Regeneration (ISR) with 1 second revalidation and Server-Side Rendering (SSR) for the project details..\n<br /><br />\n\n## Performance\n\n### PageSpeed Insights\n\nReport URL: https://pagespeed.web.dev/analysis/https-abolfazl-id/pk0y6xcz25?form_factor=desktop\n\n![image](https://github.com/abolfazl/abolfazl.id/assets/15605885/d87a6083-caf3-4b84-ba59-975c07193a9f)\n\n### GTmetrix\n\nReport URL: [https://pagespeed.web.dev/analysis/https-abolfazl-id/pk0y6xcz25?form_factor=desktop](https://gtmetrix.com/reports/abolfazl.id/REEiduoo/)\n\n![image](https://github.com/abolfazl/abolfazl.id/assets/15605885/953dc131-bf52-4ef6-913c-f6eb8fb6c6a7)\n<br /><br />\n\n## Getting Started\n\nIf you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the ".env.example" file to ".env" and replace the variables with your own in the ".env" file.\n\n### 1. Clone this template using one of the three ways:\n\n1. Clone using git\n\n   ```bash\n   git clone https://github.com/abolfazl/abolfazl.id\n   ```\n\n2. Using `create-next-app`\n\n   ```bash\n   npx create-next-app -e https://github.com/abolfazl/abolfazl.id project-name\n   ```\n\n3. Using `degit`\n\n   ```bash\n   npx degit abolfazl/abolfazl.id YOUR_APP_NAME\n   ```\n\n4. Deploy to Vercel or Netlify, etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/abolfazl/abolfazl.id)\n   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abolfazl/abolfazl.id)\n\n### 2. Install dependencies\n\nIt is encouraged to use **yarn** so the husky hooks can work properly.\n\n```bash\nyarn install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\nyarn dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.\n<br /><br />\n\n## License\n\nLicensed under the [GPL-3.0 license](https://github.com/abolfazl/abolfazl.id/blob/master/LICENSE).',
    is_featured: true,
  };
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;
  //
  // const canonicalUrl = `https://abolfazl.id/project/${project?.slug}`;

  return (
    <>
      {/*<NextSeo*/}
      {/*    title={`${project?.title} - Project Abolfazl Nazari`}*/}
      {/*    description={project?.description}*/}
      {/*    canonical={canonicalUrl}*/}
      {/*    openGraph={{*/}
      {/*        type: 'article',*/}
      {/*        article: {*/}
      {/*            publishedTime: project?.updated_at.toString(),*/}
      {/*            modifiedTime: project?.updated_at.toString(),*/}
      {/*            authors: ['Abolfazl Nazari'],*/}
      {/*        },*/}
      {/*        url: canonicalUrl,*/}
      {/*        images: [*/}
      {/*            {*/}
      {/*                url: project?.image,*/}
      {/*            },*/}
      {/*        ],*/}
      {/*        siteName: 'Blog Abolfazl Nazari',*/}
      {/*    }}*/}
      {/*/>*/}
      {/*<Container data-aos='fade-up'>*/}

      <BackButton url='/projects' />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...project} />

      {/*</Container>*/}
    </>
  );
};
export default ProjectsDetailPage;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const response = await prisma.projects.findUnique({
//         where: {
//             slug: String(params?.slug),
//         },
//     });
//
//     if (response === null) {
//         return {
//             redirect: {
//                 destination: '/404',
//                 permanent: false,
//             },
//         };
//     }
//
//     return {
//         props: {
//             project: JSON.parse(JSON.stringify(response)),
//         },
//     };
// };

// RY: moved from SSG to SSR since data updated frequently from DB
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const response = await prisma.projects.findUnique({
//     where: {
//       slug: String(params?.slug),
//     },
//   });

//   return {
//     props: {
//       project: JSON.parse(JSON.stringify(response)),
//     },
//     revalidate: 10,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await prisma.projects.findMany();
//   const paths = response.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
