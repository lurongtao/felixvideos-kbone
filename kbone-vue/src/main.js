import Vue from 'vue'
import Todos from './Todos.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Todos),
})
