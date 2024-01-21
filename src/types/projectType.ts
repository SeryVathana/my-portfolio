import { ReactNode } from 'react';

type LinkType = {
  github: string;
  demo: string;
};

type ProjectType = {
  id: string;
  displayIcon: ReactNode;
  title: string;
  description: string;
  date: string;
  links: LinkType;
  screenshots: string[];
};

export default ProjectType;
