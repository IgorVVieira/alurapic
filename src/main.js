import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { transform } from './directives/Transform'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

axios.defaults.baseURL = 'http://localhost:3000/'

createApp(App)
  .directive('transform', transform)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app')
