const ImageForm = () => import('./components/ImageForm/ImageForm.vue');
import Home from './components/home/Home.vue';

export const routes = [
    { path: '/', component: Home, name: 'Home', menu: true },
    { path: '/cadastro', component: ImageForm, name: 'Cadastro', menu: true },
    { path: '/editar/:id', component: ImageForm, name: 'Editar' },
    { path: '/:catchAll(.*)', redirect: '/' }
]