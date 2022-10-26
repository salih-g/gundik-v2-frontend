import axios from './axios';

export default {
	login: async (room) => {
		const res = await axios().post('/auth/login', {
			roomName: room.roomname,
			password: room.password,
		});

		return res.data;
	},
	register: async (room) => {
		const res = await axios().post('/auth/register', {
			roomName: room.roomname,
			password: room.password,
		});

		return res.data;
	},
};
