<template>
	<view class="content">
        <image class="logo" src="/static/logo.jpg"></image>
		<view>
            <text class="title" @click="goHome">{{title}}</text>
        </view>
	</view>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				title: 'go home'
			}
		},
		onLoad() {

		},
		mounted() {
		  //this.goHome()
		},
		computed: {
			...mapGetters('home', [
				'userInfo',
			]),
		},
		methods: {
			...mapActions('home', [
				'getUserInfo',
				'login'
			]),
			async goHome(){
				let params = {
					username: 'dcy',
					password: 'dcy@2018'
 				}
// 				let res = await this.$http.get(`/apiz/slogin/loggedin`, params);
// 				console.log(JSON.stringify(res));
				
//				使用插件市场，全局注册的api请求接口				
// 				let res1 = await this.$http.post(`/erp_development/Authority/Logout`, params);
//				console.log(JSON.stringify(res1));

//				使用fly插件，全局注册的api请求接口
//				let res2 = await this.$api.post(`/erp_development/Authority/Logout`, params);
// 				console.log(JSON.stringify(res2));	
				
//				使用vuex的action方式请求接口
 				await this.login(params);
			}
		}
	}
</script>

<style lang="less">
	.content {
		text-align: center;
		height: 400upx;
		.logo{
		    height: 200upx;
		    width: 200upx;
		    margin-top: 200upx;
		}
		.title {
			font-size: 36upx;
			color: #8f8f94;
		}
	}
</style>
