**使用说明**

1. 插件设置

- 把 http 文件夹 copy 到项目 common/js/ 目录下

1. 插件使用

- 直接引用后使用

> 页面中使用

	<script>
		import http from '@/common/js/http/api'

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
					http.get('user/list').then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.get('user/list', {status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.post('user', {id:1, status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.put('user/1', {status: 2}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					http.delete('user/1').then((res)=>{
						console.log(JSON.stringify(res))
					})
				},
				async test1() {
					let res = await this.http.get('user/list');
					console.log(JSON.stringify(res));
				}
			}
		}
	</script>

- 全局挂载后使用

> 在 main.js 添加以下代码
	import '@/common/js/http/api'
	import http from '@/common/js/http/'
	Vue.prototype.$http = http

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
					this.$http.get('user/list').then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.get('user/list', {status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.post('user', {id:1, status: 1}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.put('user/1', {status: 2}).then((res)=>{
						console.log(JSON.stringify(res))
					})

					this.$http.delete('user/1').then((res)=>{
						console.log(JSON.stringify(res))
					})
				},
				async test1() {
					let res = await this.$http.get('user/list');
					console.log(JSON.stringify(res));
				}
			}
		}
	</script>