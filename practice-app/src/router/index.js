import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";
import ProductInfo from "../views/ProductInfo.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/:nv",
    name: "ProductInfo",
    component: ProductInfo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
