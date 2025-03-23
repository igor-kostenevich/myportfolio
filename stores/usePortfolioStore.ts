import { defineStore } from "pinia"

interface PortfolioState {
  isAvailableForJob: Boolean
  skills: Array<{
    title: string,
    id: number,
    items: string[]
  }>
  projects: Array<{
    id: number,
    title: string,
    description: string,
    tags?: string[],
    url: string,
    image: string
  }>
  services: Array<{
    icon: string,
    title: string,
    description: string,
    id: string
  }>
}

const testimg = 'https://d2zp5xs5cp8zlg.cloudfront.net/image-79322-800.jpg'

export const usePortfolioStore = defineStore("portfolio", {
  state: (): PortfolioState => ({
    isAvailableForJob: true,
    skills: [
      {
        title: 'Frontend',
        id: 1,
        items: [
          'Vue.js', 'Vuex', 'Pinia', 'Vue-router', 'Composition API', 'Nuxt.js',
          'TypeScript', 'JavaScript',
          'Vitest', 'Jest', 'Cypress',
          'Vite', 'Gulp', 'Webpack',
          'Figma',
          'Tailwind', 'Bootstrap', 'Vuetify', 'SASS', 'Ionic',
          'PWA',
          'Three.js', 'GSAP', 
        ]
      },
      {
        title: 'Backend',
        id: 2,
        items: [
          'Node.js', 'Nest.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis',
          'TypeORM', 'Mongoose', 'Prisma', 'AWS',
          'Docker', 'CI/CD', 'Github Actions',
          'Firebase', 'Supabase', 'Vercel',
          'WebSocket', 'Rest API', 'GraphQL', 'nginx', 'digitalocean'
        ]
      },
      {
        title: 'AI & ML',
        id: 3,
        items: [
          'Github Copilot', 'GPT-4.5', 'Gemini', 'Whisper', 'TTS', 'DALL·E',
        ]
      }
    ],
    projects: [
      {
        id: 1,
        title: 'Nuxt.js Portfolio',
        description: 'My personal portfolio website built with Nuxt.js and Tailwind CSS',
        tags: ['nuxt', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg
      },
      {
        id: 2,
        title: 'Vue.js Portfolio',
        description: 'My personal portfolio website built with Vue.js and Tailwind CSS',
        tags: ['vue', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg
      },
      {
        id: 3,
        title: 'Nest.js Blog',
        description: 'My personal blog website built with Nest.js and Tailwind CSS',
        tags: ['nest', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg
      },
      {
        id: 4,
        title: 'Vue.js Blog',
        description: 'My personal blog website built with Vue.js and Tailwind CSS',
        tags: ['vue', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg
      },
      {
        id: 5,
        title: 'Nuxt.js E-commerce',
        description: 'My personal e-commerce website built with Nuxt.js and Tailwind CSS',
        tags: ['nuxt', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg
      },
      {
        id: 6,
        title: 'Vue.js E-commerce',
        description: 'My personal e-commerce website built with Vue.js and Tailwind CSS',
        tags: ['vue', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg
      }
    ],
    services: [
      {
        icon: 'frontend',
        title: 'Frontend Development',
        description: 'I craft visually engaging, responsive UIs with Vue/Nuxt—supporting SSR, SPA, and PWA. Each solution is built for performance and a smooth user experience.',
        id: 'frontend'
      },
      {
        icon: 'backend',
        title: 'Backend Development',
        description: 'I build scalable server-side applications using Node/NestJS, ensuring robust performance and secure APIs. Data flows seamlessly with well-structured database integrations.',
        id: 'backend'
      },
      {
        icon: 'fullstack',
        title: 'Full-Stack Solutions',
        description: 'I combine NestJS, robust database setups, and secure authentication to deliver end-to-end applications. The result: scalable, integrated software tailored to your needs.',
        id: 'fullstack'
      },
      {
        icon: 'data-visualization',
        title: 'Data Visualization',
        description: 'I create interactive data visualizations using amCharts, D3.js and Three.js. These engaging, informative graphics help users understand complex data and make informed decisions.',
        id: 'data-visualization'
      },
      {
        icon: 'optimization-refactoring',
        title: 'Optimization & Refactoring',
        description: 'I optimize existing codebases for performance and scalability, refactoring to improve maintainability and readability. The result: faster, more efficient software.',
        id: 'optimization-refactoring'
      },
      {
        'icon': 'integration',
        'title': 'Integration & Deployment',
        'description': 'I integrate third-party services and APIs to extend your software’s functionality. I also handle deployment, ensuring your application is live and accessible to users.',
        'id': 'integration'
      }
    ]
  }),
  actions: {
  },
  getters: {
    servicesCount: state => state.services.length,
  }
});