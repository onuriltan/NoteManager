import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuthStore from './store/modules/AuthStore'
import Store from './store/index'

const Login = () => import('./views/Login.vue')

Vue.use(Router)

async function requireAuth (to, from, next) {
  function proceed () {
    if (AuthStore.getters.isAuthenticated()) {
      next()
    } else {
      next('/login')
    }
  }
  await Store.dispatch('loadUser')
  proceed()
}
async function alreadyLoggedIn (to, from, next) {
  function proceed () {
    if (!AuthStore.getters.isAuthenticated()) {
      next()
    } else {
      next('/')
    }
  }
  await Store.dispatch('loadUser')
  proceed()
}

export default new Router({
  routes: [
    {
      path: '*', component: Home, beforeEnter: requireAuth
    },
    {
      path: '/', name: 'home', component: Home, beforeEnter: requireAuth
    },
    {
      path: '/login', name: 'login', component: Login, beforeEnter: alreadyLoggedIn
    }
  ]
})
