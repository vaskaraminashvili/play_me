<template>
  <div class="mb-3" :class="'col-xl-' + cardSize">
    <div class="card">
      <template v-if="$slots.header">
        <div class="card-header">
          <slot name="header">Fallback Header</slot>
        </div>
      </template>
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  props: {
    cardSize: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
