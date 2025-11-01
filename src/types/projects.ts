export interface ProjectItemProps {
  id: string | number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  stacks: string;
  content?: string | null;
  is_show: boolean;
  is_featured: boolean;
  updated_at: Date | string;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
