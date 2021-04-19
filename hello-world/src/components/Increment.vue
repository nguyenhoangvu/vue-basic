<template>
  <ul v-for="numbers in sets" :key="numbers">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>
  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  <br />
  <div>{{ count }}</div>
  <button @click="increment">increase</button>
  <button @click="decrement">decrease</button>
</template>

<script>
export default {
  name: "Increment",
  data() {
    return {
      count: 4,
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  methods: {
    increment() {
      return this.count++;
    },

    decrement() {
      return this.count--;
    },

    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<style>
button {
  width: 100px;
}
</style>