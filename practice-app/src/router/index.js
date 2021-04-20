import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
