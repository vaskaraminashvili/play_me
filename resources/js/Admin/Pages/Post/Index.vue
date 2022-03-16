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
      <div class="row">
        <BaseInput label="ID" v-model="selected['filter[id]']" />
        <BaseInput label="Title" v-model="selected['filter[title]']" />
        <BaseCheckbox label="Status" v-model="selected['filter[status]']" />
        <div class="col-xl-3">
          <div class="mb-3">
            <label class="form-label">Start Date</label>
            <flat-pickr
              v-model="date"
              class="form-control datetimepicker"
            ></flat-pickr>
          </div>
        </div>
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
      <div
        id="tableExample2"
        data-list='{"valueNames":["name","email","age"],"page":5,"pagination":true}'
      >
        <div class="table-responsive scrollbar">
          <table class="table table-bordered table-striped fs--1 mb-0">
            <thead class="bg-200 text-900">
              <tr>
                <th
                  @click="sortColumn"
                  class="sort"
                  data-sortColumn="id"
                  :data-sort="sort.id"
                >
                  ID
                </th>
                <th
                  @click="sortColumn"
                  class="sort"
                  data-sortColumn="title"
                  :data-sort="sort.title"
                >
                  Title
                </th>
                <th
                  @click="sortColumn"
                  class="sort"
                  data-sortColumn="status"
                  :data-sort="sort.status"
                >
                  Status
                </th>
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
import Card from "@/Admin/Shared/Common/Card";
import Paginator from "@/Admin/Shared/Common/Paginator";
import { debounce } from "lodash";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {
    Card,
    Paginator,
    flatPickr,
  },
  props: {
    posts: Object,
    filters: Object,
    sort: String,
  },
  data() {
    return {
      selected: {
        "filter[id]": this.filters.id ? this.filters.id : "",
        "filter[title]": this.filters.title ? this.filters.title : "",
        "filter[status]": this.filters.status ? this.filters.status : "",
      },
    };
  },
  computed: {
    // queryString() {
    //   return this.search.id + "+test=" + this.search.title;
    // },
  },
  methods: {
    // sortColumn(e) {
    //   var sortColumn = e.target.getAttribute("data-sortColumn");
    //   if (this.sort == sortColumn) {
    //     this.sort = "-" + sortColumn;
    //   } else {
    //     this.sort = sortColumn;
    //   }
    // },
    // clearFilter() {
    //   this.$inertia.get(route("admin.posts.index"));
    // },
  },
  watch: {
    selected: {
      handler: debounce(function () {
        this.$inertia.get(route("admin.posts.index"), this.selected, {
          preserveState: true, // to preserve state of the input and not to input on every char insert
          replace: true, // not to create browser history every time users types a char insead it just repalces it
        });
      }, 300),
      deep: true,
    },
    // sort: {
    //   handler: debounce(function (val) {
    //     this.$inertia.get(
    //       route("admin.posts.index"),
    //       {
    //         "filter[id]": this.search.id,
    //         "filter[title]": this.search.title,
    //         sort: val,
    //       },
    //       {
    //         preserveState: true, // to preserve state of the input and not to input on every char insert
    //         replace: true, // not to create browser history every time users types a char insead it just repalces it
    //       }
    //     );
    //   }, 300),
    // },
  },
};
</script>

<style scoped>
</style>
