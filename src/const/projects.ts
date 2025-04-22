import type { Project } from '../interfaces/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ChatBot Gemini',
    description: 'Desarrollo de un chatbot para atención al cliente con IA.',
    image: '/images/1.png',
    category: 'frontend',
    link: 'https://chat-bot-theta-jet.vercel.app/',
  },
  {
    id: 2,
    title: 'Landing Page App Mobile',
    description: 'Página de aterrizaje para una aplicación móvil innovadora.',
    image: '/images/2.png',
    category: 'frontend',
    link: 'https://sparkly-pavlova-98b4ab.netlify.app/',
  },
  {
    id: 3,
    title: 'Landing Page Mudy.CL',
    description: 'Página de aterrizaje para solicitar mudanzas.',
    image: '/images/3.png',
    category: 'frontend',
    link: 'https://mudy-cl.vercel.app/',
  },
  {
    id: 4,
    title: 'Barber Shop',
    description: 'Página de aterrizaje para una barbería.',
    image: '/images/4.png',
    category: 'frontend',
    link: 'https://barber-shop-omega-seven.vercel.app/',
  },
];
