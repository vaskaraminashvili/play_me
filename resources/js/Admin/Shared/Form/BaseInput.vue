<template>
  <BaseInputWrap :col="col">
    <label class="form-label">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="form-control"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
</style>


// it can be done sligtly differantly adding argument to parent component v-model
// donwside is that you must to know what prop component is expecting
// https://vuejs.org/guide/components/events.html#usage-with-v-model
