import Vue from 'vue'
import Todos from './Todos.vue'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(Todos) },
}).$mount('#app')
