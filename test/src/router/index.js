import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/jobs/Job.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/404.vue";
import Search from "../views/Search.vue";
import PostDetail from "../views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: "/all-job",
    redirect: '/jobs'
  },
  // not found
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
