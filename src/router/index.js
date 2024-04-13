import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegistrationView.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/roadmap',
            name: 'roadmap',
            component: () => import('../views/RoadmapView.vue'),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/steps',
            name: 'steps',
            component: () => import('../views/StepsView.vue'),
            meta: {
                requiresAuth: false
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
