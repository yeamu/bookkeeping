import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from './App'
import { history } from './shared/history'
import { routes } from './config/routes'

const router = createRouter({
    history,
    routes
  })
  
createApp(App).use(router).mount('#app')
