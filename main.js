import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'


import App from './App.vue'

import AddCvView from './views/AddCvView.vue'
import HomeView from './views/HomeView.vue'


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

app.mount('#app')
