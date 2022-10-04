<template>
	<view class="content">
		<view class="title">
			<span>疫情热点</span>
			<span>更多<img src="../../static/icon/more.png" alt="">
			</span>
		</view>
		<view class="news-item" v-for="(item,index) in newsList" :key="item.id" @click="toDetail(item.sourceUrl)">
			<view class="tag">
				{{item.pubDateStr}}
				<!-- 最新的 -->
			</view>
			<view class="news-title">
				{{item.title}}
			</view>
			<img src="../../static/icon/more.png" alt="">
		</view>
	</view>
</template>

<script>
	export default {
		name:"news",
		data() {
			return {
				
			};
		},
		props:{
			newsList:{
				type: Array,
				default: function () {
				return []
			  },
			}
		},
		methods:{
			toDetail(sourceUrl){
				console.log(sourceUrl);
				uni.navigateTo({
					url:"/pages/newsInfo/newsInfo?sourceUrl="+sourceUrl,
				})
			}
		}
	}
</script>

<style>
	.content{
		height: auto;
	}
	.title{
		position: relative;
		height: 40rpx;
		padding: 20rpx 20rpx;
		line-height: 40rpx;
		font-size: 32rpx;
	}
	
	.title span:first-child{
		font-size: 40rpx;
		font-weight: 700;
	}
	.title span:last-child{
		position: absolute;
		right: 30rpx;
		color: #afafaf;
	}
	.news-item{
		position: relative;
		height: 100rpx;
		line-height: 100rpx;
		/* width: 100%; */
		background-color: #fff;
		padding: 0 20rpx;
	}
	.tag{
		display: inline-block;
		font-size: 28rpx;
		width: 120rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		border-radius: 10rpx;
		color: white;
		margin-right: 20rpx;
		background-color: #F74C31;
	}
	.news-title{
		display: inline-block;
		width: 80%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		vertical-align: top;
	}
	.news-item img, .title img{
		width: 30rpx;
		height: 30rpx;
	}
	.news-item img{
		position: absolute;
		right: 30rpx;
		top: 40rpx;
	}
	/*#007aff  */
</style>