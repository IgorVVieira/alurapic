import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { transform } from './directives/Transform'
import { ValidationProvider } from 'vee-validate'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

axios.defaults.baseURL = 'http://localhost:3000/'

const app = createApp(App)
app.component('ValidationProvider', ValidationProvider)

app.directive('transform', transform)

app.use(VueAxios, axios)
  .use(router)
  .mount('#app')
