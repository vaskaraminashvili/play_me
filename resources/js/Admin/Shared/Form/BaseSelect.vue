<template>
  <BaseInputWrap :col="col">
    <label class="form-label">{{ label }}</label>
    <select
      class="form-select"
      :value="modelValue"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">Please select Opion</option>
      <template v-if="optionsType == 'object'">
        <option
          v-for="option in options"
          :key="option.key"
          :value="option.key"
          :selected="option.key == modelValue"
          v-text="option.value"
        ></option>
      </template>
      <template v-else>
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          :selected="option == modelValue"
          v-text="option"
        ></option>
      </template>
    </select>
  </BaseInputWrap>
</template>

<script>
import { formFieldMixin } from "@/mixins/formFieldMixin";
export default {
  mounted() {
    console.log(typeof this.options);
  },
  mixins: [formFieldMixin],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: [Object, Array],
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      optionsType: typeof this.options[0],
    };
  },
  computed: {
    element() {
      return this.options[0];
    },
  },
};
</script>

<style scoped>
</style>
