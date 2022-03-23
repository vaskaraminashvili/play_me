<template>
    <Head title="Post Edit" />
  <Card>
        <template v-slot:header>
      <h5 class="mb-0" data-anchor="data-anchor" id="pagination-with-numbering">
        Pagination with numbering<a
          class="anchorjs-link"
          aria-label="Anchor"
          data-anchorjs-icon="#"
          href="#pagination-with-numbering"
          style="padding-left: 0.375em"
        ></a>
      </h5>
      <p class="mb-0 mt-2 mb-0">
        Add <code> pagination </code> class for enable number pagination. The
        following structure will enable number pagination with next and previous
        button.
      </p>
    </template>
    <template v-slot:default>
      <div class="row">
        <BaseInput col="6" />

      </div>
      <div class="row">
        <div class="col-xl-12">
          <button
            @click="clearFilter"
            class="btn btn-outline-warning me-1 mb-2"
            type="button"
          >
            Clear filter
          </button>
        </div>
      </div>

    </template>
  </Card>
</template>

<script setup>
import BaseInput from '../../Shared/Form/BaseInput.vue';
</script>

<style lang="scss" scoped>
</style>
