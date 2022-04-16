import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/MainPage.vue"
import GamePage from "./components/GamePage.vue"

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage
    },
    {
        path: "/game",
        name: "Game",
        component: GamePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;