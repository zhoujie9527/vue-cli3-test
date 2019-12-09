import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/System',
    name: 'System',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/System.vue')
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import(/* webpackChunkName: "about" */ '../components/Page2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
