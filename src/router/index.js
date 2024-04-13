import { createRouter, createWebHistory } from 'vue-router';
// import { checkAuth } from '../core/auth';

const index = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/HelloWorld.vue'),
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
    ]
});

index.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default index;
