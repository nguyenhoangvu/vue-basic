<template>
  <table>
    <thead>
      <tr>
        <th v-for="title in titles" :key="title">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.nv">
        <td>
          <router-link
            :to="{ name: 'ProductInfo', params: { nv: product.nv } }"
          >
            {{ product.nv }}
          </router-link>
        </td>

        <td>{{ product.ten }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["products", "titles"],
};
</script>

<style>
table,
td,
th {
  border: 1px solid black;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>