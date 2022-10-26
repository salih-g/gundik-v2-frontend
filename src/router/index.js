import { storeToRefs } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores/auth.store';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/Register.vue'),
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	name: 'notFound',
	// 	component: () => import('../views/NotFound.vue'),
	// },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, _, next) => {
	const authStore = useAuthStore();
	const { room } = storeToRefs(authStore);

	if (to.name === 'home' && !room.value) {
		next({ name: 'login' });
	} else if ((to.name === 'login' || to.name === 'register') && room.value) {
		next({ name: 'home' });
	} else next();
});

export default router;
