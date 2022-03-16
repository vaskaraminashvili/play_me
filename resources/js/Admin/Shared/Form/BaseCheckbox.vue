<template>
  <BaseInputWrap :col="col">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :id="name"
      />
      <label :for="name" class="form-check-label" v-if="label">{{
        label
      }}</label>
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
      type: Boolean,
      default: false,
    },
  },
  computed: {
    name() {
      return upperFirst(camelCase(this.label));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
