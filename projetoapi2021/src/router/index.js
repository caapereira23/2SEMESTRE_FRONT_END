import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Character.vue'
import Characters from '../views/Characters.vue'
import Episodes from '../views/Episodes.vue'
import Quotes from '../views/Quotes.vue'
import Deaths from '../views/Deaths.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/characters/:id',
    component: Character,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/characters',
    component: Characters,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/episodes',
    component: Episodes,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/quotes',
    component: Quotes,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/deaths',
    component: Deaths,
    beforeEnter: (to, from, next) => {
      if (!store.state.user) {
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/login',
    component: Login
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
