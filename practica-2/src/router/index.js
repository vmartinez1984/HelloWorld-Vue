import { createWebHistory, createRouter } from "vue-router";
import Estados from '@/components/Estados'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/Estados',
        name: 'estados',
        component: Estados
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router