<template>
  <div class="d-flex justify-content-center mt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-for="link in links" :key="link.id">
          <Component
            :is="link.url ? 'Link' : 'span'"
            :key="link.id"
            :href="link.url"
            v-html="link.label"
            class="page-link"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

