export type ProjectCategory = 
  | 'All' 
  | 'Business' 
  | 'News Portal' 
  | 'Corporate' 
  | 'Portfolio' 
  | 'E-Commerce' 
  | 'Other';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  url: string;
  services: string[];
  year: string;
  description: string;
  highlight: string;
  techStack: string[];
  image: string;
  clientLocation?: string;
  metrics?: string;
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  bestFor: string;
}

export interface PricingPackage {
  id: string;
  packageNumber: string;
  name: string;
  price: string;
  priceNum: number;
  period?: string;
  badge?: string;
  isRecommended?: boolean;
  tagline: string;
  targetAudience: string;
  includedFeatures: string[];
  importantCondition?: string;
  ctaText: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  deliverables: string[];
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'CMS & Builders' | 'Frontend Code' | 'Design & UX' | 'Optimization & SEO';
  proficiency: number;
  level: string;
  iconName: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Delivery' | 'Technical' | 'Support';
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  websiteType: string;
  budget: string;
  projectDetails: string;
}
