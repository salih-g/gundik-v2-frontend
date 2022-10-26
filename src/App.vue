<template>
	<router-view />
</template>

<script setup>
	import useSocketIO from './api/socket';

	const { socket } = useSocketIO();

	socket.emit('hello', 'abbas');
</script>
