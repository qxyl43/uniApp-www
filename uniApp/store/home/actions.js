import api from '../../api/home';
import types from './types';

export default {
	// 此处名称跟api保持一致，去掉api即可
	async getUserInfo({ commit }, params) {
		const data = await api.apiGetUserInfo(params);
		if (data) commit(types.SET_USER_INFO, data);
		return data;
	},
	async login({ commit }, params) {
		const data = await api.apiLogin(params);
		if (data) commit(types.USER_LOGIN, data);
		return data;
	},
};
