<template>
  <h1>hello</h1>
  <div class="search">
    <h1>Search</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-if="matchNames">
      <div v-for="name in matchNames" :key="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "Search",
  setup() {
    const search = ref("");
    const names = ref([
      "asc",
      "asv",
      "asva",
      "asvsc",
      "asvcasc",
      "asvasc",
      "asav",
      "asvv",
    ]);

    const matchNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchNames };
  },
};
</script>

<style>
</style>