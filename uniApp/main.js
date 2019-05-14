import Vue from 'vue'
import App from './App'
import store from '@/store'
//使用uni-app插件市场插件
import '@/common/js/http/api'
import http from '@/common/js/http/'
//使用fly.js插件
import api from '@/common/js/fly/api'

Vue.config.productionTip = false

Vue.prototype.$store = store

Vue.prototype.$http = http

Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
