import { defineStore } from 'pinia'

interface PortfolioState {
  isAvailableForJob: Boolean
  skills: Array<{
    title: string
    id: number
    items: string[]
  }>
  projects: Array<{
    id: number
    title: string
    shortDescription: string
    longDescription: string
    image: string
    videos: string[]
    images: string[]
    myRole: string
    industries: string[]
    techStack: string[]
    slug: string
    links: {
      github: string
      live?: string | string[]
    }
  }>
  services: Array<{
    icon: string
    title: string
    description: string
    id: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  testimonials: Array<{
    name: string
    role: string
    avatar: string
    text: string
  }>
}

export const usePortfolioStore = defineStore('portfolio', {
  state: (): PortfolioState => ({
    isAvailableForJob: true,
    skills: [
      {
        title: 'Frontend',
        id: 1,
        items: [
          'Vue.js',
          'Vuex',
          'Pinia',
          'Vue-router',
          'Composition API',
          'Nuxt.js',
          'TypeScript',
          'JavaScript',
          'Vitest',
          'Jest',
          'Cypress',
          'Vite',
          'Gulp',
          'Webpack',
          'Figma',
          'Tailwind',
          'Bootstrap',
          'Vuetify',
          'SASS',
          'Ionic',
          'PWA',
          'Three.js',
          'GSAP',
        ],
      },
      {
        title: 'Backend',
        id: 2,
        items: [
          'Node.js',
          'Nest.js',
          'Express.js',
          'MongoDB',
          'MySQL',
          'PostgreSQL',
          'Redis',
          'TypeORM',
          'Mongoose',
          'Prisma',
          'AWS',
          'Docker',
          'CI/CD',
          'Github Actions',
          'Firebase',
          'Supabase',
          'Vercel',
          'WebSocket',
          'Rest API',
          'GraphQL',
          'nginx',
          'digitalocean',
        ],
      },
      {
        title: 'AI & ML',
        id: 3,
        items: ['Github Copilot', 'GPT-5', 'Gemini', 'Whisper', 'TTS', 'DALL·E'],
      },
    ],
    projects: [
      {
        id: 14,
        slug: 'acceptic',
        title: 'projects.acceptic.title',
        shortDescription: 'projects.acceptic.shortDescription',
        longDescription: 'projects.acceptic.longDescription',
        image: '/images/projects/acceptic/screen.png',
        images: [
          '/images/projects/acceptic/screen2.jpg',
          '/images/projects/acceptic/screen3.jpg',
          '/images/projects/acceptic/screen4.jpg',
          '/images/projects/acceptic/screen5.jpg',
          '/images/projects/acceptic/screen6.jpg',
        ],
        videos: [],
        myRole: 'projects.acceptic.myRole',
        industries: ['Corporate Websites', 'Web Development', 'Cloud Deployment'],
        techStack: ['Nuxt 3', 'TailwindCSS', 'TypeScript', 'Nodemailer', 'DigitalOcean', 'Nginx', 'PM2', 'Swiper'],
        links: {
          github: 'https://github.com/igor-kostenevich/acceptic',
          live: 'https://acceptic.com/',
        },
      },
      {
        id: 13,
        slug: 'poweria',
        title: 'projects.poweria.title',
        shortDescription: 'projects.poweria.shortDescription',
        longDescription: 'projects.poweria.longDescription',
        image: '/images/projects/poweria/screen.png',
        images: [
          '/images/projects/poweria/screen2.jpg',
          '/images/projects/poweria/screen3.jpg',
          '/images/projects/poweria/screen4.jpg',
          '/images/projects/poweria/screen5.jpg',
          '/images/projects/poweria/screen6.jpg',
          '/images/projects/poweria/screen7.jpg',
          '/images/projects/poweria/screen8.jpg',
          '/images/projects/poweria/screen9.jpg',
        ],
        videos: [],
        myRole: 'projects.poweria.myRole',
        industries: ['Energy Monitoring', 'Analytics', 'SaaS'],
        techStack: [
          'Vue 3',
          'Vite',
          'TailwindCSS',
          'TypeScript',
          'Pinia',
          'Headless UI',
          'Heroicons',
          'Vue I18n',
          'Chart.js',
          'amCharts 5',
          'js-cookie',
          'Express.js',
        ],
        links: {
          github: 'https://github.com/igor-kostenevich/poweria',
          live: 'https://portal.poweria.pl/',
        },
      },
      {
        id: 12,
        slug: 'pv-designer',
        title: 'projects.pv-designer.title',
        shortDescription: 'projects.pv-designer.shortDescription',
        longDescription: 'projects.pv-designer.longDescription',
        image: '/images/projects/pv/screen.png',
        images: [
          '/images/projects/pv/screen2.jpg',
          '/images/projects/pv/screen3.jpg',
          '/images/projects/pv/screen4.jpg',
          '/images/projects/pv/screen5.jpg',
          '/images/projects/pv/screen6.jpg',
          '/images/projects/pv/screen7.jpg',
          '/images/projects/pv/screen8.jpg',
          '/images/projects/pv/screen9.jpg',
        ],
        videos: [],
        myRole: 'projects.pv-designer.myRole',
        industries: ['Renewable Energy', 'SaaS', 'PV Design', 'Engineering Tools'],
        techStack: ['Vue 3', 'Vite', 'TailwindCSS', 'Vue Google Maps', 'Chart.js', 'Vue I18n'],
        links: {
          github: 'https://github.com/igor-kostenevich/pv',
          live: 'https://pv.soul-was-here.com/dashboard',
        },
      },
      {
        id: 11,
        slug: 'brick-crm',
        title: 'projects.brick-crm.title',
        shortDescription: 'projects.brick-crm.shortDescription',
        longDescription: 'projects.brick-crm.longDescription',
        image: '/images/projects/brick/screen.png',
        images: [
          '/images/projects/brick/screen2.jpg',
          '/images/projects/brick/screen3.jpg',
          '/images/projects/brick/screen4.jpg',
          '/images/projects/brick/screen5.jpg',
          '/images/projects/brick/screen6.jpg',
          '/images/projects/brick/screen7.jpg',
          '/images/projects/brick/screen8.jpg',
        ],
        videos: [],
        myRole: 'projects.brick-crm.myRole',
        industries: ['Construction', 'Architecture', 'CRM', 'Project Management'],
        techStack: [
          'Vue 3',
          'Vite',
          'Inertia.js',
          'TailwindCSS',
          'Cypress',
          'FullCalendar',
          'Tiptap Editor',
          'Vue Chart.js',
          'Frappe Gantt',
          'Vue Final Modal',
          'Vue I18n',
          'Leaflet',
          'Moment.js',
        ],
        links: {
          github: 'https://github.com/igor-kostenevich/brick',
          live: 'https://dev.brick-crm.soul-was-here.com/',
        },
      },
      {
        id: 13,
        slug: 'custom-cms',
        title: 'projects.custom-cms.title',
        shortDescription: 'projects.custom-cms.shortDescription',
        longDescription: 'projects.custom-cms.longDescription',
        image: '/images/projects/ford/screen.png',
        images: [
          '/images/projects/ford/screen2.jpg',
          '/images/projects/ford/screen3.jpg',
          '/images/projects/ford/screen4.jpg',
          '/images/projects/ford/screen5.jpg',
          '/images/projects/ford/screen6.jpg',
          '/images/projects/ford/screen7.jpg',
          '/images/projects/ford/screen8.jpg',
        ],
        videos: [],
        myRole: 'projects.custom-cms.myRole',
        industries: ['Automotive', 'Utility Services', 'Food & Lifestyle', 'CMS Development'],
        techStack: [
          'Nuxt 2',
          'TailwindCSS',
          'GSAP',
          'Swiper',
          'BugSnag',
          'LightGallery.js',
          'Vue-i18n',
          'Vee-Validate',
          'Google Maps',
          'reCAPTCHA',
          'Custom CMS',
        ],
        links: {
          github: 'https://github.com/igor-kostenevich/ford',
          live: [
            'https://ford.is/',
            'https://gamafelagid.is/',
            'https://www.mazda.is/',
            'https://gottogeinfalt-live.mango.is/',
            'https://www.askja.is/',
          ],
        },
      },
      {
        id: 3,
        slug: 'polyx',
        title: 'projects.polyx.title',
        shortDescription: 'projects.polyx.shortDescription',
        longDescription: 'projects.polyx.longDescription',
        image: '/images/projects/polyx/screen.png',
        images: [
          '/images/projects/polyx/screen2.jpg',
          '/images/projects/polyx/screen3.jpg',
          '/images/projects/polyx/screen4.jpg',
          '/images/projects/polyx/screen5.jpg',
          '/images/projects/polyx/screen6.jpg',
        ],
        videos: [],
        myRole: 'projects.polyx.myRole',
        industries: ['Crypto', 'Fintech', 'Trading'],
        techStack: ['Vue 2', 'Vuex', 'TypeScript', 'SCSS', 'Webpack 3', 'Highcharts', 'jQuery'],
        links: {
          github: 'https://github.com/igor-kostenevich/polyx',
          live: 'https://polyx.net/en',
        },
      },
      {
        id: 6,
        slug: 'planner-online',
        title: 'projects.planner-online.title',
        shortDescription: 'projects.planner-online.shortDescription',
        longDescription: 'projects.planner-online.longDescription',
        image: '/images/projects/planner/screen.png',
        images: [
          '/images/projects/planner/screen2.jpg',
          '/images/projects/planner/screen3.jpg',
          '/images/projects/planner/screen4.jpg',
          '/images/projects/planner/screen5.jpg',
        ],
        videos: [],
        myRole: 'projects.planner-online.myRole',
        industries: ['Retail', '3D Tools', 'Product Customization'],
        techStack: ['Vue 3', 'Inertia.js', 'Vite', 'TailwindCSS', 'Headless UI', 'Universal Cookie', 'PostCSS'],
        links: {
          github: 'https://github.com/igor-kostenevich/mw-planneronline',
          live: 'https://planeronline.castorama.pl/',
        },
      },
      {
        id: 4,
        slug: 'bathroom',
        title: 'projects.bathroom.title',
        shortDescription: 'projects.bathroom.shortDescription',
        longDescription: 'projects.bathroom.longDescription',
        image: '/images/projects/bathroom/screen.png',
        images: [
          '/images/projects/bathroom/screen2.jpg',
          '/images/projects/bathroom/screen3.jpg',
          '/images/projects/bathroom/screen4.jpg',
        ],
        videos: [],
        myRole: 'projects.bathroom.myRole',
        industries: ['Retail', 'UX/UI', 'Kiosk Apps'],
        techStack: ['Vue 3', 'Vuex', 'Vuetify 3', 'Swiper', 'Sass'],
        links: {
          github: 'https://github.com/igor-kostenevich/bathroom',
          live: 'https://lazienkoweinspiracje.castorama.pl/',
        },
      },
      {
        id: 5,
        slug: 'kitchen',
        title: 'projects.kitchen.title',
        shortDescription: 'projects.kitchen.shortDescription',
        longDescription: 'projects.kitchen.longDescription',
        image: '/images/projects/kitchen/screen.png',
        images: [
          '/images/projects/kitchen/screen2.jpg',
          '/images/projects/kitchen/screen3.jpg',
          '/images/projects/kitchen/screen4.jpg',
          '/images/projects/kitchen/screen5.jpg',
        ],
        videos: [],
        myRole: 'projects.kitchen.myRole',
        industries: ['Retail', 'UX/UI', 'Kiosk Apps'],
        techStack: ['Vue 2', 'Vuex', 'Vuetify 2', 'Bootstrap 4', 'Vuelidate', 'Sass', 'VForm'],
        links: {
          github: 'https://github.com/igor-kostenevich/kitchen',
          live: 'https://kuchenneinspiracje.castorama.pl/',
        },
      },
      {
        id: 1,
        slug: 'yolo',
        title: 'projects.yolo.title',
        shortDescription: 'projects.yolo.shortDescription',
        longDescription: 'projects.yolo.longDescription',
        image: '/images/projects/yolo/screen.png',
        images: ['/images/projects/yolo/screen2.jpeg'],
        videos: [],
        myRole: 'projects.yolo.myRole',
        industries: ['EdTech', 'E-learning', 'Internal Tools'],
        techStack: ['Vue 3', 'Pinia', 'TypeScript', 'Element Plus', 'Bootstrap', 'SCSS'],
        links: {
          github: 'https://github.com/igor-kostenevich/yolo',
          live: '',
        },
      },
      {
        id: 2,
        slug: 'trackk',
        title: 'projects.trackk.title',
        shortDescription: 'projects.trackk.shortDescription',
        longDescription: 'projects.trackk.longDescription',
        image: '',
        images: [],
        videos: [],
        myRole: 'projects.trackk.myRole',
        industries: ['EdTech', 'HR Tech', 'Internal Tools'],
        techStack: ['Vue 3', 'Vuex', 'Vuetify', 'Vue Router', 'Vite', 'Sass'],
        links: {
          github: 'https://github.com/igor-kostenevich/trackk',
          live: 'https://trackk.com',
        },
      },
      {
        id: 7,
        slug: 'camdog',
        title: 'projects.camdog.title',
        shortDescription: 'projects.camdog.shortDescription',
        longDescription: 'projects.camdog.longDescription',
        image: '/images/projects/camdog/screen.png',
        images: [],
        videos: ['https://www.youtube.com/watch?v=VPxfLD5lWX8'],
        myRole: 'projects.camdog.myRole',
        industries: ['AI', 'Security', 'SaaS', 'Video Surveillance'],
        techStack: [
          'Vue 3',
          'Vite',
          'TailwindCSS',
          'Stripe JS',
          'Firebase',
          'Video.js',
          'Playcore HLS',
          'VeeValidate',
          'Yup',
          'Google Maps',
          'Vis Timeline',
        ],
        links: {
          github: 'https://github.com/igor-kostenevich/camdog',
          live: 'https://camdog.ai',
        },
      },
      {
        id: 8,
        slug: 'handmaid',
        title: 'projects.handmaid.title',
        shortDescription: 'projects.handmaid.shortDescription',
        longDescription: 'projects.handmaid.longDescription',
        image: '/images/projects/portal/screen.png',
        images: ['/images/projects/portal/screen2.jpg'],
        videos: [],
        myRole: 'projects.handmaid.myRole',
        industries: ['Cleaning Services', 'Customer Portals', 'Service Apps'],
        techStack: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Vuelidate', 'Firebase', 'nuxt-i18n', 'Axios', 'Sass'],
        links: {
          github: 'https://github.com/igor-kostenevich/customer-portal',
          live: 'https://www.handmaidcleaning.com/',
        },
      },
    ],
    services: [
      {
        icon: 'frontend',
        title: 'services.frontend.title',
        description: 'services.frontend.description',
        id: 'frontend',
      },
      {
        icon: 'backend',
        title: 'services.backend.title',
        description: 'services.backend.description',
        id: 'backend',
      },
      {
        icon: 'fullstack',
        title: 'services.fullstack.title',
        description: 'services.fullstack.description',
        id: 'fullstack',
      },
      {
        icon: 'data-visualization',
        title: 'services.data-visualization.title',
        description: 'services.data-visualization.description',
        id: 'data-visualization',
      },
      {
        icon: 'optimization-refactoring',
        title: 'services.optimization-refactoring.title',
        description: 'services.optimization-refactoring.description',
        id: 'optimization-refactoring',
      },
      {
        icon: 'integration',
        title: 'services.integration.title',
        description: 'services.integration.description',
        id: 'integration',
      },
    ],
    faqs: [
      { question: 'faq.q1',  answer: 'faq.a1'  },
      { question: 'faq.q2',  answer: 'faq.a2'  },
      { question: 'faq.q3',  answer: 'faq.a3'  },
      { question: 'faq.q4',  answer: 'faq.a4'  },
      { question: 'faq.q5',  answer: 'faq.a5'  },
      { question: 'faq.q6',  answer: 'faq.a6'  },
      { question: 'faq.q7',  answer: 'faq.a7'  },
      { question: 'faq.q8',  answer: 'faq.a8'  },
      { question: 'faq.q9',  answer: 'faq.a9'  },
      { question: 'faq.q10', answer: 'faq.a10' },
      { question: 'faq.q11', answer: 'faq.a11' },
      { question: 'faq.q12', answer: 'faq.a12' },
      { question: 'faq.q13', answer: 'faq.a13' },
      { question: 'faq.q14', answer: 'faq.a14' }
    ],
    testimonials: [
      {
        name: 'Severyn Nalyvayko',
        role: 'CTO, TMSys Sp. z o.o.',
        avatar: 'severyn',
        text: `Ihor did an excellent job on this Vue.js project. His communication was clear, he met deadlines, and his front-end skills were impressive. He was responsive to feedback and proactive in solving challenges. I’d gladly work with him again!`,
      },
      {
        name: 'Slaine Willey',
        role: 'Product Owner, Edge Opti Tech LTD',
        avatar: 'slaine',
        text: `It was a pleasure to work with you! And I believe we could cooperate in future as well!`,
      },
      {
        name: 'Raquel Rodrigues',
        role: 'CTO, Eucalyptus Labs Inc',
        avatar: 'raquel',
        text: `Ihor played a crucial role in upgrading our Vue.js and Vuetify framework from version 2 to 3. His technical expertise streamlined our UI and significantly enhanced performance. He's highly professional and a great communicator. Highly recommended!`,
      },
      {
        name: 'Dmitri Plugari',
        role: 'SEO, Mango studio',
        avatar: 'dima',
        text: `Great quality of work!`,
      },
      {
        name: 'Yevhen Saienko',
        role: 'SEO, WebMagic',
        avatar: 'yevgen',
        text: `It was a pleasure to work with you! You have ideal soft skills! And I believe we could cooperate in future as well!`,
      },
      {
        name: 'Benjamin Rika',
        role: 'Tech Lead, Rika NettMarketing GmbH',
        avatar: 'benjamin',
        text: `Ihor did a great job helping us revamp our website. Very good knowledge of Vue and always responsive.`,
      },
    ],
  }),
  actions: {},
  getters: {
    servicesCount: state => state.services.length,
  },
})
