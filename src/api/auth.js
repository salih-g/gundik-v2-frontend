import axios from './axios';

export default {
	login: async (room) => {
		const res = await axios().post('/v1/auth/login', {
			roomname: room.roomname,
			password: room.password,
		});

		return res.data;
	},
	register: async (room) => {
		const res = await axios().post('/v1/auth/register', {
			roomname: room.roomname,
			password: room.password,
		});

		return res.data;
	},
};
