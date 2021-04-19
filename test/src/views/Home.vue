<template>
  <div class="home">
    <h1>Home page</h1>
    <div v-if="error">{{ error }}</div>
    <FetchList :posts="posts" />
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import FetchList from "../components/FetchList";

export default {
  name: "Home",
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
  components: {
    FetchList,
  },
};
</script>
