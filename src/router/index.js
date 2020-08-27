import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Skills from '../views/Skills.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/twitter',
    beforeEnter() {
      window.location = "https://twitter.com/yu0ki1SnoW0mAn3"
    }
  },
  {
    path: '/github',
    beforeEnter() {
      window.location = "https://github.com/yuki-snown"
    }
  },  
  {
    path: '*',
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
