import type { Validation } from '@vuelidate/core'

export function useValidationErrors<T extends Record<string, any>>(validationOrRef: Validation<T> | Ref<Validation<T>>) {
  const validation = isRef(validationOrRef) ? computed(() => validationOrRef.value) : computed(() => validationOrRef)

  const errors: { [K in keyof T]: ComputedRef<string> } = {} as any

  for (const fieldName in validation.value) {
    errors[fieldName as keyof T] = computed(() => {
      const v = validation.value
      if (!v) return ''
      const field = v[fieldName]
      if (!field) return ''
      const fieldErrors = field.$errors
      if (!fieldErrors.length) return ''
      return fieldErrors[0].$message
    })
  }

  return { errors }
}
