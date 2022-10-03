<template>
	<view class="title" @click="toPolicy">
		疫情出行政策
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
		
	}
</style>