<script setup lang="ts">
const { scrollToElement } = useScrollTo()
const isMenuOpened = ref(false)
const isAtTop = ref(true)
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
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'flex items-center fixed left-0 right-0 top-0 z-40 transition-all duration-300 gap-y-4 h-[80px] lg:h-[110px]',
      isAtTop ? 'bg-transparent' : 'bg-secondary-dark/80 backdrop-blur-lg shadow-md',
    ]"
  >
    <div class="container">
      <div class="flex items-center justify-between relative h-full">
        <nuxt-link
          to="/"
          class="relative z-30"
          @click="scrollToElement('main-screen')"
        >
          <img
            src="~/assets/svg/logo.svg"
            alt=""
          />
        </nuxt-link>
        <nav class="hidden lg:flex items-center">
          <ul class="flex justify-center gap-y-4 gap-6 xl:gap-10 font-medium text-sm flex-wrap">
            <li
              v-for="item in [
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'services', label: 'Services' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contacts', label: 'Contact me' },
                { id: 'faq', label: 'FAQ' },
              ]"
              :key="item.id"
              class="transition"
              @click.prevent="scrollToElement(item.id)"
            >
              <a
                href="#"
                class="group block hover:text-primary-dark transition pointer-events-auto relative"
              >
                {{ item.label }}

                <template v-if="item.id === 'services' && store.servicesCount">
                  <span
                    class="flex group-hover:bg-white transition items-center justify-center bg-primary-dark w-4 h-4 rounded-full absolute -right-3.5 -top-3.5 text-xs font-medium text-black"
                  >
                    {{ store.servicesCount }}
                  </span>
                </template>
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center">
          <base-button
            class="group flex z-[999] !px-4 !py-2 !text-xs lg:!px-7 lg:!py-4 lg:!text-base"
            href="https://www.upwork.com/freelancers/~01f00ee3a78f8c6d67"
            target="_blank"
          >
            Hire me on Upwork

            <template #right>
              <svg
                class="flex items-center justify-center w-5 h-5 ml-2 group-hover:-rotate-45 transition-transform !duration-200"
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
            </template>
          </base-button>
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
          <div class="flex flex-col justify-between h-full overflow-y-auto w-full pb-20 mt-6">
            <nav
              class="flex flex-col mb-8"
              @click="toggleMobileMenu"
            >
              <ul class="">
                <li
                  class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"
                  @click.prevent="scrollToElement('about')"
                >
                  <a href="#" aria-label="about">About</a>
                </li>
                <li
                  class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"
                  @click.prevent="scrollToElement('projects')"
                >
                  <a href="#" aria-label="projects">Projects</a>
                </li>
                <li
                  class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"
                  @click.prevent="scrollToElement('services')"
                >
                  <a href="#" aria-label="services">Services</a>
                </li>
                <li
                  class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"
                  @click.prevent="scrollToElement('testimonials')"
                >
                  <a href="#" aria-label="testimonials">Testimonials</a>
                </li>
                <li
                  class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"
                  @click.prevent="scrollToElement('contacts')"
                >
                  <a href="#" aria-label="contacts">Contact me</a>
                </li>
                <li
                  class="text-[22px] px-6 py-8 border-b border-gray-250 text-white"
                  @click.prevent="scrollToElement('faq')"
                >
                  <a href="#" aria-label="FAQ">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- <base-button
            class="sm:hidden"
            href="https://www.upwork.com/freelancers/~01f00ee3a78f8c6d67"
            target="_blank"
          >
            Hire me on Upwork
            <SvgIcon
              name="arrow-right"
              class="ml-2"
            />
          </base-button> -->
        </div>
      </div>
    </div>
  </header>
</template>
