<template>
  <BaseInputWrap :col="col">
    <label class="form-label">{{ label }}</label>
    <select
      class="form-select"
      :value="modelValue"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option == modelValue"
        v-text="option"
      ></option>
    </select>
  </BaseInputWrap>
</template>

<script>
import { formFieldMixin } from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
</style>
