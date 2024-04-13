import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/roadmap',
            name: 'roadmap',
            component: () => import('../views/RoadmapView.vue')
        },
        {
            path: '/steps',
            name: 'steps',
            component: () => import('../views/StepsView.vue')
        },

    ]
})

export default router;