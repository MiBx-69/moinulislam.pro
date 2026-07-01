export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Competency {
  label: string;
  icon: string;
}

export interface Achievement {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface Education {
  degree: string;
  institution: string;
  type: "degree" | "certification";
  url?: string;
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  tagline: string;
  summary: string;
  location: string;
  available: boolean;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  agencyUrl: string;
  cvUrl: string;
  linkedin: string;
}
