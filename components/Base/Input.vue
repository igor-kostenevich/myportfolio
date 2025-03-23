<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  fieldClass: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
})

const uniqueId = computed(() => props.id || uuidv4())
const classes = computed(() => {
  return {
    'border-red bg-transparent text-white placeholder:text-gray-100': props.error,
    'bg-transparent text-white focus:border-white focus-visible:border-white border-gray-150 placeholder:text-gray-150': !props.error,
    'text-gray-50 cursor-not-allowed': props.disabled,
  }
})

function onBlur(e: FocusEvent) {
  emit('blur', e)
}

function onFocus(e: FocusEvent) {
  emit('focus', e)
}
</script>

<template>
  <div class="flex flex-col w-full relative">
    <label
      v-if="label && !modelValue"
      :for="uniqueId"
      class="text-sm text-gray-150 leading-4 tracking-sm absolute top-4 left-2"
    >
      {{ label }}
    </label>
    <input
      :id="uniqueId"
      :name="uniqueId"
      :value="modelValue"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      class="ring-current border-b px-2 py-[15.5px] leading-[26.4px] max-h-[45px]"
      :class="[classes, fieldClass]"
      @blur="onBlur"
      @focus="onFocus"
      @input="$emit('update:modelValue', type === 'number' ? +($event.target as HTMLInputElement).value : ($event.target as HTMLInputElement).value)"
    />
    <div
      v-if="error"
      class="inline-flex mt-1"
    >
      <span class="text-xs text-red">{{ error }}</span>
    </div>
  </div>
</template>
