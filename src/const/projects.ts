import type { Project } from '../interfaces/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestión Empresarial',
    description:
      'Aplicación web completa para la gestión de recursos empresariales.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Plataforma E-learning',
    description:
      'Plataforma educativa con funcionalidades de video streaming y evaluaciones.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'API REST para E-commerce',
    description: 'Backend robusto para plataforma de comercio electrónico.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'backend',
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Panel de control para visualización de datos en tiempo real.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'frontend',
  },
];
