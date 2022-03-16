<template>
  <div :class="'col-xl-' + col">
    <div class="mb-3">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    col: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
