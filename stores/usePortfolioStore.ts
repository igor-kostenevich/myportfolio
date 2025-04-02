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
    description: string
    tags?: string[]
    url: string
    image: string
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

const testimg = 'https://d2zp5xs5cp8zlg.cloudfront.net/image-79322-800.jpg'

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
        items: ['Github Copilot', 'GPT-4.5', 'Gemini', 'Whisper', 'TTS', 'DALL·E'],
      },
    ],
    projects: [
      {
        id: 1,
        title: 'Nuxt.js Portfolio',
        description: 'My personal portfolio website built with Nuxt.js and Tailwind CSS',
        tags: ['nuxt', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg,
      },
      {
        id: 2,
        title: 'Vue.js Portfolio',
        description: 'My personal portfolio website built with Vue.js and Tailwind CSS',
        tags: ['vue', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg,
      },
      {
        id: 3,
        title: 'Nest.js Blog',
        description: 'My personal blog website built with Nest.js and Tailwind CSS',
        tags: ['nest', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg,
      },
      {
        id: 4,
        title: 'Vue.js Blog',
        description: 'My personal blog website built with Vue.js and Tailwind CSS',
        tags: ['vue', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg,
      },
      {
        id: 5,
        title: 'Nuxt.js E-commerce',
        description: 'My personal e-commerce website built with Nuxt.js and Tailwind CSS',
        tags: ['nuxt', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg,
      },
      {
        id: 6,
        title: 'Vue.js E-commerce',
        description: 'My personal e-commerce website built with Vue.js and Tailwind CSS',
        tags: ['vue', 'tailwind', 'vite', 'pinia'],
        url: '',
        image: testimg,
      },
    ],
    services: [
      {
        icon: 'frontend',
        title: 'Frontend Development',
        description:
          'I craft visually engaging, responsive UIs with Vue/Nuxt—supporting SSR, SPA, and PWA. Each solution is built for performance and a smooth user experience.',
        id: 'frontend',
      },
      {
        icon: 'backend',
        title: 'Backend Development',
        description:
          'I build scalable server-side applications using Node/NestJS, ensuring robust performance and secure APIs. Data flows seamlessly with well-structured database integrations.',
        id: 'backend',
      },
      {
        icon: 'fullstack',
        title: 'Full-Stack Solutions',
        description:
          'I combine NestJS, robust database setups, and secure authentication to deliver end-to-end applications. The result: scalable, integrated software tailored to your needs.',
        id: 'fullstack',
      },
      {
        icon: 'data-visualization',
        title: 'Data Visualization',
        description:
          'I create interactive data visualizations using amCharts, D3.js and Three.js. These engaging, informative graphics help users understand complex data and make informed decisions.',
        id: 'data-visualization',
      },
      {
        icon: 'optimization-refactoring',
        title: 'Optimization & Refactoring',
        description:
          'I optimize existing codebases for performance and scalability, refactoring to improve maintainability and readability. The result: faster, more efficient software.',
        id: 'optimization-refactoring',
      },
      {
        icon: 'integration',
        title: 'Integration & Deployment',
        description:
          'I integrate third-party services and APIs to extend your software’s functionality. I also handle deployment, ensuring your application is live and accessible to users.',
        id: 'integration',
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a web app?",
        answer: `
          <p>It depends on the project. Thanks to my experience and tools, I work fast and efficiently.</p>
          <p><strong>Examples:</strong></p>
          <ul class="list-disc list-inside">
            <li>- Single-page landing — 2–5 days</li>
            <li>- Small website with 3–5 pages and responsive layout — 5–10 days</li>
            <li>- CRM or admin panel with roles and authorization — from 10 working days</li>
          </ul>
          <p>Timeframes are discussed in advance and always met.</p>
        `
      },
      {
        question: "What does the development process look like?",
        answer: `
          <p><strong>The process is transparent and consists of several stages:</strong></p>
          <ol class="list-decimal list-inside mt-2">
            <li>1. We define your goals, needs, and budget</li>
            <li>2. We analyze existing design or create a structure from scratch</li>
            <li>3. I plan the architecture — both visual and technical</li>
            <li>4. Development stage: frontend and/or backend</li>
            <li>5. Testing and demo access if needed</li>
            <li>6. Launch and deployment to the server</li>
          </ol>

          <p class="mt-2"><strong>After launch, you’ll be able to manage content independently:</strong></p>
          <ul class="list-disc list-inside">
            <li>- via a simple admin panel</li>
            <li>- via a CRM with roles, filters, export, and change history</li>
            <li>- via an editable JSON file — a budget-friendly solution</li>
          </ul>
        `
      },
      {
        question: "Can you help with design too?",
        answer: `
          <p>Yes. If you don’t have a design yet — I collaborate with a skilled UI/UX designer with 7 years of experience.</p>
          <p>We can create a clean, modern, and user-friendly interface tailored to your audience and business goals.</p>
          <p>From wireframes and prototypes to full visual design — everything can be done before development starts.</p>
          <p class="mt-2">You can check out his portfolio here: 
            <a href="https://oleksandr-malik.webflow.io/" target="_blank">See profile</a>
          </p>
        `
      },
      {
        question: "What if I need changes later?",
        answer: `
          <p>Minor edits (like design tweaks or text updates) after project delivery are free.</p>
          <p>More advanced or long-term improvements can be agreed upon separately.</p>
          <p>I’m always open to cooperation at any stage.</p>
        `
      },
      {
        question: "How do you ensure website security?",
        answer: `
          <ul class="list-disc list-inside">
            <li>- Secure HTTPS connection by default</li>
            <li>- Best practices for protecting APIs and forms</li>
            <li>- Basic anti-brute-force and spam protections</li>
            <li>- Regular backups and access control</li>
            <li>- Reliable VPS hosting (DigitalOcean, Hetzner, etc.)</li>
            <li>- Following OWASP recommendations and regular dependency updates</li>
          </ul>
        `
      },
      {
        question: "How is your approach different from an agency?",
        answer: `
          <ul class="list-disc list-inside">
            <li>- You work directly with me — no managers or miscommunication</li>
            <li>- Quick feedback and flexibility</li>
            <li>- Solutions tailored to your budget and needs — no templates</li>
            <li>- Focus on business value, not just appearance</li>
            <li>- Transparent process — no hidden fees</li>
          </ul>
          <p>You get a reliable, well-thought-out solution, without the overhead.</p>
        `
      },
      {
        question: "Do you provide support after the project is finished?",
        answer: `
          <p>Yes, I offer support after the project:</p>
          <ul class="list-disc list-inside">
            <li>- Help with uploading new content</li>
            <li>- Minor fixes or improvements</li>
            <li>- Consultations on future upgrades</li>
            <li>- Monitoring, notifications, and auto-deploy setup if needed</li>
            <li>- Optional hourly or subscription-based support</li>
          </ul>
        `
      },
      {
        question: "Do you work under a contract or platform?",
        answer: `
          <p>I work the way that’s most convenient for you:</p>
          <ul class="list-disc list-inside">
            <li>Upwork</li>
            <li>Wise</li>
            <li>IBAN</li>
            <li>Sole Proprietor (for Ukraine)</li>
            <li>Official contract with NDA if required</li>
          </ul>
          <p>If you prefer another option — we’ll discuss it.</p>
        `
      },
      {
        question: "Why should I choose you?",
        answer: `
          <ul class="list-disc list-inside">
            <li>- I’m always in touch</li>
            <li>- Focused on quality and long-term results</li>
            <li>- I don’t chase trends — I solve real business problems</li>
            <li>- I help optimize your budget and offer flexible solutions</li>
            <li>- I work as a partner, not just a coder</li>
          </ul>
          <p>Your satisfaction matters to me — and I want you to come back again.</p>
        `
      },
      {
        question: "How are you different from other freelancers?",
        answer: `
          <ul class="list-disc list-inside">
            <li>- I don’t disappear or delay deadlines</li>
            <li>- I think both like a developer and a product-minded partner</li>
            <li>- I offer flexible development: start small and scale later</li>
            <li>- I value long-term cooperation over one-time gigs</li>
          </ul>
        `
      },
      {
        question: "How reliable is your tech stack?",
        answer: `
          <p>I use a modern and reliable tech stack:</p>
          <ul class="list-disc list-inside">
            <li><strong>Frontend:</strong> Nuxt 3, Vue.js, TypeScript</li>
            <li><strong>Backend:</strong> NestJS, Express, Firebase, MongoDB/PostgreSQL</li>
          </ul>
          <p>Great for landing pages, admin panels, CRMs, marketplaces, and custom apps.</p>
        `
      },
      {
        question: "How do you ensure the website loads fast?",
        answer: `
          <ul class="list-disc list-inside">
            <li>-Optimized images and fonts</li>
            <li>- SSR, lazy-loading, and code-splitting</li>
            <li>- Request caching and minimal dependencies</li>
            <li>- CDN and server-level optimization</li>
            <li>- Lighthouse optimization — 90+ scores guaranteed</li>
          </ul>
        `
      },
      {
        question: "What is your approach to SEO and performance?",
        answer: `
          <ul class="list-disc list-inside">
            <li>- Semantic HTML structure</li>
            <li>- Meta tags, Open Graph, and favicons setup</li>
            <li>- Pretty URLs, redirects, canonical links</li>
            <li>- SSR/SSG for proper indexing</li>
            <li>- Integration with Google Search Console and analytics</li>
          </ul>
        `
      },
      {
        question: "What types of websites do you develop?",
        answer: `
          <p>I create custom solutions for various needs:</p>
          <ul class="list-disc list-inside">
            <li>- Landing pages — fast, mobile-friendly</li>
            <li>- Multi-page websites — with dynamic content</li>
            <li>- Online stores — with cart, payments, and filters</li>
            <li>- Admin panels and CRMs — with roles, auth, notifications</li>
            <li>- Dashboards — with charts, filters, and analytics</li>
            <li>- Portfolio and business card websites</li>
          </ul>
          <p>All sites are responsive, reliable, and easy to maintain or scale.</p>
        `
      }
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
        role: 'Project Manager, Edge Opti Tech LTD',
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
