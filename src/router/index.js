import Vue from 'vue'
import VueRouter from 'vue-router'
import Yonetim from '../views/Yonetim.vue'
import Market from '../views/Market.vue'
import Sepet from '../views/Sepet.vue'
import Cuzdan from '../components/Cuzdan.vue'
import Stok from '../components/Stok.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/Yonetim',
        name: 'Yonetim',
        component: Yonetim
    },
    {
        path: '/',
        name: 'Market',
        component: Market
    },
    {
        path: '/Sepet',
        name: 'Sepet',
        component: Sepet,
    },
    {
        path: '/Yonetim/Cuzdan',
        name: 'Cuzdan',
        component: Cuzdan,
    },
    {
        path: '/Yonetim/Stok',
        name: 'Stok',
        component: Stok,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router