<template>
  <BaseInputWrap :col="col">
    <label class="form-label">{{ label }}</label>
    <div class="min-vh-50">
      <Editor
        api-key="no-api-key"
        model-events="change "
        :init="{ plugins: 'wordcount' }"
        v-model="modelValue"
        @change="$emit('update:modelValue', modelValue)"
      />
    </div>
  </BaseInputWrap>
</template>

<script setup>

import Editor from '@tinymce/tinymce-vue'
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  col: {
    type: [String, Number],
    default: 12,
  },
})
</script>

<style lang="scss">
</style>
