<script setup>
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
</script>

<template>
  <div class="group bg-secondary-dark pb-10 rounded-[40px] overflow-hidden shadow-lg">
    <div :class="['mb-7 relative overflow-hidden', isFirstProject ? 'pb-[55%]' : 'pb-[78%]']">
      <img
        v-if="project.image"
        :src="project.image"
        alt="Project Image"
        class="w-full h-full object-cover object-bottom absolute inset-0 transition rounded-b-[40px]"
      />
      <img
        v-else
        src="/images/project-thumb.png"
        alt="Project Image"
        class="w-full h-full object-cover absolute inset-0 transition rounded-b-[40px]"
      />
    </div>
    <div
      class="flex flex-col xl:flex-row xl:items-center justify-between px-6 gap-5 md:gap-10"
      :class="{ 'mt-10': isFirstProject }"
    >
      <div class="xl:w-2/3">
        <h3 class="text-xl md:text-2xl group-hover:text-primary-dark tracking-tight font-medium mb-2.5 transition">{{ project.title }}</h3>
        <p class="text-gray-100 text-sm md:text-base">{{ project.shortDescription }}</p>
      </div>
      <BaseButton
        variant="outline"
        class="group/button min-w-max w-full xl:w-auto"
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
