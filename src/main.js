import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/css/_global.scss"
Vue.config.productionTip = false

import VCalendar from "v-calendar"
Vue.use(VCalendar)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
