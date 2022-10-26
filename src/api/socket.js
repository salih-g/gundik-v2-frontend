import io from 'socket.io-client';

import config from '@/config';

const room = JSON.parse(localStorage.getItem('room'));

export default () => {
	const socket = io(config.BACKEND_URL, {
		auth: { token: room?.token },
		transports: ['websocket'],
	});
	return {
		socket,
	};
};
