import {createApp, markRaw} from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import {createRouter, createWebHistory} from 'vue-router';
import LogIn from './components/login/LogIn.vue'
import LoggedIn from './views/logged-in/LoggedIn.vue'

const routes = [
    {path: '/', component: LogIn},
    {path: '/log-in', component: LogIn},
    {path: '/logged-in', component: LoggedIn},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})


const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

app.use(router)
app.use(ElementPlus)
app.use(pinia)

app.mount('#app')

