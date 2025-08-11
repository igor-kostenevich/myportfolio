<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required, email as vEmail, helpers } from '@vuelidate/validators'
import type { IContactForm, ISelectOptions } from '~/types'
import { useValidationErrors } from '~/composables/useValidationErrors'
import { useI18n } from 'vue-i18n'
const { notify } = useNotification()

const { t } = useI18n()

const props = defineProps<{ serviceType: string }>()

const isLoading = ref(false)

const initialFormState: IContactForm = {
  name: '',
  email: '',
  serviceType: '',
  aboutProject: '',
}

const form = reactive<IContactForm>({ ...initialFormState })

// Опції сервісів — локалізовані
const servicesOptions = computed<ISelectOptions>(() => [
  { name: t('contactForm.options.frontend'), value: 'frontend' },
  { name: t('contactForm.options.backend'), value: 'backend' },
  { name: t('contactForm.options.fullstack'), value: 'fullstack' },
  { name: t('contactForm.options["data-visualization"]'), value: 'data-visualization' },
  { name: t('contactForm.options["optimization-refactoring"]'), value: 'optimization-refactoring' },
  { name: t('contactForm.options.integration'), value: 'integration' }
])

// Валідатори — локалізовані повідомлення (функції, щоб реагувати на зміну мови)
const rules = {
  name: {
    required: helpers.withMessage(() => t('contactForm.errors.nameRequired'), required)
  },
  email: {
    required: helpers.withMessage(() => t('contactForm.errors.emailRequired'), required),
    email: helpers.withMessage(() => t('contactForm.errors.emailInvalid'), vEmail)
  },
  serviceType: {
    required: helpers.withMessage(() => t('contactForm.errors.serviceTypeRequired'), required)
  },
  aboutProject: {}
}

const activeService = computed(() =>
  servicesOptions.value.find(option => 
    typeof option === 'object' && 'value' in option && option.value === form.serviceType
  )
)

const v$ = useVuelidate(rules, form as any)
const { errors } = useValidationErrors(v$)

async function onSubmit() {
  try {
    v$.value.$touch()
    if (v$.value.$error) return

    isLoading.value = true

    const textMessage = `
      ${t('contactForm.mail.labels.name')}: ${form.name}
      ${t('contactForm.mail.labels.email')}: ${form.email}
      ${t('contactForm.mail.labels.serviceType')}: ${(activeService.value as { name: string })?.name}
      ${t('contactForm.mail.labels.subject')}: ${form.aboutProject}
    `.trim()

    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto; background:#f7f7f7; padding:20px; border-radius:8px; line-height:1.6; color:#333;">
        <h2 style="margin-top:0; color:#1c87c9; border-bottom:2px solid #1c87c9; padding-bottom:10px;">
          ${t('contactForm.mail.header')}
        </h2>
        <table style="width:100%; margin-top:20px; border-collapse:collapse;">
          <tr><td style="padding:10px; font-weight:bold;">${t('contactForm.mail.labels.name')}:</td><td style="padding:10px;">${form.name}</td></tr>
          <tr><td style="padding:10px; font-weight:bold;">${t('contactForm.mail.labels.email')}:</td><td style="padding:10px;">${form.email}</td></tr>
          <tr><td style="padding:10px; font-weight:bold;">${t('contactForm.mail.labels.serviceType')}:</td><td style="padding:10px;">${(activeService.value as { name: string })?.name}</td></tr>
          <tr><td style="padding:10px; font-weight:bold;">${t('contactForm.mail.labels.subject')}:</td><td style="padding:10px;">${form.aboutProject}</td></tr>
        </table>
      </div>
    `

    const payload = {
      subject: t('contactForm.mail.subject', { name: form.name }),
      message: textMessage,
      html: htmlMessage
    }

    await $fetch('/api/contact', { method: 'POST', body: payload })

    notify({
      title: t('contactForm.notifications.successTitle'),
      text: t('contactForm.notifications.successText'),
      type: 'success'
    })

    Object.assign(form, initialFormState)
    v$.value.$reset()

    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('submitted_contact_form')
    }
  } catch (error) {
    notify({
      title: t('contactForm.notifications.errorTitle'),
      text: t('contactForm.notifications.errorText'),
      type: 'error'
    })
    v$.value.$reset()
  } finally {
    isLoading.value = false
  }
}

watch(
  () => props.serviceType,
  newValue => {
    if (newValue) {
      form.serviceType = newValue
      v$.value.serviceType.$touch()
    }
  },
  { immediate: true }
)
</script>

<template>
  <h3 class="text-lg font-medium mb-4 sm:mb-8">{{ $t('contactForm.title') }}</h3>

  <form class="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-10" @submit.prevent="onSubmit">
    <BaseInput
      v-model="form.name"
      :error="errors.name.value"
      :label="$t('contactForm.fields.fullName')"
      class="xl:col-span-2"
    />
    <BaseInput
      v-model="form.email"
      :error="errors.email.value"
      :label="$t('contactForm.fields.email')"
      class="w-full"
    />
    <BaseSelect
      v-model="form.serviceType"
      :error="errors.serviceType.value"
      :options="servicesOptions"
      :label="$t('contactForm.fields.serviceType')"
      class="w-full"
    />
    <BaseTextarea
      v-model="form.aboutProject"
      :error="errors.aboutProject.value"
      :label="$t('contactForm.fields.aboutProject')"
      class="xl:col-span-2"
    />
    <BaseButton type="submit" class="group mt-6 md:mt-0 w-full md:col-span-1 md:w-max mx-auto sm:mx-0">
      {{ $t('contactForm.submit') }}
      <template #right>
        <svg class="flex items-center justify-center w-5 h-5 ml-2 group-hover:-rotate-45 transition-transform !duration-200" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33497 4.59961L13.335 8.59961L9.33497 12.5996M12.668 8.59961L2.66797 8.59961" stroke="currentColor" stroke-width="1.44" stroke-linecap="square"/>
        </svg>
      </template>
    </BaseButton>
  </form>
</template>
