export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  date: string;
  client?: string;
  role?: string;
  technologies: string[];
  gallery?: string[];
  challenge?: string;
  solution?: string;
  outcome?: string;
}

export interface Skill {
  id: string;
  title: string;
  icon: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  image?: string;
  link?: string;
  category: 'award' | 'certification' | 'education' | 'work' | 'other';
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  logo: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  resume: string;
}
