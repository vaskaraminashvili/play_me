<template>
  <div class="mb-3" :class="'col-xl-' + cardSize">
    <div class="card">
      <div class="card-header">
        <slot name="header">Fallback Header</slot>
      </div>
      <div class="card-body">
        <div class="row">
          <div :class="'col-xl-' + cardInternalSize">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardSize: {
      type: Number,
      default: 12,
    },
    cardInternalSize: {
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
