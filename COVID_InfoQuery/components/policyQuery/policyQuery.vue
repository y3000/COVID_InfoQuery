<template>
	<view @click="toPolicy()">
		<!-- 出行政策查询 -->
		出行政策查询
	</view>
</template>

<script>
	export default {
		name:"policyQuery",
		data() {
			return {
				
			};
		},
		methods:{
			toPolicy() {
				console.log("click")
				uni.navigateTo({
					url: "/pages/policyQuery/policyQuery",
				});
			}
		}
	}
</script>

<style>

</style>