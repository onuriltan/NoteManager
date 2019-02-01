import authService from '../../services/AuthService'
import router from '../../router'
import jwtDecode from 'jwt-decode'

const state = {
  isAuthenticated: false,
  sessionExpired: false
}

const AuthStore = {
  state,
  getters: {
    isAuthenticated () {
      return state.isAuthenticated
    }
  },
  actions: {
    logout (context) {
      context.commit('deleteToken')
    },
    login (context, credentials) {
      return new Promise(resolve => {
        authService.login(credentials)
          .then((response) => {
            context.commit('updateIsAuthenticated', response)
            return resolve(response)
          })
          .catch((response) => { return resolve(response) })
      })
    },
    confirmUser (context, confirmationToken) {
      return new Promise(resolve => {
        authService.confirmUser(confirmationToken)
          .then((response) => {
            context.commit('updateIsAuthenticated', response)
            return resolve(response)
          })
          .catch((response) => {
            return resolve(response)
          })
      })
    },
    register (context, credentials) {
      return new Promise(resolve => {
        authService.register(credentials)
          .then((response) => {
            return resolve(response)
          })
          .catch((response) => { return resolve(response) })
      })
    },
    loadUser (context) {
      context.commit('loadUser')
    },
    checkIsAuthenticated (context) {
      context.commit('checkIsAuthenticated')
    }
  },
  mutations: {
    deleteToken (state) {
      window.localStorage.removeItem('token')
      state.isAuthenticated = false
      router.push('/login')
    },
    checkIsAuthenticated (state) {
      let token = window.localStorage.getItem('token')
      let unixTimeStamp = new Date().getTime() / 1000
      let expiration = null
      if (token != null) {
        expiration = jwtDecode(token).exp
      }
      if (expiration != null && parseInt(expiration) - unixTimeStamp < 0) {
        state.sessionExpired = true
        setTimeout(() => {
          state.isAuthenticated = false
          router.push('/login')
          state.sessionExpired = false
        }, 2000)
      }
    },
    updateIsAuthenticated (state, response) {
      if (response.status === 200) {
        window.localStorage.setItem('token', response.data.token)
        state.isAuthenticated = true
        state.sessionExpired = false
        router.push('/')
      } else {
        setTimeout(() => { router.push('/login') }, 2000)
      }
    },
    loadUser (state) {
      let token = window.localStorage.getItem('token')
      let unixTimeStamp = new Date().getTime() / 1000
      let expiration = null
      if (token != null) {
        expiration = jwtDecode(token).exp
      }
      if (expiration != null && parseInt(expiration) - unixTimeStamp > 0) {
        state.isAuthenticated = true
        state.sessionExpired = false
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function (event) { // on Dom load check if user is already logged in
  if (window.localStorage.getItem('token')) {
    let token = window.localStorage.getItem('token')
    let unixTimeStamp = new Date().getTime() / 1000
    let expiration = null
    if (token != null) {
      expiration = jwtDecode(token).exp
    }
    if (expiration != null && parseInt(expiration) - unixTimeStamp > 0) {
      state.isAuthenticated = true
      state.sessionExpired = false
    }
  }
})

export default AuthStore
