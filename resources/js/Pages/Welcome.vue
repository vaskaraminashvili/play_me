<template>
  <div>Welcome</div>
  <ul>
    <li v-for="item in list" :key="item.id" v-text="item.title"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          title: "Titile 1",
        },
        {
          id: "2",
          title: "Titile 12",
        },
        {
          id: "3",
          title: "Titile 13",
        },
        {
          id: "4",
          title: "Titile 45",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  background-color: red;
}
</style>
