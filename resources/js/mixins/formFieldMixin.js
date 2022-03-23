export const formFieldMixin = {
  props: {
    label: {
      type: String,
      default: "",
    },
    col: {
      type: [String, Number],
      default: 3,
    },
  }
};
