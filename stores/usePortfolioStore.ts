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
        items: ['Github Copilot', 'GPT-4.5', 'Gemini', 'Whisper', 'TTS', 'DALL·E'],
      },
    ],
    projects: [
      {
        id: 14,
        slug: 'acceptic',
        title: 'Acceptic – Corporate Website with Server-Side Form Handling and SSR Deployment',
        shortDescription: 'Modern Nuxt 3 corporate website with integrated form endpoints, deployed to DigitalOcean with Nginx and PM2.',
        longDescription: `
          Acceptic is a modern, clean, and fast-loading corporate website built with Nuxt 3. The project was designed to showcase the company's services, expertise, and culture through a responsive, interactive user experience powered by server-side rendering.
      
          I was fully responsible for the frontend and server setup, including:
          
          <ul>
            <li>Development of all pages using Nuxt 3, TailwindCSS, Swiper, and Vue 3 Composition API</li>
            <li>Implementation of server-side logic using Nuxt’s built-in endpoints for contact forms with Nodemailer</li>
            <li>Validation, notification system, and form UX optimized for conversion</li>
            <li>Full SSR deployment on a cloud VPS (DigitalOcean), configured from scratch</li>
            <li>Setup of **Nginx reverse proxy** and **PM2** for process management and production monitoring</li>
            <li>CI-ready build scripts for seamless deployment and environment control</li>
          </ul>
      
          The result is a highly performant, SEO-optimized, scalable corporate site with minimal backend overhead, fully tailored to business needs and ready for future content expansion.
        `.trim(),
        image: '/images/projects/acceptic/screen.png',
        images: [
          '/images/projects/acceptic/screen2.jpg',
          '/images/projects/acceptic/screen3.jpg',
          '/images/projects/acceptic/screen4.jpg',
          '/images/projects/acceptic/screen5.jpg',
          '/images/projects/acceptic/screen6.jpg',
        ],
        videos: [],
        myRole: 'Full-Stack Developer (Nuxt 3, SSR, DevOps)',
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
        title: 'Poweria – Energy Analytics and Monitoring Platform',
        shortDescription: 'Web application for energy data visualization, real-time monitoring, user roles and dynamic dashboards.',
        longDescription: `
          Poweria is a modern analytics platform for monitoring energy production, consumption, and performance across various user types. I was the sole frontend developer on the project, responsible for building the UI architecture from scratch and implementing a wide range of features.
      
          Key functionality included:
          <ul>
            <li>Modular dashboard layout with role-based access for System Admins, Installers, Customer Admins, and Customers</li>
            <li>Real-time data updates every 10 seconds without page reloads</li>
            <li>Custom charts and graphs with amCharts and Chart.js</li>
            <li>Complex table views with sorting, filtering, and virtual scrolling for performance</li>
            <li>Authentication system with session handling and JWT</li>
            <li>Role and permission-based views and interactions</li>
            <li>Multilingual support with Vue I18n</li>
            <li>Notifications, date pickers, and other reusable UI components</li>
            <li>Custom endpoints created in Node.js for backend integration</li>
          </ul>
      
          I also worked on the deployment pipeline, ESLint + Prettier config, and overall code structure using Vite, Pinia, and Vue 3 Composition API.
        `.trim(),
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
        myRole: 'Fullstack (Lead FE & Partial BE) – dashboards, access control, real-time sync, custom charts, API with Express',
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
        }
      },      
      {
        id: 12,
        slug: 'pv-designer',
        title: 'PV Designer – Application for Designing Photovoltaic Installations',
        shortDescription: 'Advanced tool for planning and visualizing PV installations with automated layout, calculations, and offer generation.',
        longDescription: `
          PV Designer is a professional web application for designing photovoltaic (solar) installations. It allows users to quickly create precise solar panel layouts on rooftops, ground surfaces, or object images using real-world coordinates via Google Maps.
      
          Key features include:
          <ul>
            <li>Address-based or map-click location selection</li>
            <li>Designing directly on uploaded photos or custom roof shapes</li>
            <li>Automatic and optimal panel placement in selected areas</li>
            <li>Ability to group panels into custom strings with inverter matching</li>
            <li>Real-world energy yield simulation based on shading, terrain, and losses</li>
            <li>Generation of multi-option commercial offers with full data calculations</li>
            <li>Technical documentation builder with electrical diagrams</li>
            <li>ROI and payback time calculation including subsidies or custom parameters</li>
            <li>Dynamic component library with real-time updates</li>
            <li>Auto-generated bill of materials with cable lengths</li>
            <li>3D visualizations of the installation</li>
          </ul>
      
          I was the main frontend developer of the project, implementing core functionality including the visual design tools, panel placement logic, map integration, and full offer generation flow.
        `.trim(),
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
        myRole: 'Lead Frontend Developer – UI/UX logic, map tools, panel placement, offer builder',
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
        title: 'Brick CRM – Project & Workflow Management for Architects and Builders',
        shortDescription: 'A modern CRM platform with calendar, kanban board, workload tracking, file system, ticketing, and drawing layouts.',
        longDescription: `
          Brick CRM is a full-featured project management system tailored for architects, construction teams, and engineering firms. It offers powerful tools for task coordination, resource planning, and document handling within a single streamlined interface.
      
          I was the sole front-end developer on this project for over a year and implemented more than 70% of the platform’s functionality. Key features I developed include:
          
          <ul>
            <li>A custom fullcalendar-based scheduling system</li>
            <li>Interactive kanban board with drag-and-drop support</li>
            <li>Workload tracking and task distribution modules</li>
            <li>A complete internal file system with lightbox previews</li>
            <li>A ticketing/helpdesk module for support management</li>
            <li>Scalable layout tools for architectural drawings</li>
            <li>Migration from Vue 2 to Vue 3 and Vite</li>
          </ul>
      
          The application is built with Vue 3, Inertia.js, TailwindCSS, FullCalendar, Tiptap editor, Chart.js, and a variety of modular UI libraries. Localization, notifications, tooltips, and offline-friendly features are all deeply integrated into the user experience.
        `.trim(),
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
        myRole: 'Sole Frontend Developer – Vue 3 migration, core UI, and system architecture',
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
        title: 'Custom CMS Platform – Scalable Website System for Automotive and Service Brands',
        shortDescription: 'A Nuxt.js-based CMS platform used to build branded websites dealerships, service booking, and recipe content, etc',
        longDescription: `
          This project is a powerful, multi-site CMS platform built with Nuxt.js, designed to support a range of websites for automotive brands, rental services, and eco-initiatives.

          I worked as one of the lead frontend developers and was responsible for developing the UI and architecture across several websites built on this system. Each site had its own design, content structure, and features, yet shared a common core — allowing for rapid scaling, modular customization, and centralized updates.

          Key contributions and features I developed:
          <ul>
            <li>Modular component system using Nuxt Composition API</li>
            <li>Media galleries, sliders, product/vehicle configurators</li>
            <li>Custom integrations with Google Maps, reCAPTCHA, analytics, and third-party APIs</li>
            <li>Full SEO integration: sitemaps, JSON-LD, multilingual (nuxt-i18n)</li>
            <li>Animations with GSAP, Swiper carousels, BugSnag error tracking</li>
            <li>Multi-language and region-ready layout system</li>
            <li>Seamless integration with custom CMS backend</li>
          </ul>

          The platform now powers multiple high-traffic websites, adapted to fit different industries with consistent performance and maintainability.
        `.trim(),
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
        myRole: 'Frontend Developer – Multi-site architecture, UI/UX system, CMS integration',
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
          live: ['https://ford.is/', 'https://gamafelagid.is/', 'https://www.mazda.is/', 'https://gottogeinfalt-live.mango.is/', 'https://www.askja.is/'],
        },
      },
      {
        id: 3,
        slug: 'polyx',
        title: 'Polyx Crypto Exchange',
        shortDescription: 'Secure and user-friendly cryptocurrency exchange platform for spot trading and digital asset management.',
        longDescription: `
          Polyx is a cryptocurrency exchange designed for both novice and experienced traders. The platform provides spot trading with a clear and intuitive interface, real-time charts, and detailed market analytics.
      
          Built with a focus on security, performance, and user experience, Polyx supports various trading pairs and offers features like cold wallet storage, two-factor authentication (2FA), and anti-phishing protection.
      
          The exchange also includes modules for account management, transaction history, deposit and withdrawal flows, KYC/AML compliance, and responsive support. Its scalable architecture allows easy expansion for new features and trading instruments.
        `.trim(),
        image: '/images/projects/polyx/screen.png',
        images: [
          '/images/projects/polyx/screen2.jpg',
          '/images/projects/polyx/screen3.jpg',
          '/images/projects/polyx/screen4.jpg',
          '/images/projects/polyx/screen5.jpg',
          '/images/projects/polyx/screen6.jpg',
        ],
        videos: [],
        myRole: 'Frontend Developer',
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
        title: 'Planner Online',
        shortDescription: 'Interactive web planner for kitchen and bathroom design with 3D visualization and project saving.',
        longDescription: `
          Planner Online is a Vue 3 + Inertia.js-based interactive web application developed for Castorama customers in Poland. It allows users to plan, customize, and visualize their kitchen or bathroom designs directly in the browser, with a smooth and responsive interface.
      
          The application integrates a 3D planner engine (via iframe or external script) and supports multi-step wizards, layout configuration, and persistent project saving through user accounts or cookies.
      
          Built using Vite, TailwindCSS, and Headless UI, the frontend offers a clean, modern design with accessible components. The system also uses UUIDs for identifying user sessions and integrates various utilities for cookie handling, form inputs, and dynamic script loading.
        `.trim(),
        image: '/images/projects/planner/screen.png',
        images: [
          '/images/projects/planner/screen2.jpg',
          '/images/projects/planner/screen3.jpg',
          '/images/projects/planner/screen4.jpg',
          '/images/projects/planner/screen5.jpg',
        ],
        videos: [],
        myRole: 'Frontend',
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
        title: 'Bathroom Inspirations (Castorama)',
        shortDescription: 'Interactive in-store web app for bathroom design inspiration and customer engagement.',
        longDescription: `
          Łazienkowe Inspiracje is an interactive Vue 3 application developed for Castorama stores in Poland. It provides customers with a modern touchscreen interface to explore bathroom designs, collections, and product inspirations directly in physical retail locations.
      
          The application includes features like category-based browsing, fullscreen image galleries, and QR code generation for mobile access. A virtual keyboard and idle screen functionality ensure optimal UX on public touchscreen kiosks.
      
          Developed with performance and simplicity in mind, the app works offline, auto-restarts on inactivity, and supports multiple screens and content updates via CMS.
        `.trim(),
        image: '/images/projects/bathroom/screen.png',
        images: ['/images/projects/bathroom/screen2.jpg', '/images/projects/bathroom/screen3.jpg', '/images/projects/bathroom/screen4.jpg'],
        videos: [],
        myRole: 'Frontend',
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
        title: 'Kitchen Inspirations (Castorama)',
        shortDescription: 'Interactive in-store web app for kitchen design inspiration and customer engagement.',
        longDescription: `
          Kitchen Inspirations is an interactive Vue 3 application developed for Castorama stores in Poland. It allows customers to browse modern kitchen arrangements, product lines, and design inspirations through a touchscreen interface installed in retail locations.
      
          Just like its bathroom counterpart, the app features category navigation, fullscreen galleries, and the ability to generate QR codes for seamless mobile continuation. Virtual keyboard support and automatic idle screen make it perfect for kiosk usage.
      
          Built with scalability in mind, the application supports multiple screen types, auto-updates content via CMS, and ensures smooth performance in offline mode with a fallback mechanism and auto-restart on user inactivity.
        `.trim(),
        image: '/images/projects/kitchen/screen.png',
        images: [
          '/images/projects/kitchen/screen2.jpg',
          '/images/projects/kitchen/screen3.jpg',
          '/images/projects/kitchen/screen4.jpg',
          '/images/projects/kitchen/screen5.jpg',
        ],
        videos: [],
        myRole: 'Frontend',
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
        title: 'Yolo Education Platform',
        shortDescription: 'Web platform for managing educational workflows: tasks, events, staff, and more.',
        longDescription: `
          Yolo is a modern educational management platform built for learning centers. The system includes a dynamic event calendar, task and homework tables, user and employee management, progress dashboards, and internal messaging.
          
          The platform was designed to simplify day-to-day operations and communication within educational institutions. Its modular structure allows scaling to fit the needs of small tutoring centers and large multi-branch academies.
          
          Additional features included: real-time notifications, role-based access (admin, teacher, student), file sharing, and user activity tracking.
        `.trim(),
        image: '/images/projects/yolo/screen.png',
        images: ['/images/projects/yolo/screen2.jpeg'],
        videos: [],
        myRole: 'Frontend',
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
        title: 'Trackk – Staff Observation & Coaching Platform',
        shortDescription: 'A platform for observing, evaluating, and coaching staff in childcare and educational organizations.',
        longDescription: `
          Trackk is a platform designed to monitor and enhance the performance of staff working in kindergartens and educational institutions. It enables structured individual and group observations, provides questionnaires for feedback, supports coaching sessions, and tracks development goals.
          
          The system includes role-based access, location and group management, activity and policy categorization, and a rich set of predefined observation questions based on pedagogical standards. Administrators can create detailed assessments across various categories such as interaction skills, language development, and social-emotional development. Built for flexibility and insight, Trackk helps organizations build a strong, supportive working environment.
        `.trim(),
        image: '',
        images: [],
        videos: [],
        myRole: 'Frontend Developer – implemented all core UI screens, page logic, localization, and CMS integration.',
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
        title: 'Camdog.ai – Video Surveillance Platform',
        shortDescription: 'Cloud-based video surveillance system with AI analytics, camera management, billing, and real-time alerts.',
        longDescription: `
          Camdog.ai is a modern cloud video surveillance platform designed for real-time monitoring, smart alerts, and multi-camera management. The system allows users to connect IP cameras, view live and recorded streams, configure alerts, manage locations, and monitor activity across physical spaces via a web interface.
      
          Built with Vue 3, TailwindCSS, and Vite, the frontend integrates with a powerful REST API to provide seamless camera onboarding, geolocation tagging, AI-based motion detection zones (polygon drawing), and smart notifications. Users can manage subscription plans through integrated Stripe billing and view detailed camera session reports.
      
          My work on the project included developing the camera management interface (adding/editing/removing cameras, reordering, snapshots), integrating live video playback via HLS and Video.js, implementing polygon editing tools for AI motion detection zones, and building interactive video walls with drag-and-drop support.
      
          I also worked on:
          <ul>
            <li>Stripe billing integration for subscription plans</li>
            <li>Dynamic timeline visualization using vis-timeline</li>
            <li>Notifications and alert settings per camera</li>
            <li>Interactive location tagging on Google Maps</li>
            <li>Session history and billing reports UI</li>
          </ul>
        `.trim(),
        image: '/images/projects/camdog/screen.png',
        images: [],
        videos: ['https://www.youtube.com/watch?v=VPxfLD5lWX8'],
        myRole: 'Frontend Developer – UI/UX implementation, video stream integration, camera management features',
        industries: ['AI', 'Security', 'SaaS', 'Video Surveillance'],
        techStack: ['Vue 3', 'Vite', 'TailwindCSS', 'Stripe JS', 'Firebase', 'Video.js', 'Playcore HLS', 'VeeValidate', 'Yup', 'Google Maps', 'Vis Timeline'],
        links: {
          github: 'https://github.com/igor-kostenevich/camdog',
          live: 'https://camdog.ai',
        },
      },
      {
        id: 8,
        slug: 'handmaid',
        title: 'Handmaid Cleaning – Online Booking & Client Management Platform',
        shortDescription: 'A modern web app for managing cleaning service bookings, client accounts, and real-time scheduling.',
        longDescription: `
          This project is a web-based client management and booking platform for a professional cleaning company. It allows users to quickly book services, manage upcoming appointments, receive status updates, and interact with customer support.

          The application was built using Nuxt.js with TypeScript and TailwindCSS. It includes multilingual support via nuxt-i18n, form validation with Vuelidate, persistent user sessions with Firebase, and interactive notifications via Vue Toast and VTooltip.

          The dashboard provides:
          <ul>
            <li>Fast service booking and rescheduling flow</li>
            <li>Cleaning history, payment tracking, and reviews</li>
            <li>Multistep forms, input masking, and tooltips</li>
            <li>Firebase-based login and session refresh</li>
            <li>Scalable layout using Tailwind UI components</li>
          </ul>
        `.trim(),
        image: '/images/projects/portal/screen.png',
        images: ['/images/projects/portal/screen2.jpg'],
        videos: [],
        myRole: 'Frontend Developer',
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
        question: 'How long does it take to build a web app?',
        answer: `
          <p>It depends on the project. Thanks to my experience and tools, I work fast and efficiently.</p>
          <p><strong>Examples:</strong></p>
          <ul class="list-disc list-inside">
            <li>- Single-page landing — 2–5 days</li>
            <li>- Small website with 3–5 pages and responsive layout — 5–10 days</li>
            <li>- CRM or admin panel with roles and authorization — from 10 working days</li>
          </ul>
          <p>Timeframes are discussed in advance and always met.</p>
          <p>*The timeline may vary depending on the features and integrations you need.</p>
        `,
      },
      {
        question: 'What does the development process look like?',
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
          
          <p>You stay updated throughout the process — from planning to launch.</p>
        `,
      },
      {
        question: 'Can you help with design too?',
        answer: `
          <p>Yes. If you don’t have a design yet — I collaborate with a skilled UI/UX designer with 7 years of experience.</p>
          <p>We can create a clean, modern, and user-friendly interface tailored to your audience and business goals.</p>
          <p>From wireframes and prototypes to full visual design — everything can be done before development starts.</p>
          <p class="mt-2">You can check out his portfolio here: 
            <a href="https://oleksandr-malik.webflow.io/" target="_blank">See profile</a>
          </p>
        `,
      },
      {
        question: 'What if I need changes later?',
        answer: `
          <p>Minor edits (like design tweaks or text updates) after project delivery are free.</p>
          <p>More advanced or long-term improvements can be agreed upon separately.</p>
          <p>I’m always open to cooperation at any stage.</p>
        `,
      },
      {
        question: 'How do you ensure website security?',
        answer: `
          <ul class="list-disc list-inside">
            <li>- Secure HTTPS connection by default</li>
            <li>- Best practices for protecting APIs and forms</li>
            <li>- Basic anti-brute-force and spam protections</li>
            <li>- Regular backups and access control</li>
            <li>- Reliable VPS hosting (DigitalOcean, Hetzner, etc.)</li>
            <li>- Following OWASP recommendations and regular dependency updates</li>
          </ul>
        `,
      },
      {
        question: 'How is your approach different from an agency?',
        answer: `
          <ul class="list-disc list-inside">
            <li>- You work directly with me — no managers or miscommunication</li>
            <li>- Quick feedback and flexibility</li>
            <li>- Solutions tailored to your budget and needs — no templates</li>
            <li>- Focus on business value, not just appearance</li>
            <li>- Transparent process — no hidden fees</li>
          </ul>
          <p>You get a reliable, well-thought-out solution, without the overhead.</p>
        `,
      },
      {
        question: 'Do you provide support after the project is finished?',
        answer: `
          <p>Yes, I offer support after the project:</p>
          <ul class="list-disc list-inside">
            <li>- Help with uploading new content</li>
            <li>- Minor fixes or improvements</li>
            <li>- Consultations on future upgrades</li>
            <li>- Monitoring, notifications, and auto-deploy setup if needed</li>
            <li>- Optional hourly or subscription-based support</li>
          </ul>
        `,
      },
      {
        question: 'How can I pay you — through a platform or directly?',
        answer: `
          <p>I offer flexible payment and collaboration options:</p>
          <ul class="">
            <li>- Upwork</li>
            <li>- Wise</li>
            <li>- IBAN transfer</li>
            <li>- Sole Proprietor (for Ukraine)</li>
            <li>- Official contract with NDA, if needed</li>
          </ul>
          <p>If you have a different preference — I’m happy to accommodate.</p>
        `,
      },
      {
        question: 'Why should I choose you?',
        answer: `
          <ul class="list-disc list-inside">
            <li>- I’m always in touch</li>
            <li>- Focused on quality and long-term results</li>
            <li>- I don’t chase trends — I solve real business problems</li>
            <li>- I help optimize your budget and offer flexible solutions</li>
            <li>- I work as a partner, not just a coder</li>
          </ul>
          <p>Your satisfaction matters to me — and I want you to come back again.</p>
        `,
      },
      {
        question: 'How are you different from other freelancers?',
        answer: `
          <ul class="list-disc list-inside">
            <li>- I don’t disappear or delay deadlines</li>
            <li>- I think both like a developer and a product-minded partner</li>
            <li>- I offer flexible development: start small and scale later</li>
            <li>- I value long-term cooperation over one-time gigs</li>
          </ul>
        `,
      },
      {
        question: 'How reliable is your tech stack?',
        answer: `
          <p>I use a modern and reliable tech stack:</p>
          <ul class="list-disc list-inside">
            <li><strong>Frontend:</strong> Nuxt 3, Vue.js, TypeScript</li>
            <li><strong>Backend:</strong> NestJS, Express, Firebase, MongoDB/PostgreSQL</li>
          </ul>
          <p>Great for landing pages, admin panels, CRMs, marketplaces, and custom apps.</p>
        `,
      },
      {
        question: 'How do you ensure the website loads fast?',
        answer: `
          <ul class="list-disc list-inside">
            <li>-Optimized images and fonts</li>
            <li>- SSR, lazy-loading, and code-splitting</li>
            <li>- Request caching and minimal dependencies</li>
            <li>- CDN and server-level optimization</li>
            <li>- Lighthouse optimization — 90+ scores guaranteed</li>
          </ul>
        `,
      },
      {
        question: 'What is your approach to SEO and performance?',
        answer: `
          <ul class="list-disc list-inside">
            <li>- Semantic HTML structure</li>
            <li>- Meta tags, Open Graph, and favicons setup</li>
            <li>- Pretty URLs, redirects, canonical links</li>
            <li>- SSR/SSG for proper indexing</li>
            <li>- Integration with Google Search Console and analytics</li>
          </ul>
        `,
      },
      {
        question: 'What types of websites do you develop?',
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
        `,
      },
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
