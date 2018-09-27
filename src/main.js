import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './theme.scss'
import VueRouter from 'vue-router'
import History from './components/History'
import Statistics from './components/Statistics'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMaterial)

const routes = [
  { path: "/history", component: History },
  { path: "/statistics", component: Statistics }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
