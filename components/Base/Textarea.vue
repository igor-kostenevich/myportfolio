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
    type: String,
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
  resize: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
  light: {
    type: Boolean,
    default: false,
  },
})

const uniqueId = computed(() => props.id || uuidv4())
const classes = computed(() => {
  return {
    'bg-transparent text-white focus:border-white focus-visible:border-white border-gray-150 placeholder:text-gray-150': props.error,
    'bg-transparent text-dark focus:border-gray-500 focus-visible:border-gray-500 border-gray-1500 placeholder:text-150': !props.error,
    'text-gray-50 cursor-not-allowed': props.disabled,
    'resize-none': !props.resize,
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
      class="text-gray-150 text-sm leading-4 tracking-sm absolute top-[21px] left-2"
    >
      {{ label }}
    </label>
    <textarea
      :id="uniqueId"
      :name="uniqueId"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      class="ring-current border-b px-2 py-[15px] leading-[26.4px] min-h-[122px]"
      :class="[classes, fieldClass]"
      @blur="onBlur"
      @focus="onFocus"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p
      v-if="text"
      class="text-gray-500 mt-2 text-sm"
    >
      {{ text }}
    </p>
    <div
      v-if="error"
      class="inline-flex mt-1"
    >
      <span class="text-xs text-red-500">{{ error }}</span>
    </div>
  </div>
</template>
