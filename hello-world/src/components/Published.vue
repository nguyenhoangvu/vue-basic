<template>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "Published",
  props: {
    author: Object,
  },
  computed: {
    publishedBooksMessage() {
      // `this` points to the vm instance
      return this.author.books.length > 0
        ? "Yes author name is " + this.author.name
        : "No";
    },
  },
  methods: {},
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>