<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

interface FAQ {
  question: string
  answer: string
}

defineProps<{
  faqs: FAQ[]
}>()

const openIndex = ref<number | null>(null)

function handleToggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

function beforeEnter(el: Element) {
  const elH = el as HTMLElement
  elH.style.maxHeight = '0'
  elH.style.overflow = 'hidden'
}

function enter(el: Element) {
  const elH = el as HTMLElement
  elH.style.transition = 'max-height 0.3s ease'
  elH.style.maxHeight = elH.scrollHeight + 'px'
}

function leave(el: Element) {
  const elH = el as HTMLElement
  elH.style.transition = 'max-height 0.3s'
  elH.style.maxHeight = '0'
  // elH.style.maxHeight = elH.scrollHeight + 'px'// 🧠 начнем с текущей высоты

  // 👉 в следующем кадре (reflow) обнуляем
  requestAnimationFrame(() => {
    elH.style.maxHeight = '0'
  })
}
</script>

<template>
  <Disclosure
    v-for="(item, index) in faqs"
    :key="index"
    v-slot="{ open }"
    class="border border-gray-250/40 bg-dark-dark rounded max-w-[856px] mx-auto mb-2 last:mb-0"
    as="div"
  >
    <DisclosureButton
      class="flex w-full justify-between items-center text-left text-white font-medium focus:outline-none text-sm sm:text-lg h-full px-4 sm:py-4 sm:px-8 py-6 cursor-pointer"
      as="div"
      @click="handleToggle(index)"
    >
      <span>{{ item.question }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 min-w-5 w-5 ml-6 text-gray-400 transition-transform"
        :class="openIndex === index ? 'rotate-180 text-primary-dark' : 'rotate-0'"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 0 1 1.414 0l3.293 3.293 
            3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 
            0l-4-4a1 1 0 0 1 0-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </DisclosureButton>
    <DisclosurePanel static>
      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      >
        <div
          v-show="openIndex === index"
          class="spoller overflow-hidden mt-2 text-xs sm:text-base text-gray-100 leading-relaxed px-6 sm:px-8 tracking-tight max-w-[90%]"
        >
          <div v-html="item.answer" class="pb-6"></div>
        </div>
      </transition>
    </DisclosurePanel>
  </Disclosure>
</template>
