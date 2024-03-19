import {createRouter, createWebHistory} from "vue-router"
import home from '../views/home.vue'
import searchResultView from "@/views/searchResultView.vue"
import forum from "../views/forum.vue"
import Onas from "../views/oNas.vue"
import kontakt from "@/views/kontakt.vue"
import dlaLekarzy from "@/views/dlaLekarzy.vue"
import loginPage from "@/views/loginPage.vue"
import rejestracja from "@/views/rejestracja.vue"
import testView from "@/testScope/testView.vue"

const router = createRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: [
				{
                    path: "/",
                    name: "home",
                    component: home
				},
				{
					path: "/search/:specialization",
					name: searchResultView,
					component: searchResultView
				},
				{
					path: "/forum",
					name: forum,
					component: forum
				},
				{
					path: "/o-nas",
					name: Onas,
					component: Onas
				},
				{
					path: "/kontakt",
					name: kontakt,
					component: kontakt
				},
				{
					path: "/dla-lekarzy",
					name: dlaLekarzy,
					component: dlaLekarzy
				},
				{
					path: "/zaloguj",
					name: loginPage,
					component: loginPage
				},
				{
					path: "/rejestracja",
					name: rejestracja,
					component: rejestracja
				},
				{
					path: "/test",
					name: testView,
					component: testView
				}

		]
})

export default router