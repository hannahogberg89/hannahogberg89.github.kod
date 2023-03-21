import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createStore } from 'vuex'


import App from './App.vue'

import AddCvView from './views/AddCvView.vue'
import HomeView from './views/HomeView.vue'

const mutations = {
  increment(state) {
    state.counter++
  }
}
const state = {
  counter: 0
}

const store = createStore({
  mutations,
  state,
  strict: true
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AddCvView,
      path: '/addcv'
    },
    {
      component: HomeView,
      path: '/about'
    }
  ]
})

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
