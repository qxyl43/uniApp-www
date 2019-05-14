import types from './types';

export default {
	[types.SET_USER_INFO](state, payload) {
		state.userInfo = payload;
	},
	[types.USER_LOGIN](state, payload) {
		state.userInfo = {
			username: 'dcy',
			password: 'dcy@2018'
		};
	},
};
