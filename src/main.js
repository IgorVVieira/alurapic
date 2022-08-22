import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { transform } from './directives/Transform'
import { configure, defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import ptBr from '@vee-validate/i18n/dist/locale/pt_PT.json';

const router = createRouter({
  routes,
  history: createWebHistory(),
})

axios.defaults.baseURL = 'http://localhost:3000/'

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize('pt_BR', ptBr),
});

createApp(App)
  .directive('transform', transform)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app')
