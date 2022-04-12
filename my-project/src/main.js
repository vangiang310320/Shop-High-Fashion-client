import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vuetify from '@/plugins/vuetify'
import routes from "@/routes";
import store from "./store";

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  vuetify
})
