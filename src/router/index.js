import HomeVue from "@/components/HomeVue.vue";
import ProjetsVue from "@/components/ProjetsVue.vue";
import LoginVue from "@/components/LoginVue.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomeVue ",
    path: "/",
    component: HomeVue,
  },
  {
    name: "ProjetsVue",
    path: "/projets",
    component: ProjetsVue,
  },
  {
    name: "LoginVue",
    path: "/login",
    component: LoginVue,
  },
  {
    name: "HelloWorld",
    path: "/Hello",
    component: HelloWorld,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
