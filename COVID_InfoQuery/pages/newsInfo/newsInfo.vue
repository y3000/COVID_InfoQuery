<template>
	<web-view src="https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=18389426101373366790&toc_style_id=feeds_default"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: "",
			}
		},
		onLoad(e){
			console.log(e);
			this.url =decodeURIComponent(e.sourceUrl);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
