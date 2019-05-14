import api from '../common/js/fly/api'

export default {
	apiGetUserInfo: params => api.get('xxxx', { params }),
	apiAddProduct: params => api.post('xxx', params),
	apiLogin: params => api.post('/erp_development/Authority/Logout', params)
};
