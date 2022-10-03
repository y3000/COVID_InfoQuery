<template>
	<view class="title" @click="toPolicy">
		
		<view>疫情出行政策</view>
		<button >一键查询出行政策</button>
	</view>
</template>

<script>
	export default {
		name:"policyQuery",
		methods:{
			toPolicy() {
				uni.navigateTo({
					url: "/pages/policyQuery/policyQuery",
				});
			}
		}
	}
</script>

<style scoped>
	.title{
		width: 100vw;
		padding: 40rpx;
		box-sizing: border-box;
		color: #555;
		font-weight: bold;
	}
	button{
		background-color: #07c160;
		border:1rpx solid #07c160;
		color:#fff;
		text-align: center;
		border-radius: 50rpx;
		margin: 40rpx 0 30rpx 0;
		padding: 10rpx 0;
		font-weight: normal;
	}
</style>