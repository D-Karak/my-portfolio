
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  githubLink: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

export interface Skill {
  name: string;
  icon?: string;
  logo?: string;
}
