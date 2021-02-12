import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import PickDish from "../views/PickDish.vue"
import Drinks from "../views/Drinks.vue"
import OrderHeader from "../views/OrderHeader.vue"
import Receipt from "../views/Receipt.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pick-dish",
    name: "pick-dish",
    component: PickDish,
  },
  {
    path: "/drink",
    name: "drink",
    component: Drinks,
  },
  {
    path: "/pick-date",
    name: "pick-date",
    component: OrderHeader,
  },
  {
    path: "/receipt",
    name: "receipt",
    component: Receipt,
  },
]

const router = new VueRouter({
  routes,
})
export default router
