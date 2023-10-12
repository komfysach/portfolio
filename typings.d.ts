declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
  progress: number;
}

export interface Skills extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
  progress: number;
}

export interface Experiences extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
}

export interface Project extends SanityBody {
  _type: 'project';
  title: string;
  image: Image;
  linkToBuild: string;
  linkToGithub: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}