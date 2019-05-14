import Fly from 'flyio/dist/npm/wx'

const request = new Fly()

const errorPrompt = (err) => {
	wx.showToast({
		title: err.message || 'fetch data error.',
		icon: 'none'
	})
}

request.interceptors.request.use((request) => {
	uni.showLoading({
		title: '加载中'
	});
	//wx.showNavigationBarLoading()
	return request
})

request.interceptors.response.use((response, promise) => {
	uni.hideLoading()
	//wx.hideNavigationBarLoading()
	//console.log("结果：" + JSON.stringify(response.data))
	return promise.resolve(response.data)
}, (err, promise) => {
	uni.hideLoading()
	//wx.hideNavigationBarLoading()
	errorPrompt(err)
	return promise.reject(err)
})

export default request
