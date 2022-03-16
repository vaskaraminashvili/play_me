<template>
  <BaseInputWrap :col="col">
    <div
      class="form-check"
      :class="vertical ? 'form-check' : 'form-check-inline'"
    >
      <input
        class="form-check-input"
        :id="id"
        type="radio"
        :checked="modelValue == value"
        :value="value"
        @change="$emit('update:modelValue', value)"
        v-bind="$attrs"
      />
      <label class="form-check-label" v-if="label" :for="id">
        {{ label }}</label
      >
    </div>
  </BaseInputWrap>
</template>

<script>
import { upperFirst, camelCase } from "lodash";
import { formFieldMixin } from "@/mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    id() {
      return upperFirst(camelCase(this.label));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
