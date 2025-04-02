<script setup lang="ts">
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { computed, ref } from 'vue'
import type { ISelectOptions, ISelectOptionsObjectValue } from '@/types'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [Object, Array, Number, String],
    default: null,
  },
  defaultValue: {
    type: [Object, Array, Number, String],
    default: null,
  },
  placeholder: {
    type: String,
  },
  closable: {
    type: Boolean,
    default: false,
  },
  id: {
    type: [String, Number],
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as ISelectOptions[],
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
})

const searchQuery = ref('')

const isEmptyValue = computed(
  () => !model.value || (Array.isArray(model.value) ? model.value.length === 0 : typeof model.value === 'object' && Object.keys(model.value).length === 0),
)

const filteredOptions = computed(() => {
  if (!searchQuery.value.trim()) {
    return props.options
  }
  return props.options.filter(option =>
    isOptionObjectValue(option)
      ? option.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      : String(option).toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const model = computed({
  get() {
    const item = props.options.find((i: any) => i.value === props.modelValue)
    if (!item) return props.defaultValue || props.modelValue
    return item
  },
  set(value) {
    searchQuery.value = ''
    if (Array.isArray(props.modelValue)) {
      emit('update:modelValue', [value])
    } else if (isOptionObjectValue(props.modelValue)) {
      emit('update:modelValue', { value })
    } else if (typeof value === 'object' && value !== null && 'value' in value) {
      emit('update:modelValue', value.value)
    } else {
      emit('update:modelValue', value)
    }
  },
})

function clearValues() {
  switch (typeof props.modelValue) {
    case 'object':
      emit('update:modelValue', Array.isArray(model.value) ? [] : {})
      return
    default:
      emit('update:modelValue', null)
      return
  }
}

function isOptionObjectValue(option: any): option is ISelectOptionsObjectValue {
  return option && typeof option === 'object' && 'name' in option && 'value' in option
}

function getOptionValue(option: any): ISelectOptionsObjectValue | string | number {
  return isOptionObjectValue(option) ? (option as ISelectOptionsObjectValue) : option
}
</script>

<template>
  <div class="flex flex-col h-full h-[45px]">
    <div
      class="flex relative"
      v-bind="$attrs"
    >
      <Listbox
        v-model="model"
        :multiple="multiple"
        :disabled="disabled"
      >
        <ListboxLabel
          v-if="label && isEmptyValue"
          class="text-sm text-gray-150 leading-4 pointer-events-none tracking-sm absolute top-4 left-2"
          :class="{ 'opacity-30': disabled }"
          >{{ label }}</ListboxLabel
        >
        <ListboxButton
          v-slot="{ open }"
          :disabled="disabled"
          :class="{ 'zinc-200 text-gray-150 cursor-not-allowed': disabled, 'border-red bg-transparent text-gray-150': error }"
          class="w-full bg-transparent text-white placeholder:text-gray-150 focus:border-gray-100 border-b border-gray-150 px-2 py-2.5 h-[45px]"
        >
          <div class="flex items-center">
            <div
              :class="[
                'flex items-center flex-wrap mr-[0.3rem] text-left flex-1',
                {
                  'text-gray-700 opacity-30': isEmptyValue,
                },
              ]"
            >
              <template v-if="multiple && Array.isArray(model) && model.length">
                <template
                  v-for="item in model"
                  :key="item.value"
                >
                  <span class="inline-flex items-center py-1 px-1.5">
                    <slot
                      name="title"
                      :value="item"
                    >
                      {{ item.name }}
                    </slot>
                  </span>
                </template>
              </template>
              <template v-else-if="!multiple && model && !Array.isArray(model) && typeof model === 'object' && Object.keys(model).length">
                <slot
                  name="title"
                  :value="model"
                >
                  <span class="truncate">{{ model.name }}</span>
                </slot>
              </template>
              <template v-else-if="model && (typeof model === 'string' || typeof model === 'number')">
                {{ model }}
              </template>
              <template v-else>
                {{ placeholder }}
              </template>
            </div>

            <XMarkIcon
              v-if="closable && !isEmptyValue"
              class="mr-1.5 h-5 w-5 text-gray-500"
              @click.stop="clearValues"
            />
            <ChevronDownIcon
              class="w-5 h-5 text-gray-150 transition duration-200"
              :class="[open ? '-rotate-180' : '']"
            />
          </div>
        </ListboxButton>

        <transition
          enter-active-class="transition duration-100"
          enter-from-class="transform translate-y-3 opacity-0"
          enter-to-class="transform opacity-100"
          leave-active-class="transition duration-100"
          leave-from-class="transform opacity-100"
          leave-to-class="transform translate-y-3 opacity-0"
        >
          <ListboxOptions class="absolute inset-x-0 top-full z-30 shadow-md bg-dark-dark border border-gray-400/20 rounded-bl-xl rounded-br-xl border-t-0">
            <div
              v-if="searchable"
              class="px-2 py-2 border-b border-gray-200"
            >
              <base-input
                v-model="searchQuery"
                type="text"
                class="w-full"
                placeholder="Search..."
                @keydown.space.stop
              />
            </div>

            <!-- eslint-disable-next-line vue/valid-v-for -->
            <ListboxOption
              v-for="option in filteredOptions"
              v-slot="{ selected }"
              class="header-select-link smooth-transition border-t-0 text-sm p-0 cursor-pointer hover:bg-white/10 border-b border-gray-400/20 last:border-b-0"
              :value="getOptionValue(option)"
              :disabled="disabled"
              :class="{ 'opacity-30 cursor-not-allowed': disabled }"
            >
              <div
                class="flex items-center justify-between"
                :class="{ 'bg-secondary-dark': selected }"
              >
                <li class="flex items-center px-2 py-2 w-full text-gray-150 text-xs">
                  <template v-if="isOptionObjectValue(option)">
                    <slot
                      name="option"
                      :value="option"
                    >
                      {{ option.name }}
                    </slot>
                  </template>
                  <template v-else>
                    <slot
                      name="option"
                      :value="option"
                    >
                      {{ option }}
                    </slot>
                  </template>
                </li>
              </div>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </Listbox>
    </div>
    <div
      v-if="error"
      class="inline-flex mt-1"
    >
      <span class="text-xs text-red">{{ error }}</span>
    </div>
    <p
      v-if="text"
      class="flex text-gray-500 mt-2 text-sm"
    >
      {{ text }}
    </p>
  </div>
</template>
