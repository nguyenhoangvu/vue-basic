<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <label>Username</label>
      <input type="text" id="username" v-model="username" required /><br />
      <label>Password</label>
      <input type="text" id="password" v-model="password" required /><br />
      <router-link :to="{ name: 'Product' }">
        <button type="submit">Login</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import getToken from "../composables/getToken";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      getToken(this.username, this.password);
    },
  },
};
</script>

<style>
</style>