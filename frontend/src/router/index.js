import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/register', component: Register },
    { path: '/', component: Login },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    const authRequired = to.matched.some(route => route.meta.requiresAuth)

    if (authRequired && !token) {
        next('/')
    } else {
        next()
    }
})

export default router
