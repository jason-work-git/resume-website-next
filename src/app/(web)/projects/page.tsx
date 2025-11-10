'use client';

import { NextPage } from 'next';
// import { NextSeo } from 'next-seo';
import { useState } from 'react';

// import Container from '@/common/components/elements/Container';
// import PageHeading from '@/common/components/elements/PageHeading';
// import prisma from '@/common/libs/prisma';
import { ProjectItemProps } from '@/types/projects';
import Projects from '@/components/pages/projects';
import PageHeading from "@/components/common/PageHeading";
import {mockProjects} from "@/components/pages/projects/components/project-mock-data";

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
    'Several projects that I have worked on, both private and open source.';

// stack list
// '["Next.js", "React.js", "TypeScript", "TailwindCSS", "Prisma", "Firebase"]',


const ProjectsPage: NextPage<ProjectsPageProps> = () => {
  const projects = [...mockProjects].reverse();
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <>
      {/*<NextSeo title={`${PAGE_TITLE} - Abolfazl Nazari`} />*/}
      {/*<Container data-aos='fade-up'>*/}
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <Projects
        projects={projects.slice(0, visibleProjects)}
        loadMore={loadMore}
        hasMore={hasMore}
      />
      {/*</Container>*/}
    </>
  );
};

export default ProjectsPage;
