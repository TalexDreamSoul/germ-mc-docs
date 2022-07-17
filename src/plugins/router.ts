import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "首页",
        component: () => import('./../views/Index.vue')
    },
    {
        path: "/docs/:category/:index",
        name: "文档",
        component: () => import('./../views/docs/DocsContainer.vue')
    },
    {
        path: "/buy",
        name: "后台",
        component: () => import('./../views/Buy.vue')
    },
    {
        path: "/forum",
        name: "论坛",
        component: () => import('./../views/Forum.vue')
    },
    {
        path: "/about",
        name: "关于",
        component: () => import('./../views/About.vue')
    },
    {
        path: "/api",
        name: "JavaDoc",
        component: () => import('./../views/docs/JavaDocAPI.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from) => {

    if( to.fullPath === '/docs' ) {

        await router.push("/docs/序言/0")

    }

    document.title = `GermMC | ${String(to.name)}`

})

export default router;
