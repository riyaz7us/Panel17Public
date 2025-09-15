<template>
  <div class="space-y-2">
    <label v-if="label" class="block text-sm font-medium text-base-content/70">
      {{ label }}
      <span v-if="required" class="text-red-400 ml-1">*</span>
    </label>
    <div class="relative">
      <Icon 
        v-if="icon" 
        :name="icon" 
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" 
        size="20" 
      />
      <textarea
        v-if="textarea"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        :class="[
          'w-full p-4 bg-base-200 border border-base-300 rounded-lg text-base-content placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-vertical',
          monospace ? 'font-mono text-sm' : '',
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
      />
      <input
        v-else
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="[
          'w-full pr-4 py-3 bg-base-200 border border-base-300 rounded-lg text-base-content placeholder-base-content/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors',
          icon ? 'pl-10' : 'pl-4',
          monospace ? 'font-mono text-sm' : '',
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
      />
    </div>
    <p v-if="hint" class="text-xs text-base-content/60">{{ hint }}</p>
  </div>
</template>

<script setup>
defineEmits(['update:modelValue'])

const modelValue = defineModel()

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  monospace: {
    type: Boolean,
    default: false
  },
  hint: {
    type: String,
    default: ''
  },
  textarea: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  }
})
</script>