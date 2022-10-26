import auth from '@/api/auth';
import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		room: JSON.parse(localStorage.getItem('room')),
		loginError: null,
		registerError: null,
	}),
	actions: {
		async login(roomData) {
			try {
				const room = await auth.login(roomData);

				this.room = room.data;
				localStorage.setItem('room', JSON.stringify(room));

				router.push('/').then(() => window.location.reload());
			} catch (error) {
				this.loginError = error.response?.data.message || error.message;
			}
		},

		async register(roomData) {
			try {
				const room = await auth.register(roomData);

				this.room = room.data;
				localStorage.setItem('room', JSON.stringify(room));

				router.push('/').finally(() => window.location.reload());
			} catch (error) {
				this.registerError = error.response?.data.message || error.message;
			}
		},
		logout() {
			this.room = null;
			localStorage.clear('room');
		},
	},
});
