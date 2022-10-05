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
		/* width: 100vw; */
		padding: 20rpx;
		box-sizing: border-box;
		font-weight: bold;
		box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
	}
	button{
		background-color: #007aff;
		border:1rpx solid #007aff;
		color:#fff;
		text-align: center;
		border-radius: 50rpx;
		margin: 40rpx 0 30rpx 0;
		padding: 10rpx 0;
		font-weight: normal;
	}
</style>