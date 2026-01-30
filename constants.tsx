
import React from 'react';
import { Project, Experience, BlogPost, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Furnish E-commerce Website',
    subtitle: 'For The Furnish',
    image: '/images/the-furnish.png',
    link: 'https://e-commerce-roan-mu.vercel.app/',
    githubLink: '#',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Resume Builder & Job Tracker Website',
    subtitle: 'For Zume AI',
    image: '/images/zume-ai.png',
    link: 'https://zumeai.vercel.app/',
    githubLink: '#',
    category: 'Full Stack'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    subtitle: 'For Dibyendu Karak',
    image: '/images/portfolio.png',
    link: 'https://dibyendu-karak-portfolio-05.vercel.app/',
    githubLink: '#',
    category: 'Portfolio'
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
    title: 'How web works in-depth',
    category: 'TECHNOLOGY',
    readTime: '5 min read',
    image: '/images/blog-1-web.webp',
    content: `The World Wide Web (WWW) is a global information system that allows users to access and share information over the internet. It is built on a client-server architecture, where web servers host websites and web browsers (clients) access and display this content. The web uses the HTTP (Hypertext Transfer Protocol) for communication between servers and clients, enabling the transfer of data and resources. Key components of the web include HTML (Hypertext Markup Language) for structuring content, CSS (Cascading Style Sheets) for styling, and JavaScript for interactivity. The web has revolutionized communication, commerce, and information sharing, connecting billions of users worldwide and enabling the creation of dynamic, interactive, and visually appealing online experiences.`
  },
  {
    id: '2',
    title: 'What is VPN and how it works',
    category: 'TECHNOLOGY',
    readTime: '8 min read',
    image: '/images/blog-2-proxy.webp',
    content: `A VPN (Virtual Private Network) is a secure connection that encrypts your internet traffic and masks your IP address, providing privacy and security while allowing you to access content from different locations. It works by creating a virtual tunnel between your device and a remote server, routing your traffic through this tunnel to bypass geo-restrictions and protect your online identity.`
  },
  {
    id: '3',
    title: 'The Evolution of JavaScript',
    category: 'TECHNOLOGY',
    readTime: '4 min read',
    image: '/images/blog-3-javascript.webp',
    content: `JavaScript has come a long way since its inception in 1995. From humble beginnings as a simple scripting language for web pages, it has evolved into a powerful, versatile, and essential programming language used in both frontend and backend development. This article explores the journey of JavaScript, highlighting its key milestones, influential features, and its impact on modern web development. By understanding its evolution, developers can appreciate the language's growth and its role in shaping the future of web technologies.`
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
