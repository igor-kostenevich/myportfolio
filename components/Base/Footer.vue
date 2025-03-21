<script lang="ts" setup>
const { scrollToElement } = useScrollTo()
</script>

<template>
  <footer class="py-10 md:py-12 xl:py-16 md:pt-16 xl:pt-24 bg-black">
    <div class="container !max-w-[532px]">
      <nav>
        <ul class="flex justify-center items-center gap-y-4 gap-10 mb-10 font-medium text-sm flex-wrap">
          <li class="hover:text-gray-150 transition" @click.prevent="scrollToElement('about')">
            <a href="#">About</a>
          </li>
          <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('projects')">
            <a href="#">Projects</a>
          </li>
          <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('services')">
            <a href="#">Services</a>
          </li>
          <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('testimonials')">
            <a href="#">Testimonials</a>
          </li>
          <li class="hover:text-gray-150 transition"  @click.prevent="scrollToElement('contacts')">
            <a href="#">Contact me</a>
          </li>
        </ul>
      </nav>
      <ul class="flex justify-center items-center gap-7 mb-10">
        <li>
          <a href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank" class="">
            <SvgIcon name="upwork"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank" class="">
            <SvgIcon name="github"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank" class="">
            <SvgIcon name="linkedin-footer"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/igor-kostenevich/" target="_blank" class="">
            <SvgIcon name="telegram"/>
          </a>
        </li>
      </ul>

      <p class="text-xs text-center pt-6 md:pt-10 border-t border-gray-250">© 2025 Ihor Kostenevych. All rights reserved.</p>
    </div>
  </footer>
</template>