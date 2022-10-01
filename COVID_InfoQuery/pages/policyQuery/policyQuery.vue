<template>
	<view class="policy">
		<image src="https://huijia.juhekeji.com/img/newban3.png?v=1.1"></image>
		
		<view class="scrollMessage">
			<view class="scroll-content">
				<p>出行请提前了解当地防控要求并做好个人防护。</p>
				<p>出行请提前了解当地防控要求并做好个人防护。</p>
			</view>
		</view>
		
		<!--
		<div class="notice-con">
		    <div class="notice-main-con">
		        <div class="notice-main"> 	
		            <span class="notice"> 
		                <span>好不错</span>已占据第一名3天0时29分钟，不服来战！
		            </span>
		        </div>
		    </div>
		</div>	
		-->
	</view>
</template>

<script>
</script>

<style scoped>
	.policy{
		height: 100vh;
		background-color: #eee;
	}
	.policy image{
		width: 100vw;
	}
	.scrollMessage{
		width: 94%;
		background-color: #fff;
		height: 90rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		top: 0;
		white-space: nowrap;
		border-radius: 30rpx;
		position: relative;
		overflow:hidden;
	}
	.scroll-content{
		animation: 10s noticeScroll linear infinite;
		position: absolute;
		height: 90rpx;
		display: flex;
		align-items: center;
		top: 0;
		white-space: nowrap;
		left: 120rpx;
		
		
		color:#f04142;
		font-size: 10rpx;
	}
	.scroll-content>p:nth-child(1) {margin-right: 80rpx;}
	@-webkit-keyframes noticeScroll{0%{-webkit-transform:translate(0%);transform:translate(0%)}to{-webkit-transform:translate(-100%);transform:translate(-100%)}}@keyframes noticeScroll{0%{-webkit-transform:translate(0%);transform:translate(0%)}to{-webkit-transform:translate(-100%);transform:translate(-100%)}}
	
</style>