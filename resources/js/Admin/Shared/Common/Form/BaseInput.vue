<template>
  <label class="form-label">{{ label }}</label>
  <input
    v-bind="$attrs"
    class="form-control"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue:{
      type: [String, Number],
      default: ''
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>

</style>
