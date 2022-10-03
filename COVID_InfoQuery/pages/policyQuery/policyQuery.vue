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
				showCityTo:"请选择目的地"
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
					console.log(msg)
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
</style>