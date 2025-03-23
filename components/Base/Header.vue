<script setup lang="ts">
const { scrollToElement } = useScrollTo()
const isMenuOpened = ref(false)
const isAtTop = ref(false)
const store = usePortfolioStore()

const handleScroll = () => {
  isAtTop.value = window.scrollY === 0
}

function toggleMobileMenu() {
  document.body.classList.toggle('overflow-hidden')
  document.querySelector('header')?.classList.toggle('is-opened')
  isMenuOpened.value = !isMenuOpened.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['fixed left-0 right-0 top-0 z-40 transition-all duration-300', isAtTop ? 'bg-transparent' : 'bg-dark/80 backdrop-blur-lg shadow-md']">
    <div class="container">
      <div class="flex items-center justify-between relative py-4">
        <nuxt-link
          to="/"
          class="relative z-30"
        >
        LogoType
          <!-- <BaseLogo
            fill="white"
            class="text-white fill-white h-[36px] md:h-[55px] w-[83px] md:w-[168px]"
          /> -->
        </nuxt-link>
        <nav class="hidden lg:flex min-h-[88px]">
          <ul class="flex justify-center items-center gap-y-4 gap-10 font-medium text-sm flex-wrap">
            <li class="hover:text-gray-150 transition" @click.prevent="scrollToElement('about')">
              <a href="#">About</a>
            </li>
            <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('projects')">
              <a href="#">Projects</a>
            </li>
            <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('services')">
              <a href="#" class="relative">
                Services
                <span class="flex items-center justify-center bg-primary-dark w-4 h-4 rounded-full absolute -right-3.5 -top-3.5 text-xs font-medium text-black">{{ store.servicesCount }}</span>
              </a>
            </li>
            <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('testimonials')">
              <a href="#">Testimonials</a>
            </li>
            <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('contacts')">
              <a href="#">Contact me</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center">
          <base-button
            class="hidden sm:flex !px-4 !py-2 !text-xs lg:!px-7 lg:!py-4 lg:!text-base"
            href="apwork.com"
            >
              Hire me on Upwork
            </base-button
          >
          <button
            class="w-6 h-6 relative z-30 lg:hidden ml-6"
            @click="toggleMobileMenu"
          >
            <span :class="['h-[2px] bg-white w-6 block mb-1 transform transition-all duration-300', { 'rotate-45': isMenuOpened }]" />
            <span :class="['h-[2px] bg-white w-6 block transform transition-all duration-300', { '-rotate-45 -translate-y-[5px]': isMenuOpened }]" />
          </button>
        </div>

        <div
          class="flex flex-col justify-between h-full w-full fixed inset-0 pt-20 bg-dark-dark z-20 lg:hidden px-4 transform transition-all duration-300 overflow-hidden min-h-screen"
          :class="[isMenuOpened ? 'translate-x-0' : 'translate-x-full']"
        >
          <base-button
            class="sm:hidden"
            href="apwork.com"
          >
            Hire me on Upwork
            <SvgIcon name="arrow-right" class="ml-2" />
          </base-button>
          <div class="flex flex-col justify-between h-full overflow-y-auto w-full pb-20 mt-6">
            <nav
              class="flex flex-col mb-12"
              @click="toggleMobileMenu"
            >
            <ul class="">
              <li class="text-[22px] px-6 py-8 border-b border-gray-250 text-white" @click.prevent="scrollToElement('about')">
                <a href="#">About</a>
              </li>
              <li class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"  @click.prevent="scrollToElement('projects')">
                <a href="#">Projects</a>
              </li>
              <li class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"  @click.prevent="scrollToElement('services')">
                <a href="#">Services</a>
              </li>
              <li class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"  @click.prevent="scrollToElement('testimonials')">
                <a href="#">Testimonials</a>
              </li>
              <li class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"  @click.prevent="scrollToElement('contacts')">
                <a href="#">Contact me</a>
              </li>
            </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
