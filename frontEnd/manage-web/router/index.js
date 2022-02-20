import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user')
            },
            {
                path: '/tendency',
                name: 'tendency',
                component: () => import('../views/tendency')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes 
})

export default router