export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  link: string;
}
