import { createRouter, createWebHistory } from "vue-router";
import { BuildRoutes, RegisterRouter } from "./utils/router-utils";

RegisterRouter("login", {path: "login", component: () => import("./views/auth/login.vue") } )
RegisterRouter("login", {path: "register", component: () => import("./views/auth/register.vue") } )

const router = createRouter ( {
  history: createWebHistory(),
  routes: BuildRoutes()
})

export default router;
