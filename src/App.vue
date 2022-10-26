<template>
	<router-view />
</template>

<script setup>
	import useSocketIO from './api/socket';

	const { socket } = useSocketIO();
	socket.on('welcome', () => {
		console.log('welcome');
	});
</script>
