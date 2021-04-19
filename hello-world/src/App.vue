<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Published
    :author="{
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery',
      ],
    }"
  /><br />
  <Increment />
  <br />
  <TodoList />
  <br />
  <div v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up</h1>
      <p>test</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
  <br />
  <FormBasic />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Published from "./components/Published.vue";
import Increment from "./components/Increment.vue";
import TodoList from "./components/TodoList.vue";
import Modal from "./components/Modal.vue";
import FormBasic from "./components/FormBasic.vue";

export default {
  name: "App",
  data() {
    return {
      theme: "saleq",
      showModal: false,
    };
  },
  components: {
    HelloWorld,
    Published,
    Increment,
    TodoList,
    Modal,
    FormBasic,
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
