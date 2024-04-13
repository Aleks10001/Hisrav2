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

    ]
})

export default router;