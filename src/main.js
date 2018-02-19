import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  // Add this
import router from './router'       // Add this

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
