**使用说明**

1. 插件设置

>	common/js/request 下引入 fly插件
	import Fly from 'flyio/dist/npm/wx'
1. 插件使用

- 直接引用后使用

> 页面中使用

	<script>
		import api from '@/common/js/fly/api'

		export default {
			data() {
				return {}
			},
			onLoad(option) {
				this.test();
				this.test1);
			},
			methods: {
				test () {
					api.get('user/list').then((res)=>{
						console.log(JSON.stringify(res))
					})

					api.get('user/list', {status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					api.post('user', {id:1, status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.put('user/1', {status: 2}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					api.delete('user/1').then((res)=>{
						console.log(JSON.stringify(res))
					})
				},
				async test1() {
					let res = await this.api.get('user/list');
					console.log(JSON.stringify(res));
				}
			}
		}
	</script>

- 全局挂载后使用

> 在 main.js 添加以下代码

	import api from '@/common/js/fly/api'
	Vue.prototype.$api = api

> 页面中使用

	<script>
		export default {
			data() {
				return {}
			},
			onLoad(option) {
				this.test();
				this.test1);
			},
			methods: {
				test () {
					this.$api.get('user/list').then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$api.get('user/list', {status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$api.post('user', {id:1, status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$api.put('user/1', {status: 2}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$api.delete('user/1').then((res)=>{
						console.log(JSON.stringify(res))
					})
				},
				async test1() {
					let res = await this.$api.get('user/list');
					console.log(JSON.stringify(res));
				}
			}
		}
	</script>