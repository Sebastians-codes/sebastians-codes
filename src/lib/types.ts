export interface ActionLink {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost';
}

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  actions: ActionLink[];
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SkillsContent {
  heading: string;
  categories: SkillCategory[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
  slug: string;
  longDescription?: string;
  highlights?: string[];
  stack?: string[];
  links?: Array<{ label: string; href: string }>;
}

export interface ProjectsContent {
  heading: string;
  items: ProjectItem[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface ExperienceContent {
  heading: string;
  entries: ExperienceEntry[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactContent {
  heading: string;
  email: string;
  note: string;
  socials: SocialLink[];
}

export interface PortfolioData {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  experience: ExperienceContent;
  contact: ContactContent;
  preferences?: {
    defaultTheme?: 'light' | 'dark';
  };
}
