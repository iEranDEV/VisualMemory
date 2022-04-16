import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/MainPage.vue"
import GamePage from "./components/GamePage.vue"
import LosePage from "./components/LosePage.vue"

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
    },
	{
		path: "/lose",
		name: "Lose",
		component: LosePage
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;