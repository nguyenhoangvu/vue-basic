<template>
  <h1>List Product</h1>
  <ListProducts :products="products" :titles="titles" />
</template>

<script>
import getListProduct from "../composables/getListProduct";
import ListProducts from "../components/ListProducts";

export default {
  data() {
    return {
      titles: ["Nghiep vu", "Ten"],
    };
  },
  setup() {
    const { products, error, load } = getListProduct();
    load();

    return { products, error };
  },
  components: { ListProducts },
};
</script>

<style>
</style>