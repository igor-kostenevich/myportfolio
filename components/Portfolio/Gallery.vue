<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs } from 'swiper/modules'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const props = defineProps<{
  images: string[]
}>()

const thumbsSwiper = ref<any>(null)
const modalImage = ref<string | null>(null)
const currentIndex = ref<number | null>(null)
const swiperRef = ref<any>(null)
const transitionDirection = ref<'left' | 'right'>('right')
const activeIndex = ref(0)

const setMainSwiper = (swiper) => {
  swiperRef.value = swiper
  swiper.on('slideChange', () => {
    activeIndex.value = swiper.activeIndex
  })
}

const syncMainSwiper = (index: number) => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(index)
  }
}

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const openModal = (img: string) => {
  const index = props.images.findIndex((i) => i === img)
  if (index !== -1) {
    currentIndex.value = index
    modalImage.value = props.images[index]
  }
}

const closeModal = () => {
  modalImage.value = null
  currentIndex.value = null
}

const prevImage = () => {
  if (currentIndex.value !== null) {
    transitionDirection.value = 'left'
    const newIndex =
      (currentIndex.value - 1 + props.images.length) % props.images.length
    currentIndex.value = newIndex
    modalImage.value = props.images[newIndex]
    syncMainSwiper(newIndex)
  }
}

const nextImage = () => {
  if (currentIndex.value !== null) {
    transitionDirection.value = 'right'
    const newIndex = (currentIndex.value + 1) % props.images.length
    currentIndex.value = newIndex
    modalImage.value = props.images[newIndex]
    syncMainSwiper(newIndex)
  }
}
</script>

<template>
  <div class="w-full relative">
    <Swiper
      :modules="[Thumbs, Navigation]"
      :thumbs="{ swiper: thumbsSwiper }"
      :spaceBetween="10"
      :navigation="false"
      class="mb-4 max-w-[93%]"
      :autoHeight="true"
      @swiper="setMainSwiper"
    >
      <SwiperSlide
        v-for="(image, index) in images"
        :key="index"
        class="max-h-[745px]"
      >
        <img
          :src="image"
          class="w-full h-full object-contain rounded-xl cursor-zoom-in"
          @click="openModal(image)"
        />
      </SwiperSlide>
    </Swiper>
    <Swiper
      :spaceBetween="10"
      :modules="[Thumbs]"
      watch-slides-progress
      class="thumbs justify-center"
      :breakpoints="{
          0: { slidesPerView: 2.5 },
          460: { slidesPerView: 3.5 },
          640: { slidesPerView: 5.5 },
          768: { slidesPerView: 6.5 },
          1024: { slidesPerView: 8.5 },
          1280: { slidesPerView: 9.5 },
        }"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          :src="image"
          class="w-full h-20 object-cover rounded-lg border cursor-pointer"
        />
      </SwiperSlide>
    </Swiper>

    <button
      class="group absolute top-[38%] lg:top-[42%] -left-8 xl:-left-4 transform -translate-y-1/2 z-10 rounded-full p-2"
      :class="activeIndex === 0 ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''"
      @click="swiperRef?.slidePrev()"
    >
      <svg class="w-10 h-10 transition text-primary-light group-hover:text-primary-dark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="group absolute top-[38%] lg:top-[42%] -right-8 xl:-right-4 transform -translate-y-1/2 z-10 rounded-full p-2"
      :class="activeIndex === props.images.length - 1 ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''"
      @click="swiperRef?.slideNext()"
    >
      <svg class="w-10 h-10 transition text-primary-light group-hover:text-primary-dark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <Teleport to="body">
      <transition mode="fade">
        <div
          v-if="modalImage"
          class="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-lg flex items-center justify-center"
          @click.self="closeModal"
        >
          <button
            class="absolute left-4 text-white text-4xl z-10"
            @click="prevImage"
          >
            <svg class="w-8 h-8 md:w-12 md:h-12 hover:text-primary-dark transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <transition
            :name="transitionDirection === 'left' ? 'slide-left' : 'slide-right'"
            mode="out-in"
          >
            <img
              :src="modalImage"
              :key="modalImage"
              class="max-h-[90vh] rounded-xl shadow-lg max-w-[80vw]"
            />
          </transition>

          <button
            class="absolute right-4 text-white text-4xl z-10"
            @click="nextImage"
          >
            <svg
              class="w-8 h-8 md:w-12 md:h-12 hover:text-primary-dark transition"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            class="absolute top-4 right-4 text-white text-4xl"
            @click="closeModal"
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.9992 36.5715L19.4277 18L17.9992 19.4286L36.5706 38L37.9992 36.5715Z" fill="#fff"/>
              <path d="M19.4285 38.0011L38 19.4297L36.5714 18.0011L18 36.5726L19.4285 38.0011Z" fill="#fff"/>
            </svg>
          </button>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: #05E2BF;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(.thumbs .swiper-slide img) {
  @apply border-2 border-dark-dark/10;
}
:deep(.swiper-slide-thumb-active img) {
  @apply !border-primary-dark;
}

/* Slide animation */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
