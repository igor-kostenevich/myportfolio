<script setup>
const { toWebp } = useHelpers()

defineProps({
  project: {
    type: Object,
    default: () => ({}),
  },
  isFirstProject: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['open'])
</script>

<template>
  <div class="flex flex-col group bg-secondary-dark pb-10 rounded-[40px] overflow-hidden shadow-lg">
    <div :class="['mb-7 relative overflow-hidden', isFirstProject ? 'pb-[55%]' : 'pb-[78%]']">
      <picture v-if="project.image">
        <source :srcset="toWebp(project.image)" type="image/webp" />
        <img
          :src="project.image"
          alt="Project Image"
          class="w-full h-full object-cover object-bottom absolute inset-0 transition rounded-b-[40px]"
        />
      </picture>
      <img
        v-else
        src="/images/project-thumb.png"
        alt="Project Image"
        class="w-full h-full object-cover absolute inset-0 transition rounded-b-[40px]"
      />
    </div>
    <ul class="flex flex-wrap gap-2 px-6 mb-6">
      <li
        v-for="stack in project.techStack"
        :key="stack"
        class="border border-white/40 rounded-full text-xs py-1 px-2"
        :class="{ 'xl:mt-5': isFirstProject }"
      >
        {{ stack }}
      </li>
    </ul>
    <div
      class="flex flex-col px-6 gap-5 md:gap-10 h-full"
      :class="{ 'xl:flex-row xl:items-center justify-between': isFirstProject }"
    >
      <div :class="[isFirstProject ? 'xl:w-2/4' : 'flex flex-col h-full']">
        <h3 class="text-xl md:text-2xl tracking-tight font-medium mb-2.5 transition">{{ project.title }}</h3>
        <p class="text-gray-100 text-sm md:text-base">{{ project.shortDescription }}</p>
      </div>
      <BaseButton
        variant="outline"
        class="group/button min-w-max w-full xl:w-auto"
        @click="emit('open', project)"
      >
        View Case
        <SvgIcon
          name="arrow-right"
          class="transition-transform group-hover/button:-rotate-45 ml-2 w-4 h-4"
        />
      </BaseButton>
    </div>
  </div>
</template>
