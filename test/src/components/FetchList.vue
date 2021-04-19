<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <ListDetail :post="post" />
    </div>
  </div>
</template>

<script>
import ListDetail from "./ListDetail";
export default {
  props: ["posts"],
  components: { ListDetail },
  setup(props) {
    console.log(props);
  },
};
</script>

<style>
</style>