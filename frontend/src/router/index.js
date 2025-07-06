import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import { useAuthStore } from '../store/auth'

const routes = [
    { path: '/register', component: Register, meta: { guestOnly: true } },
    { path: '/', component: Login, meta: { guestOnly: true } },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true }}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    const authRequired = to.matched.some(route => route.meta.requiresAuth)
    const guestOnly = to.matched.some(route => route.meta.guestOnly)

    if (authRequired && !auth.isLoggedIn) {
        next('/')
    } else if (auth.isLoggedIn && guestOnly) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
