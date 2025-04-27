<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TestimonialCard from './Card.vue'
const store = usePortfolioStore()

gsap.registerPlugin(ScrollTrigger)

const SIDE_PADDING = 32

const topTestimonials = computed(() => {
  return store.testimonials.slice(0, Math.ceil(store.testimonials.length / 2))
})

const bottomTestimonials = computed(() => {
  return store.testimonials.slice(Math.ceil(store.testimonials.length / 2))
})

const topRowRef = ref<HTMLElement | null>(null)
const bottomRowRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initAnimations()
    }, { timeout: 500 })
  } else {
    setTimeout(initAnimations, 300)
  }
})

function initAnimations() {
  if (topRowRef.value) {
    const topX = topRowRef.value.scrollWidth - topRowRef.value.offsetWidth + SIDE_PADDING * 2
    gsap.fromTo(
      topRowRef.value,
      { x: SIDE_PADDING },
      {
        x: -topX + SIDE_PADDING,
        ease: 'none',
        scrollTrigger: {
          trigger: topRowRef.value,
          start: '150% bottom',
          end: 'bottom 50%',
          scrub: 1,
        },
      },
    )
  }

  if (bottomRowRef.value) {
    const bottomX = bottomRowRef.value.scrollWidth - bottomRowRef.value.offsetWidth + SIDE_PADDING * 8
    gsap.fromTo(
      bottomRowRef.value,
      { x: -bottomX + SIDE_PADDING },
      {
        x: SIDE_PADDING,
        ease: 'none',
        scrollTrigger: {
          trigger: bottomRowRef.value,
          start: '100% bottom',
          end: 'bottom 50%',
          scrub: 1,
        },
      },
    )
  }
}
</script>

<template>
  <div class="bg-dark text-white">
    <div class="relative overflow-hidden">
      <div
        ref="topRowRef"
        class="flex gap-4 sm:gap-6 will-change-transform"
      >
        <TestimonialCard
          v-for="(item, i) in topTestimonials"
          :key="'top-' + i"
          :data="item"
        />
      </div>
    </div>

    <div class="mt-3 relative overflow-hidden">
      <div
        ref="bottomRowRef"
        class="flex gap-4 sm:gap-6 will-change-transform"
      >
        <TestimonialCard
          v-for="(item, i) in bottomTestimonials"
          :key="'bottom-' + i"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>
