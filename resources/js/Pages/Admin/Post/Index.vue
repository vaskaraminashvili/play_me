<template>
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
      <div
        id="tableExample2"
        data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
      >
        <div class="table-responsive scrollbar">
          <table class="table table-bordered table-striped fs--1 mb-0">
            <thead class="bg-200 text-900">
              <tr>
                <th class="sort" data-sort="id">ID</th>
                <th class="sort" data-sort="title">Title</th>
                <th class="sort" data-sort="status">Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="post in posts.data" :key="post.id">
                <td class="id">{{ post.id }}</td>
                <td class="title">{{ post.title }}</td>
                <td class="status">{{ post.status }}</td>
                <td>Actions here</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Paginator :links="posts.links" />
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "@/Shared/Admin/Common/Card";
import Paginator from "@/Shared/Admin/Common/Paginator";
export default {
  components: {
    Card,
    Paginator,
  },
  props: {
    posts: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
