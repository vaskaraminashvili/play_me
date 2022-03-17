<template>
  <Head title="Post Edit" />
  <Card>
    <div class="row">
      <div class="col-xl-12">
        <PostForm />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/Admin/Shared/Common/Card";
import PostForm from "@/Admin/Shared/Post/PostForm";
export default {
  components: {
    Card,
    PostForm,
  },
};
</script>

<style lang="scss" scoped>
</style>
