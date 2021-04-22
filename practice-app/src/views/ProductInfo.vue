<template>
  <div class="product-info">
    <p>get {{ nv }}</p>
  </div>
</template>

<script>
import getProduct from "../composables/getProduct";

export default {
  props: ["nv"],
  setup(props) {
    const { product, error, load } = getProduct(props.nv);
    load();
    return { product, error };
  },
};
</script>

<style>
</style>