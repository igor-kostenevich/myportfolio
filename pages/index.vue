<script lang="ts" setup>
const store = usePortfolioStore()
const { scrollToElement } = useScrollTo()
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const serviceType = ref('')
const visibleProjectsCount = ref(5)

useHead({
  title: 'Full-Stack Web Developer | Igor Kostenevych',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'keywords',
      content:
        'full-stack developer, vue developer, nuxt developer, nestjs backend, freelance developer, vue.js portfolio, custom CRM, firebase, mongodb, web developer ukraine',
    },
    { name: 'description', content: 'Scalable and efficient full-stack web development using Vue, Nuxt, NestJS, MongoDB, Firebase.' },
    { property: 'og:title', content: 'Full-Stack Developer — Igor Kostenevych' },
    { property: 'og:description', content: 'Custom web apps and CRM systems with modern tech. See portfolio and get in touch!' },
    { property: 'og:image', content: '/images/preview-screen.png' },
    { property: 'og:url', content: 'https://family-love-haven.com/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#161616' },
    { name: 'author', content: 'Igor Kostenevych' },
    { name: 'robots', content: 'index, follow' },
    { name: 'copyright', content: '© 2025 Igor Kostenevych' },
  ],
  link: [
    { rel: 'canonical', href: 'https://family-love-haven.com/' },
    { rel: 'preload', href: '/movie.mp4', as: 'video', type: 'video/mp4' },
  ],
})

const handleServiceClick = (value: string) => {
  serviceType.value = value
  scrollToElement('contacts')
}

const loadMoreProjects = async () => {
  visibleProjectsCount.value += 2
  await nextTick()
  ScrollTrigger.refresh()
}
</script>

<template>
  <!-- Main screen section -->
  <section class="flex items-center bg-secondary-dark min-h-screen py-48 relative">
    <div class="container flex flex-col items-center !max-w-[768px] xl:!max-w-[1144px] relative z-[3]">
      <div class="flex flex-col gap-4 md:flex-row md:items-center mb-5 w-full">
        <div class="relative inline-flex w-max">
          <img
            src="/images/small-photo.png"
            alt="avatar"
          />
          <div
            v-if="store.isAvailableForJob"
            class="flex items-center justify-center rounded-full h-7 w-7 bg-[#CEF9F3] border-[4px] border-white absolute -right-2 -top-2"
          >
            <span class="bg-primary-dark h-2.5 w-2.5 rounded-full animate-subtlePing" />
          </div>
        </div>
        <div class="md:ml-5">
          <h2 class="text-white font-medium leading-6">Igor Kostenevich</h2>
          <p class="text-gray-150">Crafting robust digital solutions for 6+ years</p>
        </div>
      </div>
      <h1 class="flex flex-col items-start w-full">
        <span class="main-title md:self-start mb-3">Full-Stack Web Developer</span>
        <span class="main-title md:self-center md:mb-3">Building Scalable,</span>
        <span class="main-title flex md:items-center self-start flex-col md:flex-row w-full">
          Efficient Apps

          <div class="group flex items-center relative cursor-pointer mt-6 md:mt-0 w-[200px] md:w-auto">
            <a
              href="https://www.linkedin.com/in/igor-kostenevich/"
              target="_blank"
              class="md:mt-0 text-lg xl:text-2xl font-normal leading-7 tracking-normal md:ml-12 text-secondary-dark group-hover:text-white uppercase inline-block relative overflow-hidden px-5 py-1.5 xl:py-3 rounded-full transition-all duration-300 ease-out z-10"
            >
              Get in Touch
            </a>
            <span
              class="flex items-center justify-end bg-primary-dark h-full absolute md:right-[-56px] w-full group-hover:md:w-[56px] transition-all ease-in duration-200 rounded-full shadow-md shadow-primary-dark"
            >
              <svg
                class="text-secondary-dark group-hover:duration-500 transition mr-[15px] w-6 h-6"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33497 4.59961L13.335 8.59961L9.33497 12.5996M12.668 8.59961L2.66797 8.59961"
                  stroke="currentColor"
                  stroke-width="1.44"
                  stroke-linecap="square"
                />
              </svg>
            </span>
          </div>
        </span>
      </h1>
    </div>
    <div class="bg-dark-dark/50 absolute inset-0 h-full w-full z-[2]" />
    <video
      class="absolute inset-0 w-full h-full z-[1] object-cover"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
    >
      <source
        src="/movie.mp4"
        type="video/mp4"
      />
    </video>
  </section>

  <!-- About me section -->
  <section
    id="about"
    class="bg-secondary-dark text-white overflow-hidden py-20"
  >
    <div class="container">
      <h2
        v-gsap.whenVisible.once.from="{ autoAlpha: 0, x: -50 }"
        class="main-title text-right max-w-max mb-10 md:mb-16 lg:mb-20"
      >
        <span>Behind the Code.</span>
        <br />
        <span class="text-primary-dark">Who I Am?</span>
      </h2>
    </div>
    <div class="w-full cont">
      <div class="lg:pr-4 max-w-[100%] flex gap-10 lg:gap-12 xl:gap-16 flex-col w-full lg:flex-row">
        <div class="relative w-full lg:w-1/3 xl:w-auto pb-[70%] lg:pb-0">
          <img
            src="/images/photo.png"
            alt="Igor Kostenevich photo"
            class="xl:h-auto h-full w-full lg:max-h-[800px] xl:max-h-full object-[50%_15%] object-cover absolute xl:static inset-0 lg:rounded-br-2xl lg:rounded-tr-2xl overflow-hidden"
          />
        </div>
        <div class="flex flex-col px-4 lg:px-0 w-full max-w-[600px] md:max-w-max">
          <p class="text-gray-100 lg:text-lg">
            I am a <span class="font-medium text-white">Full-Stack Web Developer</span> with extensive experience in
            <span class="font-medium text-white">building scalable, high-performance applications</span>. My expertise covers the entire development
            lifecycle—from crafting <span class="font-medium text-white">intuitive user interfaces</span> to designing
            <span class="font-medium text-white">robust backend architectures</span>.
          </p>
          <p class="mt-4 text-gray-100 lg:text-lg">
            I specialize in <span class="font-medium text-white">real-time applications, data visualization, and complex dashboards</span>, working with
            businesses to turn their ideas into fully functional and optimized digital solutions. My development process is streamlined with
            <span class="font-medium text-white">AI-powered tools like GitHub Copilot</span>, allowing me to write cleaner, more efficient code while
            accelerating project delivery.
          </p>
          <p class="mt-4 text-gray-100 lg:text-lg flex-1">
            Leveraging <span class="font-medium text-white">modern frameworks, cloud solutions, and automation</span>, I ensure every project is built for
            <span class="font-medium text-white">speed, scalability, and maintainability</span>—delivering not just code, but business-driven results. 🚀
          </p>
          <div class="mt-10 lg:mt-16 flex flex-wrap gap-4">
            <BaseButton
              class="w-full xs:w-auto"
              href="/Igor_Kostenevich_FE_CV.pdf"
              download
            >
              Download CV

              <template #right>
                <SvgIcon
                  name="download"
                  class="ml-2 w-4 h-4"
                />
              </template>
            </BaseButton>
            <BaseButton
              href="https://www.linkedin.com/in/igor-kostenevich/"
              target="_blank"
              variant="outline"
              class="w-full xs:w-auto hover:bg-primary-dark"
            >
              Let's Connect
              <SvgIcon
                name="linkedin"
                class="ml-2 w-4 h-4"
              />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills section -->
  <section class="stack-section bg-secondary-dark py-20">
    <div class="container">
      <h3
        v-gsap.whenVisible.once.from="{ autoAlpha: 0, x: -50 }"
        class="font-space-mono tracking-widest uppercase text-xl text-white mb-12 md:mb-20"
      >
        Main stack that i use
      </h3>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="skill in store.skills"
          :key="skill.id"
          v-gsap.whenVisible.once.from="{
            autoAlpha: 0,
            scale: 0.95,
            rotation: -3,
            transformOrigin: 'center center',
            duration: 0.6,
            ease: 'power2.out',
          }"
          class="group flex flex-col border border-gray-250 py-8 px-4 rounded-lg"
        >
          <h3 class="flex items-center text-white font-space-mono uppercase mb-12 transition group-hover:text-primary-dark">
            <span class="flex w-2.5 h-2.5 border border-white rounded-full mr-3 group-hover:bg-primary-dark group-hover:border-primary-dark transition" />
            {{ skill.title }}
          </h3>
          <ul class="flex items-center flex-wrap gap-x-2 gap-y-3">
            <li
              v-for="(item, idx) in skill.items"
              :key="idx"
              class="text-xs sm:text-sm text-white border border-gray-250 px-5 py-1 rounded-full leading-6"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience section -->
  <div>
    <!-- Projects section -->
    <section id="projects">
      <div
        v-gsap.whenVisible.fromTo="[
          { autoAlpha: 0, y: 100 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        ]"
        class="bg-black rounded-ss-[100px] md:rounded-ss-[200px] rounded-se-[100px] md:rounded-se-[200px]"
      >
        <div
          v-gsap.whenVisible.fromTo="[
            { autoAlpha: 0, y: 100 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          ]"
          class="bg-black rounded-ss-[100px] md:rounded-ss-[200px] rounded-se-[100px] md:rounded-se-[200px] pt-12 md:pt-20 xl:pt-32 pb-10 md:pb-20 xl:pb-28"
        >
          <div class="container">
            <div
              v-gsap.whenVisible.from="{
                autoAlpha: 0,
                y: 50,
                scaleX: 0.8,
                ease: 'power1.out',
                duration: 1,
              }"
            >
              <h2 class="secondary-title text-center mb-4">REAL PROJECTS, <span class="text-primary-dark font-medium">REAL IMPACT</span></h2>
              <p class="text-gray-100 text-center max-w-2xl mx-auto mb-10 md:mb-16 lg:mb-24">
                From MVPs to fully scaled apps—explore the projects that showcase my expertise in creating impactful digital products.
              </p>
            </div>

            <div
              v-gsap.whenVisible.stagger.children.from="{
                autoAlpha: 0,
                y: 50,
                scale: 0.95,
                ease: 'power2.out',
                duration: 0.6,
              }"
              class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 auto-rows-[minmax(300px,_auto)] mb-10 md:mb-16"
            >
              <PortfolioProjectCard
                v-for="(project, index) in store.projects.slice(0, visibleProjectsCount)"
                :key="project.id"
                :project="project"
                :is-first-project="index === 0"
                :class="{ 'md:col-span-2 md:!bg-black !pb-20': index === 0 }"
              />
            </div>
            <div
              v-if="visibleProjectsCount <= store.projects.length"
              class="flex justify-center"
            >
              <BaseButton @click="loadMoreProjects"> VIEW MORE CASE STUDIES </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services section -->
    <section
      id="services"
      class="bg-black"
    >
      <div
        v-gsap.whenVisible.fromTo="[
          { autoAlpha: 0, y: 100 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        ]"
        class="bg-secondary-dark rounded-ss-[100px] md:rounded-ss-[200px] rounded-se-[100px] md:rounded-se-[200px] py-20 xl:pt-32 relative"
      >
        <div class="container">
          <div
            v-gsap.whenVisible.from="{
              autoAlpha: 0,
              y: 0,
              scaleX: 0.8,
              ease: 'power1.out',
              duration: 1,
            }"
          >
            <h2 class="secondary-title text-center mb-4">From Pixels <span class="text-primary-dark font-medium">to Production</span></h2>
            <p class="text-gray-100 text-center max-w-2xl mx-auto mb-10 md:mb-16 lg:mb-24">
              I deliver end-to-end web solutions that let you focus on growing your vision. From intuitive frontends to robust backends, I handle every detail
              for a seamless digital experience.
            </p>
          </div>

          <div
            v-gsap.whenVisible.stagger.children.from="{
              autoAlpha: 0,
              y: 50,
              scale: 0.95,
              ease: 'power2.out',
              duration: 0.6,
            }"
            class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-8"
          >
            <div
              v-for="service in store.services"
              :key="service.id"
              class="flex flex-col md:flex-row bg-dark-dark rounded-3xl px-8 py-10 gap-4 md:gap-6 xl:gap-10 group"
            >
              <div
                class="mx-auto md:mx-initial flex items-center justify-center border border-white/30 w-10 !h-10 lg:w-14 lg:!h-14 rounded-full flex-[0_0_40px] lg:flex-[0_0_56px]"
              >
                <SvgIcon
                  :name="service.icon"
                  class="scale-[80%] lg:scale-100"
                ></SvgIcon>
              </div>
              <div class="">
                <h3 class="font-medium text-lg md:text-2xl tracking-tight mb-4 mt-3 text-center md:text-left">{{ service.title }}</h3>
                <p class="tracking-tight text-gray-150 mb-4 text-center md:text-left">{{ service.description }}</p>
                <button
                  class="flex items-center justify-center w-full md:w-auto"
                  @click="handleServiceClick(service.id)"
                >
                  <span
                    class="text-primary-dark uppercase font-space-mono md:max-w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-w-[160px] whitespace-nowrap group-hover:mr-3 mr-3 md:mr-0"
                    >Contact me</span
                  >
                  <SvgIcon
                    name="arrow-right"
                    class="flex items-center justify-center border border-white/30 rounded-full w-5 h-5 p-0.5 group-hover:-rotate-45 transition"
                  ></SvgIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Testimonials section -->
  <section
    id="testimonials"
    class="py-20 xl:py-[120px] pb-12 md:pb-20 xl:pb-32"
  >
    <div class="container">
      <div class="flex justify-between mb-10 md:mb-16 lg:mb-[100px] md:gap-10 flex-col md:flex-row">
        <h3 class="text-center md:text-left font-space-mono tracking-widest uppercase text-xl text-white mb-3 md:mb-20">Testimonials</h3>
        <div class="max-w-[600px] xl:max-w-[856px]">
          <h2 class="secondary-title text-center sm:text-left mb-6">Words <span class="text-primary-dark font-medium">That Count </span></h2>
          <p class="text-gray-150 text-center sm:text-left sm:text-lg">
            Genuine feedback from clients I’ve partnered with, showcasing the real results and seamless collaboration my approach provides. Discover how we
            tackle challenges together to achieve exceptional outcomes.
          </p>
        </div>
      </div>
    </div>

    <PortfolioTestimonials />
  </section>

  <!-- Contact section -->
  <section
    id="contacts"
    class="py-16 md:py-20 xl:py-32 bg-secondary-dark"
  >
    <div class="container">
      <div class="flex flex-col sm:flex-row gap-16 lg:gap-[100px]">
        <div
          v-gsap.whenVisible.once.from="{ autoAlpha: 0, x: -50 }"
          class="sm:max-w-[360px] lg:max-w-[526px]"
        >
          <h2 class="secondary-title text-center sm:text-left mb-4 !leading-8 md:!leading-10 xl:!leading-[65px]">
            Let’s build your project <span class="text-primary-dark font-medium">together</span>
          </h2>
          <p class="text-gray-150 text-center sm:text-left">Submit your project details and I’ll get back to you.</p>
        </div>
        <div class="w-full">
          <PortfolioContactForm :service-type="serviceType" />
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ section -->
  <section
    id="faq"
    class="bg-secondary-dark py-16 md:py-20 xl:py-[120px]"
  >
    <div class="container">
      <h2
        v-gsap.whenVisible.from="{
          autoAlpha: 0,
          y: 40,
          ease: 'power2.out',
          duration: 0.8,
        }"
        class="secondary-title text-center mb-10 md:mb-16 xl:mb-20"
      >
        Got Questions? <br /><span class="text-primary-dark font-medium">I’ve Got Answers</span>
      </h2>

      <div
        v-gsap.whenVisible.stagger.children.from="{
          autoAlpha: 0,
          y: 50,
          scale: 0.95,
          ease: 'power3.out',
          duration: 0.5,
        }"
      >
        <PortfolioAccordion :faqs="store.faqs" />
      </div>
    </div>
  </section>
</template>

<style>
video {
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  filter: grayscale(100%);
}
</style>
