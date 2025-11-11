import {  NextPage } from 'next';
// import { NextSeo } from 'next-seo';
// import { SWRConfig } from 'swr';

// import Container from '@/common/components/elements/Container';
// import PageHeading from '@/common/components/elements/PageHeading';
// import Dashboard from '@/modules/dashboard';
// import { getGithubUser } from '@/services/github';
// import Dashboard from '@/components/pages/dashboard';
import PageHeading from '@/components/common/PageHeading';



const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage: NextPage = async () => {
  return (
    <>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      {/*<Dashboard />*/}
    </>
  );
};

export default DashboardPage;

// export const getStaticProps: GetStaticProps = async () => {
//     // const readStats = await getReadStats();
//     const githubUserPersonal = await getGithubUser('personal');
//
//     return {
//         props: {
//             fallback: {
//                 // '/api/read-stats': readStats.data,
//                 '/api/github?type=personal': githubUserPersonal?.data,
//             },
//         },
//         revalidate: 1,
//     };
// };
