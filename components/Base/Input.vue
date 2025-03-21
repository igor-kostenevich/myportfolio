<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { computed } from 'vue'

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
  light: {
    type: Boolean,
    default: false
  }
})

const uniqueId = computed(() => props.id || uuidv4())
const classes = computed(() => {
  return {
    'border-red bg-gray-500 text-gray-200 placeholder:text-gray-250': props.error && !props.light,
    'bg-gray-500 text-white focus:border-white focus-visible:border-white border-gray-200 placeholder:text-gray-250': !props.error && !props.light,
    'bg-white text-dark focus:border-gray-500 focus-visible:border-gray-500 border-gray-200 placeholder:text-gray-200': !props.error && props.light,
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
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      :for="uniqueId"
      class="mb-2 text-sm leading-4 font-medium tracking-sm"
      :class="[light ? 'text-dark' : 'text-white']"
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
      class="ring-current rounded-lg border px-4 py-[15.5px] leading-[26.4px] max-h-[52px]"
      :class="[classes, fieldClass]"
      @blur="onBlur"
      @focus="onFocus"
      @input="$emit('update:modelValue', type === 'number' ? +($event.target as HTMLInputElement).value : ($event.target as HTMLInputElement).value)"
    />
    <div
      v-if="error"
      class="inline-flex mt-1"
    >
      <span class="text-sm text-red">{{ error }}</span>
    </div>
  </div>
</template>
