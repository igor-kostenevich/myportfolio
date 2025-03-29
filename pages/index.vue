<script lang="ts" setup>
const store = usePortfolioStore()
</script>

<template>
  <!-- Main screen section -->
  <section class="flex items-center bg-secondary-dark bg-[url('/images/first-screen-bg.png')] min-h-screen py-48">
    <div class="container flex flex-col items-center !max-w-[768px] xl:!max-w-[1144px]">
      <div class="flex flex-col gap-4 md:flex-row md:items-center mb-5 w-full">
        <div class="relative inline-flex w-max">
          <img src="/images/small-photo.png" alt="avatar">
          <div v-if="store.isAvailableForJob" class="flex items-center justify-center rounded-full h-7 w-7 bg-[#CEF9F3] border-[4px] border-white absolute -right-2 -top-2">
            <span class="bg-primary-dark h-2.5 w-2.5 rounded-full"></span>
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
          <BaseButton class="mt-8 md:mt-0 inline-flex text-2xl font-normal leading-7 tracking-normal md:ml-12" variant="secondary" to="/contact">Get in Touch</BaseButton>
        </span>
      </h1>
    </div>
  </section>

  <!-- About me section -->
  <section id="about" class="bg-secondary-dark text-white overflow-hidden py-12 md:py-20">
    <div class="container">
      <h2 class="main-title text-right max-w-max mb-10 md:mb-16 lg:mb-20">
        <span>Behind the Code.</span>
        <br />
        <span class="text-primary-dark">Who I Am?</span>
      </h2>
    </div>
    <div class="w-full">
      <div class="lg:pr-4 max-w-[100%] flex gap-10 lg:gap-16 flex-col w-full lg:flex-row">
        <div class="">
          <img
            src="/images/photo.png" 
            alt="Igor Kostenevich photo"
            class="w-full xl:h-auto h-full max-h-[340px] sm:max-h-[520px] lg:max-h-full object-[50%_15%] object-cover"
          >
        </div>
        <div class="flex flex-col px-4 lg:px-0 lg:max-w-[557px] w-full">
          <p class="text-gray-100 lg:text-lg">
            I am a <span class="font-medium text-white">Full-Stack Web Developer</span> with extensive experience in
            <span class="font-medium text-white">building scalable, high-performance applications</span>. My expertise covers the
            entire development lifecycle—from crafting <span class="font-medium text-white">intuitive user interfaces</span> to designing
            <span class="font-medium text-white">robust backend architectures</span>.
          </p>
          <p class="mt-4 text-gray-100 lg:text-lg">
            I specialize in <span class="font-medium text-white">real-time applications, data visualization, and complex dashboards</span>,
            working with businesses to turn their ideas into fully functional and optimized digital solutions. My development
            process is streamlined with <span class="font-medium text-white">AI-powered tools like GitHub Copilot</span>, allowing me to write cleaner,
            more efficient code while accelerating project delivery.
          </p>
          <p class="mt-4 text-gray-100 lg:text-lg flex-1">
            Leveraging <span class="font-medium text-white">modern frameworks, cloud solutions, and automation</span>, I ensure every project is built for
            <span class="font-medium text-white">speed, scalability, and maintainability</span>—delivering not just code, but business-driven results. 🚀
          </p>
          <div class="mt-10 lg:mt-16 flex flex-wrap gap-4">
            <BaseButton href="/cv.pdf" download>
              Download CV 
              <SvgIcon name="download" class="ml-2 w-4 h-4 text-secondary-dark" />
            </BaseButton>
            <BaseButton href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank" variant="outline" class="hover:text-gray-100">
              Let's Connect
              <SvgIcon name="linkedin" class="ml-2 w-4 h-4" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills section -->
  <section class="bg-secondary-dark pt-20 pb-32">
    <div class="container">
      <h3 class="font-space-mono tracking-widest uppercase text-xl text-white mb-12 md:mb-20">Main stack that i use</h3>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="skill in store.skills" :key="skill.id" class="flex flex-col border border-gray-250 py-8 px-4 rounded-lg">
          <h3 class="flex items-center text-white font-space-mono uppercase mb-12">
            <span class="flex w-2.5 h-2.5 border border-white rounded-full mr-3"></span>
            {{ skill.title }}
          </h3>
          <ul class="flex items-center flex-wrap gap-x-2 gap-y-3">
            <li class="text-xs sm:text-sm text-white border border-gray-250 px-5 py-1 rounded-full leading-6" v-for="(item, idx) in skill.items" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects section -->
  <section id="projects" class="bg-black rounded-ss-[100px] md:rounded-ss-[200px] rounded-se-[100px] md:rounded-se-[200px] pt-12 md:pt-20 xl:pt-32 pb-10 md:pb-20">
    <div class="container">
      <h2 class="secondary-title text-center mb-4">
        REAL PROJECTS, <span class="text-primary-dark font-medium">REAL IMPACT</span>
      </h2>
      <p class="text-gray-100 text-center max-w-2xl mx-auto  mb-10 md:mb-16 lg:mb-24">
        From MVPs to fully scaled apps—explore the projects that showcase my expertise
        in creating impactful digital products.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 auto-rows-[minmax(300px,_auto)] mb-10 md:mb-16">
        <PortfolioProjectCard 
          v-for="(project, index) in store.projects" 
          :key="project.id" 
          :project="project"
          :is-first-project="index === 0"
          :class="{ 'md:col-span-2 md:!bg-black': index === 0 }"
        />
      </div>

      <div class="flex justify-center">
        <BaseButton>
          VIEW MORE CASE STUDIES
        </BaseButton>
      </div>
    </div>
  </section>

  <!-- Services section -->
  <section id="services" class="bg-secondary-dark rounded-ss-[100px] md:rounded-ss-[200px] rounded-se-[100px] md:rounded-se-[200px] pt-12 md:pt-20 xl:pt-32 pb-10 md:pb-20">
    <div class="container">
      <h2 class="secondary-title text-center mb-4">
        From Pixels <span class="text-primary-dark font-medium">to Production</span>
      </h2>
      <p class="text-gray-100 text-center max-w-2xl mx-auto  mb-10 md:mb-16 lg:mb-24">
        I deliver end-to-end web solutions that let you focus on growing your vision. From intuitive frontends to robust backends, I handle every detail for a seamless digital experience.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <div v-for="service in store.services" :key="service.id" class="flex flex-col md:flex-row bg-dark-dark rounded-3xl px-8 py-10 gap-4 md:gap-6 xl:gap-10 group">
          <div class="mx-auto md:mx-initial flex items-center justify-center border border-white/30 w-10 !h-10 lg:w-14 lg:!h-14 rounded-full flex-[0_0_40px] lg:flex-[0_0_56px]">
            <SvgIcon :name="service.icon" class="scale-[80%] lg:scale-100"></SvgIcon>
          </div>
          <div class="">
            <h3 class="font-medium text-lg md:text-2xl tracking-tight mb-4 mt-3 text-center md:text-left">{{ service.title }}</h3>
            <p class="tracking-tight text-gray-150 mb-4 text-center md:text-left">{{ service.description }}</p>
            <button class="flex items-center justify-center w-full md:w-auto">
              <span class="text-primary-dark uppercase font-space-mono md:max-w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-w-[160px] whitespace-nowrap  group-hover:mr-3 mr-3 md:mr-0">Contact me</span>
              <SvgIcon name="arrow-right" class="flex items-center justify-center border border-white/30 rounded-full w-5 h-5 p-0.5 group-hover:-rotate-45 transition"></SvgIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact section -->
  <section class="py-12 md:py-20 bg-secondary-dark">
    <div class="container">
      <div class="flex flex-col sm:flex-row gap-16 lg:gap-[100px]">
        <div class="sm:max-w-[360px] lg:max-w-[526px]">
          <h2 class="secondary-title text-center sm:text-left mb-4 !leading-8 md:!leading-10 xl:!leading-[65px]">
            Let’s build your project <span class="text-primary-dark font-medium">together</span>
          </h2>
          <p class="text-gray-150 text-center sm:text-left">
            Submit your project details  and I’ll get back to you.
          </p>
        </div>
        <div class="w-full">
          <PortfolioContactForm />
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials section -->
  <section>
    <div class="container">
      <div class="flex justify-between mb-10 md:mb-16 lg:mb-[100px] md:gap-10 flex-col md:flex-row">
        <h3 class="font-space-mono tracking-widest uppercase text-xl text-white mb-3 md:mb-20">Testimonials</h3>
        <div class="max-w-[600px] xl:max-w-[856px]">
          <h2 class="secondary-title text-center sm:text-left mb-6">
            Words <span class="text-primary-dark font-medium">That Count </span>
          </h2>
          <p class="text-gray-150 text-center sm:text-left sm:text-lg">
            Genuine feedback from clients I’ve partnered with, showcasing the real results and seamless collaboration my approach provides. Discover how we tackle challenges together to achieve exceptional outcomes.
          </p>
        </div>
      </div>
    </div>

    <PortfolioTestimonials />
  </section>

  <!-- FAQ section -->
  <section id="faq" class="bg-secondary-dark py-12 md:py-20 xl:py-[120px]">
    <div class="container">
      <h2 class="secondary-title text-center mb-10 md:mb-16 xl:mb-20">
        Got Questions? <br><span class="text-primary-dark font-medium">I’ve Got Answers</span>
      </h2>

      <PortfolioAccordion :faqs="store.faqs"/>
    </div>
  </section>
</template>