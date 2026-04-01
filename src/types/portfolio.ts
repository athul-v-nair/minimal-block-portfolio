export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface HeroData {
  name: string;
  role: string;
  location: string;
  description: string;
  image: string;
  socials: Social[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  logo?: string;
}

export interface AboutData {
  image: string;
  content: string[];
}

export interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface ContactData {
  email: string;
  phone: string;
  description: string;
}

export interface PortfolioData {
  hero: HeroData;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  about: AboutData;
  projects: Project[];
  testimonials: Testimonial[];
  contact: ContactData;
}
