<template>
	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<label for="my-drawer" class="btn btn-square drawer-button btn-link">
				<svg width="2em" height="2em" viewBox="0 0 48 48">
					<g
						fill="none"
						stroke="#535bf2"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="4"
					>
						<path d="M7.94971 11.9497H39.9497"></path>
						<path d="M7.94971 23.9497H39.9497"></path>
						<path d="M7.94971 35.9497H39.9497"></path>
					</g>
				</svg>
			</label>
		</div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay"></label>
			<ul
				class="menu p-4 overflow-y-auto w-1/3 bg-base-100 text-base-content justify-between"
			>
				<div>Abbas</div>
				<button class="btn btn-primary" @click="handleLogout()">Logout</button>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { useAuthStore } from '@/stores/auth.store';
	const authStore = useAuthStore();

	function handleLogout() {
		authStore.logout();
	}
</script>
