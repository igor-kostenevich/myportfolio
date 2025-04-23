<script lang="ts" setup>
const { scrollToElement } = useScrollTo()

function handleAnalitycsEvent(event: string) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('clicked' + event)
  }
}
</script>

<template>
  <footer class="py-10 md:py-12 xl:py-16 md:pt-16 xl:pt-24 bg-black">
    <div class="container !max-w-[532px]">
      <nav>
        <ul class="flex justify-center items-center gap-y-4 gap-10 mb-10 font-medium text-sm flex-wrap max-w-[70%] sm:max-w-full mx-auto">
          <li
            class="hover:text-primary-dark transition cursor-pointer"
            @click.prevent="scrollToElement('about')"
          >
            <a href="#">About</a>
          </li>
          <li
            class="hover:text-primary-dark transition cursor-pointer"
            @click.prevent="scrollToElement('projects')"
          >
            <a href="#">Projects</a>
          </li>
          <li
            class="hover:text-primary-dark transition cursor-pointer"
            @click.prevent="scrollToElement('services')"
          >
            <a href="#">Services</a>
          </li>
          <li
            class="hover:text-primary-dark transition cursor-pointer"
            @click.prevent="scrollToElement('testimonials')"
          >
            <a href="#">Testimonials</a>
          </li>
          <li
            class="hover:text-primary-dark transition cursor-pointer"
            @click.prevent="scrollToElement('contacts')"
          >
            <a href="#">Contact me</a>
          </li>
        </ul>
      </nav>
      <ul class="flex justify-center items-center gap-7 mb-10">
        <li @click="handleAnalitycsEvent('upwork')">
          <a
            href="https://www.upwork.com/freelancers/~01f00ee3a78f8c6d67"
            target="_blank"
          >
            <SvgIcon name="upwork" />
          </a>
        </li>
        <li @click="handleAnalitycsEvent('github')">
          <a
            href="https://github.com/igor-kostenevich"
            target="_blank"
            class=""
          >
            <SvgIcon name="github" />
          </a>
        </li>
        <li @click="handleAnalitycsEvent('linkedin')">
          <a
            href="https://www.linkedin.com/in/igor-kostenevich/"
            target="_blank"
            class=""
          >
            <SvgIcon name="linkedin-footer" />
          </a>
        </li>
        <li @click="handleAnalitycsEvent('telegram')">
          <a
            href="https://t.me/I_kostenevich"
            target="_blank"
            class=""
          >
            <SvgIcon name="telegram" />
          </a>
        </li>
      </ul>

      <p class="text-xs text-center pt-6 md:pt-10 border-t border-gray-250">© 2025 Ihor Kostenevich. All rights reserved.</p>
    </div>
  </footer>
</template>
