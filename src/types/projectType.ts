import { ReactNode } from 'react';

type LinkType = {
  github: string;
  demo: string;
};

type ProjectType = {
  id: string;
  displayIcon: ReactNode;
  title: string;
  date: string;
  links: LinkType;
};

export default ProjectType;
