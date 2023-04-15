import * as VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    name: "HomeLayout",
    path: "/",
    component: HomeView,
  },
];

const router = VueRouter.createRouter({
  // 使用 HTML5 的历史记录模式
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
