<template>
  <Head title="Posts Table" />
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
        <BaseSelect
          label="Status"
          v-model="selected['filter[status]']"
          :options="options"
        />
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
                  :data-sort="selected.sort.id"
                >
                  ID
                </th>
                <th
                  @click="sortColumn"
                  class="sort"
                  data-sortColumn="title"
                  :data-sort="selected.sort.title"
                >
                  Title
                </th>
                <th
                  @click="sortColumn"
                  class="sort"
                  data-sortColumn="status"
                  :data-sort="selected.sort.status"
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
                <td class="text-end">
                  <div class="d-flex justify-content-end">
                    <Link
                      class="btn p-0"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                      :href="route('admin.posts.edit', post.id)"
                    >
                      <span class="text-500 fas fa-edit"></span>
                    </Link>
                    <div class="dropdown font-sans-serif position-static">
                      <button
                        class="
                          btn btn-link
                          text-600
                          btn-sm
                          dropdown-toggle
                          btn-reveal
                        "
                        type="button"
                        data-bs-toggle="dropdown"
                        data-boundary="window"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="fas fa-ellipsis-h fs--1"></span>
                      </button>
                      <div class="dropdown-menu dropdown-menu-end border py-0">
                        <div class="bg-white py-2">
                          <a class="dropdown-item" href="#!">Edit</a
                          ><a class="dropdown-item text-danger" href="#!"
                            >Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
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
import Paginator from "@/Admin/Shared/Common/Paginator";
import { debounce } from "lodash";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {
    Paginator,
    flatPickr,
  },
  props: {
    posts: Object,
    filters: Object,
    // sort: String,
  },
  data() {
    return {
      selected: {
        "filter[id]": this.filters.id ? this.filters.id : "",
        "filter[title]": this.filters.title ? this.filters.title : "",
        "filter[status]": this.filters.status ? this.filters.status : "",
        sort: "",
      },
      options: [0, 1],
    };
  },
  computed: {
    // queryString() {
    //   return this.search.id + "+test=" + this.search.title;
    // },
  },
  methods: {
    sortColumn(e) {
      var sortColumn = e.target.getAttribute("data-sortColumn");
      if (this.selected.sort == sortColumn) {
        this.selected.sort = "-" + sortColumn;
      } else {
        this.selected.sort = sortColumn;
      }
    },
    clearFilter() {
      this.$inertia.get(route("admin.posts.index"));
    },
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
  },
};
</script>

<style scoped>
</style>
