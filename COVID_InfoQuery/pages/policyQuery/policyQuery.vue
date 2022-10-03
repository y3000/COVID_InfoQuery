<template>
	<view class="policy">
		<image src="https://huijia.juhekeji.com/img/newban3.png?v=1.1"></image>
		
		<view class="scrollMessage">
			<view class="scroll-content">
				<p>出行请提前了解当地防控要求并做好个人防护。</p>
				<p>出行请提前了解当地防控要求并做好个人防护。</p>
			</view>
		</view>
		
		<view class="select-city">
			<h2>疫情出行政策</h2>
			<view class="uni-list ">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode='multiSelector' @columnchange='columnChangeFrom' @change="bindPickerChangeFrom"  :range="cityListFrom" range-key="text">
							<view class="uni-input from" @click="tapFrom">
								<text>出发地</text>
								<view>{{showCityFrom}}</view>
							</view>
						</picker>
					</view>
				</view>
			</view>
			
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode='multiSelector' @columnchange='columnChangeTo' @change="bindPickerChangeTo"  :range="cityListTo" range-key="text">
							<view class="uni-input from" @click="tapTo">
								<text>到达地</text>
								<view>{{showCityTo}}</view>
							</view>
						</picker>
					</view>
				</view>
			</view>
			
			<button type="primary" @click="getResult">查看出行政策</button>
		
		</view>
			
		<view class="info" v-if="res">
			<view class="city-from">
				<view class="header">
					<svg t="1664795357736" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1414" width="200" height="200"><path d="M817.339732 546.536584c29.074176-50.315966 43.836391-107.682511 43.836391-166.089759 0-190.028984-156.366304-344.617805-348.512509-344.617805-192.234209 0-348.579023 154.588821-348.579023 344.617805 0 58.048067 13.546527 115.666346 43.407626 165.138084C275.457144 658.183384 509.210979 985.566666 509.210979 985.566666S748.894873 664.984277 817.339732 546.536584zM249.83151 532.303418c-28.404933-45.222971-41.868573-98.236372-41.868573-151.856593 0-166.091806 136.718825-301.231669 304.700677-301.231669 167.933757 0 304.634162 135.139863 304.634162 301.231669 0 51.841715-13.601786 102.568027-39.382962 147.256832C718.195687 631.215172 511.223822 905.214616 511.223822 905.214616S309.389978 627.123994 249.83151 532.303418z" p-id="1415" fill="#d81e06"></path><path d="M512.663614 194.994066c-88.360444 0-160.224168 71.013357-160.224168 158.399613 0 87.34737 71.863724 158.400636 160.224168 158.400636 88.314395 0 160.180166-71.053266 160.180166-158.400636C672.844803 266.008446 600.979032 194.994066 512.663614 194.994066M512.663614 468.408179c-64.193021 0-116.342752-51.585889-116.342752-115.0145 0-63.427588 52.14973-115.015523 116.342752-115.015523 64.105017 0 116.296703 51.587935 116.296703 115.015523C628.96134 416.823314 576.768631 468.408179 512.663614 468.408179" p-id="1416" fill="#d81e06"></path></svg>
					<text>{{res.from_info.city_name}}</text>
				</view>
				
				<view class="in">
					<view class="title">外出政策</view>
					<view class="policy-content">{{res.from_info.out_desc}}</view>
				</view>
				
				<view class="out">
					<view class="title">进入政策</view>
					<view class="policy-content">{{res.from_info.low_in_desc}}</view>
				</view>
			</view>
			
			<view class="city-to">
				<view class="header">
					<svg t="1664795357736" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1414" width="200" height="200"><path d="M817.339732 546.536584c29.074176-50.315966 43.836391-107.682511 43.836391-166.089759 0-190.028984-156.366304-344.617805-348.512509-344.617805-192.234209 0-348.579023 154.588821-348.579023 344.617805 0 58.048067 13.546527 115.666346 43.407626 165.138084C275.457144 658.183384 509.210979 985.566666 509.210979 985.566666S748.894873 664.984277 817.339732 546.536584zM249.83151 532.303418c-28.404933-45.222971-41.868573-98.236372-41.868573-151.856593 0-166.091806 136.718825-301.231669 304.700677-301.231669 167.933757 0 304.634162 135.139863 304.634162 301.231669 0 51.841715-13.601786 102.568027-39.382962 147.256832C718.195687 631.215172 511.223822 905.214616 511.223822 905.214616S309.389978 627.123994 249.83151 532.303418z" p-id="1415" fill="#d81e06"></path><path d="M512.663614 194.994066c-88.360444 0-160.224168 71.013357-160.224168 158.399613 0 87.34737 71.863724 158.400636 160.224168 158.400636 88.314395 0 160.180166-71.053266 160.180166-158.400636C672.844803 266.008446 600.979032 194.994066 512.663614 194.994066M512.663614 468.408179c-64.193021 0-116.342752-51.585889-116.342752-115.0145 0-63.427588 52.14973-115.015523 116.342752-115.015523 64.105017 0 116.296703 51.587935 116.296703 115.015523C628.96134 416.823314 576.768631 468.408179 512.663614 468.408179" p-id="1416" fill="#d81e06"></path></svg>
					<text>{{res.to_info.city_name}}</text>
				</view>
				
				<view class="in">
					<view class="title">外出政策</view>
					<view class="policy-content">{{res.to_info.out_desc}}</view>
				</view>
				
				<view class="out">
					<view class="title">进入政策</view>
					<view class="policy-content">{{res.to_info.low_in_desc}}</view>
				</view>
			</view>
			
			<view class="line">	
			  以上政策整理自当地政府等公开发布的信息，如有更新或错漏，
			  请以最新政策为准，建议在出行前咨询当地防疫部门、机场、火车站等
			</view>
			
			<view class="code">
				<view class="title">请准备好进出凭证</view>
				<view class="in-city">
					<view class="left"></view>
					<view class="right"></view>
				</view>
				<view class="out-city"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import citys from "./../../utils/data/cityId.js"
	import axios from "axios"
	export default {
		name:"policyQuery",
		mounted(){
			//初始保存第一列数据
			// console.log("mounted")
			this.cityListFrom = [[],[]]
			this.cityListTo = [[],[]]
			citys.forEach(item=>{
				this.cityListFrom[0].push(item.text)
				this.cityListTo[0].push(item.text)
			})
			//初始化第二列数据
			citys[0].children.forEach(item=>{
				this.cityListFrom[1].push(item.text)
				this.cityListTo[1].push(item.text)
			})
		},
		data() {
			return {
				title: 'picker',
				index1: "0",
				index2: "0",
				index3: "0",
				index4: "0",
				cityListFrom:[],
				cityListTo:[],
				showCityFrom:"请选择出发地",
				showCityTo:"请选择目的地",
				res:null
			}
		},
		methods:{
			bindPickerChangeFrom: function(e) {
				let index1 = e.detail.value[0]
				let index2 = e.detail.value[1]
				//选择1和2分类
				if(index1!=undefined) {
					this.index1 = index1
				}
				if(index2!=undefined) {
					this.index2 = index2
				}
			},
			bindPickerChangeTo:function(e){
				let index3 = e.detail.value[0]
				let index4 = e.detail.value[1]
				//选择1和2分类
				if(index3!=undefined) {
					this.index3 = index3
				}
				if(index4!=undefined) {
					this.index4 = index4
				}
			},
			columnChangeFrom:function(e){
				console.log(e)
				let column = e.detail.column
				//第二个数据改变
				if(column==1) {
					this.index2 = e.detail.value
					this.showCityFrom = this.cityListFrom[1][this.index2]
				}else {
					//第一个数据改变，第二个数组全部修改，并初始化指向了第一个
					this.cityListFrom[1] = []
					citys[e.detail.value].children.forEach(item=>{
						this.cityListFrom[1].push(item.text)
					})
					this.index2 = 0
					
					this.showCityFrom = this.cityListFrom[1][this.index2]
				}
			},
			columnChangeTo:function(e){
				console.log(e)
				let column = e.detail.column
				//第二个数据改变
				if(column==1) {
					this.index4 = e.detail.value
					this.showCityTo = this.cityListTo[1][this.index4]
				}else {
					//第一个数据改变，第二个数组全部修改，并初始化指向了第一个
					this.cityListTo[1] = []
					citys[e.detail.value].children.forEach(item=>{
						this.cityListTo[1].push(item.text)
					})
					if(this.cityListTo[1].length===1) this.index4 = 0
					
					this.showCityTo = this.cityListTo[1][this.index4]
				}
			},
			getResult:function(e){
				//两个城市id 
				let idFrom,idTo
				idFrom = citys[this.index1].children[this.index2].value
				idTo = citys[this.index3].children[this.index4].value
				
				uni.request({
				  method: 'get',
				  url: '/api/springTravel/query',
				  data: {
				    key: '2ccaea817d00de15c4dbfdb3b9d2d302',
				    from: '10191',
					to:"10349"
				  }
				}).then(msg=>{
					this.res = msg[1].data.result
					console.log(this.res)
				});
			},
			tapFrom:function(e){
				this.showCityFrom = this.cityListFrom[1][0]
			},
			tapTo:function(e){
				this.showCityTo = this.cityListTo[1][0]
			}
		}
	}
</script>

<style scoped>
	.policy{
		height: 100vh;
		background-color: #fff;
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
	.select-city{
		padding: 40rpx;
		box-sizing: border-box;
	}
	.select-city h2{
		font-size: 45rpx;
		font-weight: bold;
		color: #000;
		margin-bottom: 50rpx;
	}
	.uni-input{
		display: flex;
		align-items: center;
		padding: 40rpx 0;
		
	}
	.from{
		border-bottom: 1rpx solid #ccc;
	}
	.uni-input text{
		font-size: 34rpx;
		margin-right: 100rpx;
	}
	.uni-input>view{
		font-size: 34rpx;
		color:#ccc;
	}
	.info{
		padding: 40rpx;
	}
	.header{
		display: flex;
		align-items: center;
	}
	svg{
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
	}
	.header text{
		font-weight: 600;
	}
	.in .title ,.out .title{
		margin: 20rpx 0;
		font-weight: 600;
		font-size: 38rpx;
	}
	.policy-content{
		color:#555;
		font-size: 31rpx;
	}
	.line{
		border-top: 1rpx solid #ccc;
		color:#ccc;
		font-size: 30rpx;
		padding-top: 30rpx;
		margin-top: 40rpx;
	}
</style>