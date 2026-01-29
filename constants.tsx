
import React from 'react';
import { Project, Experience, BlogPost, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Halo Digital Agency Website',
    subtitle: 'For Squeeze',
    image: 'https://picsum.photos/seed/halo/800/600',
    link: '#',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Nexus Fintech Dashboard',
    subtitle: 'For Quant Capital',
    image: 'https://picsum.photos/seed/nexus/800/600',
    link: '#',
    category: 'UI/UX Design'
  },
  {
    id: '3',
    title: 'Digital Agency Platform',
    subtitle: 'Internal Product',
    image: 'https://picsum.photos/seed/agency/800/600',
    link: '#',
    category: 'E-commerce'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Creative Minds',
    location: 'New York, USA',
    period: 'February 2022 - Present',
    role: 'Senior Frontend Engineer',
    description: 'Innovated design systems and architected scalable React applications.',
    tags: ['React', 'Next.js', 'Typescript']
  },
  {
    id: '2',
    company: 'Innovative Designs Inc.',
    location: 'San Francisco, USA',
    period: 'January 2020 - February 2022',
    role: 'Full Stack Developer',
    description: 'Led UI/UX initiatives and crafted seamless digital experiences.',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL']
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Conducting in-depth research and usability testing',
    category: 'MARKETING',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/blog1/400/300'
  },
  {
    id: '2',
    title: 'Designing cohesive strategies and visual identities',
    category: 'STRATEGY',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/blog2/400/300'
  },
  {
    id: '3',
    title: 'The future of minimal interfaces in 2025',
    category: 'DESIGN',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/blog3/400/300'
  }
];

export const SKILLS: Skill[] = [
  { name: 'C' },
  { name: 'C++' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'React' },
  { name: 'React Native' },
  { name: 'Next.js' },
  { name: 'Tailwind' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
];
