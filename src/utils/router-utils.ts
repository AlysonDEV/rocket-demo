import { RouteRecordRaw } from "vue-router";

type templates = keyof typeof layouts;
export const layouts = {
    "main": { component: () => import("../layouts/main.vue"), path: "/", children: [] as RouteRecordRaw[] },
    "login": { component: () => import("../layouts/login.vue"), path: "/auth", children: [] as RouteRecordRaw[] },
    "404": { component: () => import("../layouts/404.vue"), path: "/:pathMatch(.*)*", children: [] as RouteRecordRaw[] }
}

export const RegisterRouter = (layout: templates, route: RouteRecordRaw) =>
    layouts[layout].children.push(route);

export const BuildRoutes = () => {
    const routes: RouteRecordRaw[] = [];
    (Object.keys(layouts) as templates[]).forEach(layout =>
        routes.push(layouts[layout])
    );
    return routes;
}
