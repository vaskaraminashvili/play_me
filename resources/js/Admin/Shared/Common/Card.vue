<template>
  <div class="mb-3" :class="'col-xl-' + cardSize">
    <div class="card">
      <template v-if="$slots.header">
        <div class="card-header">
          <slot name="header">Fallback Header</slot>
        </div>
      </template>
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
  mounted() {
    console.log(this.$slots.header);
  },
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
