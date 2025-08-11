export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt3-notifications', '@pinia/nuxt', 'unplugin-svg-transformer/nuxt', '@nuxtjs/i18n', 'v-gsap-nuxt'],
  components: true,
  ssr: true,
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'uk', name: 'Українська', file: 'uk.json' },
    ],
    lazy: true,
    langDir: '../locales/',
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
      noscript: [
        {
          innerHTML: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap">`,
        },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  vite: {
    build: {
      target: 'esnext',
    },
    logLevel: 'error',
  },
  build: {
    transpile: ['swiper'],
  },
  compatibilityDate: '2025-01-30',
})
