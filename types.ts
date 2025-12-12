
export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  badges: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  details?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  icon: string;
  tag: string;
  longDescription?: string;
}

export interface PublicationItem {
  title: string;
  journal: string;
  description: string;
  link?: string;
}

export interface CVData {
  profile: {
    name: string;
    title: string;
    subtitle: string;
    summary: string;
    tags: string[];
    image: string;
  };
  experience: TimelineItem[];
  education: EducationItem[];
  competencies: string[];
  languages: string;
  projects: ProjectItem[];
  publications: PublicationItem[];
  contact: {
    email: string;
    location: string;
    links: { label: string; url: string; icon: string }[];
  };
}
