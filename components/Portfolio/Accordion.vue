<template>
    <Disclosure
      v-for="(item, index) in faqs"
      :key="index"
      class="border border-gray-250/40 bg-dark-dark rounded max-w-[856px] mx-auto mb-2 last:mb-0"
      as="div"
      v-slot="{ open }"
    >
      <DisclosureButton
        class="flex w-full justify-between items-center text-left text-white font-medium focus:outline-none text-sm sm:text-lg h-full px-4 py-5 cursor-pointer"
        as="div"
      >
        <span>{{ item.question }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 min-w-5 w-5 ml-6  text-gray-400 transition-transform"
          :class="open ? 'rotate-180 text-primary-dark' : 'rotate-0'"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0l3.293 3.293 
            3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 
            0l-4-4a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
        </svg>
      </DisclosureButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <DisclosurePanel v-slot="{ open }">
          <div
            class="mt-2 text-xs sm:text-base text-gray-100 leading-relaxed px-4 pb-6  tracking-tight max-w-[90%] sm:max-w-[80%]"
            v-if="open"
          >
            {{ item.answer }}
          </div>
        </DisclosurePanel>
      </transition>
    </Disclosure>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/vue'

interface FAQ {
  question: string;
  answer: string;
}

defineProps<{
  faqs: FAQ[]
}>()
</script>
