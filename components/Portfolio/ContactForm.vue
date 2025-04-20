<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import type { IContactForm, ISelectOptions } from '~/types'
import { useValidationErrors } from '~/composables/useValidationErrors'
const { notify } = useNotification()

const props = defineProps<{
  serviceType: string
}>()

const isLoading = ref(false)

const initialFormState: IContactForm = {
  name: '',
  email: '',
  serviceType: '',
  aboutProject: '',
}

const form = reactive<IContactForm>({ ...initialFormState })

const servicesOptions: ISelectOptions = [
  { name: 'Frontend Development', value: 'frontend' },
  { name: 'Backend Development', value: 'backend' },
  { name: 'Full-Stack Solutions', value: 'fullstack' },
  { name: 'Data Visualization', value: 'data-visualization' },
  { name: 'Optimization & Refactoring', value: 'optimization-refactoring' },
  { name: 'Integration & Deployment', value: 'integration' },
]

const rules = {
  name: {
    required: helpers.withMessage('Name is required', required),
  },
  email: {
    required: helpers.withMessage('Email is required', required),
    email: helpers.withMessage('Invalid email format', email),
  },
  serviceType: {
    required: helpers.withMessage('Service type is required', required),
  },
  aboutProject: {},
}

const activeService = computed(() => servicesOptions.find(option => option.value === form.serviceType))

const v$ = useVuelidate(rules, form as any)

const { errors } = useValidationErrors(v$)

async function onSubmit() {
  try {
    v$.value.$touch()
    if (v$.value.$error) return

    isLoading.value = true

    const textMessage = `
      Name: ${form.name}
      Email: ${form.email}
      Service type: ${activeService.value?.name}
      Subject: ${form.aboutProject}
    `
    const htmlMessage = `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        background-color: #f7f7f7;
        padding: 20px;
        border-radius: 8px;
        line-height: 1.6;
        color: #333;
      ">
        <h2 style="
          margin-top: 0;
          color: #1c87c9;
          border-bottom: 2px solid #1c87c9;
          padding-bottom: 10px;
        ">
          New Contact Request
        </h2>

        <table style="
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        ">
          <tr>
            <td style="padding: 10px; vertical-align: top; font-weight: bold;">Name:</td>
            <td style="padding: 10px;">${form.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; vertical-align: top; font-weight: bold;">Email:</td>
            <td style="padding: 10px;">${form.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; vertical-align: top; font-weight: bold;">Service Type:</td>
            <td style="padding: 10px;">${activeService.value?.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; vertical-align: top; font-weight: bold;">Subject:</td>
            <td style="padding: 10px;">${form.aboutProject}</td>
          </tr>
        </table>
      </div>
    `

    const payload = {
      subject: `New Contact from ${form.name}`,
      text: textMessage,
      html: htmlMessage,
    }

    await $fetch('/api/contact', {
      method: 'POST',
      body: payload,
    })

    notify({
      title: 'Success',
      text: 'Your email has been sent successfully',
      type: 'success',
    })
    Object.assign(form, initialFormState)
    v$.value.$reset()
  } catch (error) {
    notify({
      title: 'Error',
      text: 'An error occurred while sending your email',
      type: 'error',
    })
    v$.value.$reset()
  }
}

watch(
  () => props.serviceType,
  newValue => {
    if (newValue) {
      form.serviceType = newValue // 👈 вот это добавь
      v$.value.serviceType.$touch()
    }
  },
  { immediate: true },
)
</script>

<template>
  <h3 class="text-lg font-medium mb-4 sm:mb-8">Fill the Form</h3>
  <form
    class="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-10"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      v-model="form.name"
      :error="errors.name.value"
      label="Full Name"
      class="xl:col-span-2"
    />
    <BaseInput
      v-model="form.email"
      :error="errors.email.value"
      label="Email Address"
      class="w-full"
    />
    <BaseSelect
      v-model="form.serviceType"
      :error="errors.serviceType.value"
      :options="servicesOptions"
      label="Service Type"
      class="w-full"
    />
    <BaseTextarea
      v-model="form.aboutProject"
      :error="errors.aboutProject.value"
      label="About Project"
      class="xl:col-span-2"
    />
    <BaseButton
      type="submit"
      class="group mt-6 md:mt-0 w-full md:col-span-1 md:w-max mx-auto sm:mx-0"
    >
      Get in Touch
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
    </BaseButton>
  </form>
</template>
