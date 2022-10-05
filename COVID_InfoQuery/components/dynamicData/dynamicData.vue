<template>
	<view class="all-container">
		<v-tabs v-model="activeTab" :scroll="false" :tabs="tabs" activeColor="#2979ff" @change="changeTab"></v-tabs>
		<!-- 国内外疫情数据 -->
		<!-- 国内 -->
		<view class="title in">
			<span>国内疫情</span>
		</view>
		<view class="domestic">
			<view class="case-num">
				<view class="num">
					<ul class="count">
						<li>
							<view class="create-item">
								<span>现有确诊</span>
								<view class="strong" style="color: rgb(247, 76, 49)">{{_comma(caseNumData.currentConfirmedCount)}}</view>
								<view class="create-count">
									较昨日
									<em style="color: rgb(247, 76, 49)">{{caseNumData.currentConfirmedIncr > 0 ? '+'+_comma(caseNumData.currentConfirmedIncr) : _comma(caseNumData.currentConfirmedIncr)}}</em>
								</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>现有无症状</span>
								<view class="strong" style="color: rgb(247, 130, 7)">{{_comma(caseNumData.seriousCount)}}</view>
								<view class="create-count">
									较昨日
									<em style="color: rgb(247, 130, 7)">{{caseNumData.seriousIncr > 0 ? '+'+_comma(caseNumData.seriousIncr) : _comma(caseNumData.seriousIncr)}}</em>
								</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计境外</span>
								<view class="strong" style="color: rgb(162, 90, 78)">{{_comma(caseNumData.suspectedCount)}}</view>
								<view class="create-count">
									较昨日
									<em style="color: rgb(162, 90, 78)">{{caseNumData.suspectedIncr > 0 ? '+'+_comma(caseNumData.suspectedIncr) : _comma(caseNumData.suspectedIncr)}}</em>
								</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计确诊</span>
								<view class="strong" style="color: rgb(174, 33, 44)">{{_comma(caseNumData.confirmedCount)}}</view>
								<view class="create-count">
									较昨日
									<em style="color: rgb(174, 33, 44)">{{caseNumData.confirmedIncr > 0 ? '+'+_comma(caseNumData.confirmedIncr) : _comma(caseNumData.confirmedIncr)}}</em>
								</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计死亡</span>
								<view class="strong" style="color: rgb(93, 112, 146)">{{_comma(caseNumData.deadCount)}}</view>
								<view class="create-count">
									较昨日
									<em style="color: rgb(93, 112, 146)">{{caseNumData.deadIncr > 0 ? '+'+_comma(caseNumData.deadIncr) : _comma(caseNumData.deadIncr)}}</em>
								</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计治愈</span>
								<view class="strong" style="color: rgb(40, 183, 163)">{{_comma(caseNumData.curedCount)}}</view>
								<view class="create-count">
									较昨日
									<em style="color: rgb(40, 183, 163)">{{caseNumData.curedIncr > 0 ? '+'+_comma(caseNumData.curedIncr) : _comma(caseNumData.curedIncr)}}</em>
								</view>
							</view>
						</li>
					</ul>
				</view>
				<!-- 数据最后更新时间  -->
				<view class="time">
					<view class="detail">
						<span>数据截至 {{formatData(caseNumData.modifyTime)}} 更新</span>
					</view>
				</view>
			</view>
			<!-- 地图 -->
			<view class="map">
				<Map :allCitys="allCitys"></Map>
			</view>
			
			<view class="title">
				<span>全国疫情趋势图</span>
			</view>
			<view class="ui-virus-select">
				<view>
					<swiper class="ui-virusinfos" @change="swiperChange" :current="current">
						<swiper-item class="ui-virusinfo-item" v-for="(item,index) in trend" :key="index">
							<chinaDayAdd :series=item :categories="categories"></chinaDayAdd>
						</swiper-item>
					</swiper>
				</view>
				<view class="ui-virus-name-list">
					<view class="ui-virus-name-item" v-for="(item,index) in virusTypes" :key="index" :class="{active:current==index}" :data-current="index" @tap="tabChange">{{item.virustype}}</view>
				</view>
			</view>
			<view class="title out">
				<span>境外输入确诊省市TOP10</span>
			</view>
			<view class="jwsr-top">
				<jwsrTop :jwsr="jwsr" :areas="areas"></jwsrTop>
			</view>
		</view>
		<!-- 国外 -->
		<view class="title out">
			<span>国外疫情</span>
		</view>
		<view class="domestic">
			<view class="case-num">
				<view class="num">
					<ul class="count">
						<li>
							<view class="create-item">
								<span>新增确诊</span>
								<view class="strong" style="color: rgb(247, 76, 49)">{{_comma(abroadNumData.confirmedIncr)}}</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>新增死亡</span>
								<view class="strong" style="color: rgb(93, 112, 146)">{{_comma(abroadNumData.deadIncr)}}</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>现有确诊</span>
								<view class="strong" style="color: rgb(162, 90, 78)">{{_comma(abroadNumData.currentConfirmedCount)}}</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计确诊</span>
								<view class="strong" style="color: rgb(174, 33, 44)">{{_comma(abroadNumData.confirmedCount)}}</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计死亡</span>
								<view class="strong" style="color: rgb(35, 49, 76)">{{_comma(abroadNumData.deadCount)}}</view>
							</view>
						</li>
						<li>
							<view class="create-item">
								<span>累计治愈</span>
								<view class="strong" style="color: rgb(40, 183, 163)">{{_comma(abroadNumData.curedCount)}}</view>
							</view>
						</li>
					</ul>
				</view>
				<!-- 数据最后更新时间  -->
				<view class="time">
					<view class="detail">
						<span>数据截至 {{formatData(caseNumData.modifyTime)}} 更新</span>
					</view>
				</view>
				
				<view class="select">
					按国家查看
				</view>
				<view class="table">
					<uni-table stripe emptyText="暂无更多数据">
						<!-- 表头行 -->
						<uni-tr>
							<uni-th align="center" width="50" style="background-color: rgb(245,245,245);">地区</uni-th>
							<uni-th align="center" width="80" sortable @sort-change="sort_change_1" class="th" style="color: rgb(247, 76, 49);background-color: rgb(253, 241, 237) ">现存确诊</uni-th>
							<uni-th align="center" width="80" sortable @sort-change="sort_change_2" class="th"  style="color: rgb(174, 33, 44);background-color: rgb(248, 225, 225)">累计确诊</uni-th>
							<uni-th align="center" width="80" sortable @sort-change="sort_change_3" class="th" style="color: rgb(40, 183, 163);background-color: rgb(227, 252, 246)">治愈</uni-th>
							<uni-th align="center" width="80" sortable @sort-change="sort_change_4" class="th" style="color: rgb(93, 112, 146);background-color:rgb(219, 230, 248)">死亡</uni-th>
						</uni-tr>
						<!-- 表格数据行 -->
						<uni-tr v-for="(item,index) in worldData" :key="index" class="table-td">
							<uni-td align="center" class="td">{{item.provinceName}}</uni-td>
							<uni-td align="center" class="td">{{item.currentConfirmedCount}}</uni-td>
							<uni-td align="center" class="td">{{item.confirmedCount}}</uni-td>
							<uni-td align="center" class="td">{{item.curedCount}}</uni-td>
							<uni-td align="center" class="td">{{item.deadCount}}</uni-td>
						</uni-tr>
					
					</uni-table>
					<view class="all">
						<uni-load-more iconType="circle" :status="status" :contentText="contentText" @clickLoadMore="clickLoadMore"> </uni-load-more>
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import Map from "../dynamicData/echarts/map.vue"
	import chinaDayAdd from "../dynamicData/echarts/chinaDayAdd.vue"
	import jwsrTop from "../dynamicData/echarts/jwsrTop.vue"
	export default {
		name:"dynamicData",
		data() {
			return {
				activeTab: 0,
				tabs: ['国内疫情', '国外疫情'],
				caseNumData: {
				  modifyTime: "", //更新时间
				  currentConfirmedCount: "", // 现存确诊人数
				  confirmedCount: "", // 累计确诊人数
				  suspectedCount: "", // 累计境外输入人数
				  curedCount: "", // 累计治愈人数
				  deadCount: "", // 	累计死亡人数
				  seriousCount: "", // 现存无症状人数
				  suspectedIncr: "", // 新增境外输入人数
				  currentConfirmedIncr: "", // 相比昨天现存确诊人数
				  confirmedIncr: "", // 相比昨天累计确诊人数
				  curedIncr: "", // 相比昨天新增治愈人数
				  deadIncr: "", // 相比昨天新增死亡人数
				  seriousIncr: "", //相比昨天现存无症状人数
				},
				abroadNumData: {
				  currentConfirmedCount: "", // 现存确诊人数
				  confirmedCount: "", // 累计确诊人数
				  curedCount: "", // 累计治愈人数
				  deadCount: "", // 	累计死亡人数
				  seriousCount: "", // 现存无症状人数
				  currentConfirmedIncr: "", // 相比昨天现存确诊人数
				  confirmedIncr: "", // 相比昨天累计确诊人数
				  curedIncr: "", // 相比昨天新增治愈人数
				  deadIncr: "", // 相比昨天新增死亡人数
				  seriousIncr: "", //相比昨天现存无症状人数
				},
				allCitys:[],//中国地图城市
				categories:[],//趋势图日期
				trend:[],//趋势图数据
				visible: false,
				current:0,
				worldData:[],
				worldDataAll:[],
				status: "more"	,
				contentText: {
					contentdown: '显示全部',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				virusTypes:[{
				virustype:"全国疫情新增趋势"
				},{
					virustype:"全国累计治愈死亡"
				},{
					virustype:"治愈率死亡率"
				}],
				jwsr:[],//境外输入
				areas:[],//境外地区
				
			};
		},
		components: {
			Map,
			chinaDayAdd,
			jwsrTop
		},
		mounted() {
			uni.request({
				url: "http://api.tianapi.com/ncov/index",
				data: {
					key: "9a064807767ddfbdaa5d343e223e983a"
				},
			}).then((res) => {
				// console.log(res[1]);
				if (res[1].statusCode === 200) {
					// console.log(22);
				  let desc = res[1].data.newslist[0].desc;
				  //疫情病例具体数目
				  this.caseNumData.modifyTime = desc.modifyTime;
				  this.caseNumData.currentConfirmedCount = desc.currentConfirmedCount;
				  this.caseNumData.confirmedCount = desc.confirmedCount;
				  this.caseNumData.suspectedCount = desc.suspectedCount;
				  this.caseNumData.curedCount = desc.curedCount;
				  this.caseNumData.deadCount = desc.deadCount;
				  this.caseNumData.seriousCount = desc.seriousCount;
				  this.caseNumData.currentConfirmedIncr = desc.currentConfirmedIncr;
				  this.caseNumData.confirmedIncr = desc.confirmedIncr;
				  this.caseNumData.suspectedIncr = desc.suspectedIncr;
				  this.caseNumData.curedIncr = desc.curedIncr;
				  this.caseNumData.deadIncr = desc.deadIncr;
				  this.caseNumData.seriousIncr = desc.seriousIncr;
				  
				  let abroad = res[1].data.newslist[0].desc.foreignStatistics;
				  //国外疫情病例具体数目
				  this.abroadNumData.currentConfirmedCount = abroad.currentConfirmedCount;
				  this.abroadNumData.confirmedCount = abroad.confirmedCount;
				  this.abroadNumData.curedCount = abroad.curedCount;
				  this.abroadNumData.deadCount = abroad.deadCount;
				  this.abroadNumData.currentConfirmedIncr = abroad.currentConfirmedIncr;
				  this.abroadNumData.confirmedIncr = abroad.confirmedIncr;
				  this.abroadNumData.curedIncr = abroad.curedIncr;
				  this.abroadNumData.deadIncr = abroad.deadIncr;
				  
				}
				
			}).catch((error) => {
				console.log(error);
			})
			
			uni.request({
				url:"http://route.showapi.com/2217-2",
				data: {
					showapi_appid: 1184469,
					showapi_sign: "31fab5eed9884f5ba6c9504c370033f9"
				},
			}).then((res) => {
				// console.log(res[1]);
				if (res[1].statusCode === 200) {
					let todayDetailList = res[1].data.showapi_res_body.todayDetailList;
					for (let i = 0; i < todayDetailList.length; i++) {
						let temp = {
							name: todayDetailList[i].provinceName,
							value: todayDetailList[i].currentConfirmedNum,
						};
						this.allCitys.push(temp);
					}
				}
			}).catch((error) => {
				console.log(error);
			})
			// 趋势图
			uni.request({
				url:"/g2/getOnsInfo",
				data: {
					name: "disease_other"
				}
			}).then((res)=>{
				// console.log(res[1]);
				var data = eval('('+res[1].data.data+')');
				// console.log(data);
				if (res[1].statusCode === 200) {
					let chinaDayAddList = data.chinaDayAddList;
					let chinaDayList = data.chinaDayList;
					let series = [];
					let confirm = [],dead = [],deadRate = [],heal = [],healRate = [],importedCase = [];
					for (let i = 0; i < chinaDayAddList.length; i++) {
						this.categories.push(chinaDayAddList[i].date);//趋势图日期
						confirm.push(chinaDayAddList[i].confirm);//新增
						importedCase.push(chinaDayAddList[i].importedCase);//新增境外
					}
					series.push({name:"新增确诊",data:confirm})
					series.push({name:"新增境外",data:importedCase})
					this.trend.push(series);
					for (let i = 0; i < chinaDayList.length; i++) {
						dead.push(chinaDayList[i].dead);//死亡
						deadRate.push(chinaDayList[i].deadRate);//死亡率
						heal.push(chinaDayList[i].heal);//治愈
						healRate.push(chinaDayList[i].healRate);//治愈率
					}
					series = [];
					series.push({name:"死亡",data:dead})
					series.push({name:"治愈",data:heal})
					this.trend.push(series);
					series = [];
					series.push({name:"死亡率",data:deadRate})
					series.push({name:"治愈率",data:healRate})
					this.trend.push(series);
					// console.log(this.trend);
				}
				// dataResult = JSON.parse(data);
			})
			uni.request({
				url:"http://api.tianapi.com/ncovabroad/index",
				data:{
					key: "5dc22657a9bfb4b84957333fb7779e2e"
				}
			}).then((res)=>{
				console.log("table",res[1]);
				res = res[1].data;
				if(res.code===200){
					this.worldDataAll = res.newslist;
					this.worldData = this.worldDataAll.slice(0,20)
					}
				})
			// 境外输入前十
			uni.request({
				url:"/jwsr",
			}).then((res)=>{
				// console.log(res[1]);
				if (res[1].statusCode === 200) {
					let jwsrTop = res[1].data.data.jwsrTop;
					let data = [];
					for (let i = 0; i < jwsrTop.length; i++) {
						data.push(jwsrTop[i].jwsrNum);
						this.areas.push(jwsrTop[i].name);
					}
					this.jwsr.push({name:"境外输入",data: data});
				}
			})
			
		},
		methods:{
			// 国内外tab
			changeTab(index) {
			  console.log('当前选中的项：' + index);
			  if(index==0){
				this.pageScroll('.in');
			  } else {
				this.pageScroll('.out');
			  }
			},
			pageScroll(dom) {
				// 先获取目标dom的实例信息
				// data即为实例信息, data.top, data.left, data.right, data.bottom即为dom的对应坐标
				uni.createSelectorQuery().select(dom).boundingClientRect(data => { 
					// 调用页面滚动的api
					uni.pageScrollTo({
						duration: 300, // 滚动动画过渡时间
						scrollTop: data.top, // 滚动的值
					})
				}).exec();
			},
			formatData(time) {
				var date = new Date(time);
				var YY = date.getFullYear() + "-";
				var MM = (date.getMonth() + 1 < 10 ?
					"0" + (date.getMonth() + 1) :
					date.getMonth() + 1) + "-";
				var DD = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
					"   ";
				var hh = (date.getHours() < 10 ?
					"0" + date.getHours() :
					date.getHours()) + ":";
				var mm = date.getMinutes() < 10 ?
					"0" + date.getMinutes() :
					date.getMinutes();
				return YY + MM + DD + hh + mm;
			},
			_comma(number) {
				number = String(number);
				let s = number.replace(/(\d+)(\d{3})$/, "$1,$2");
				const reg = /(\d+)(\d{3},)/;
				while (reg.test(s)) {
					s = s.replace(reg, "$1,$2");
				}
				return s;
			},
			sort_change_1(e){
				if(e.order==='ascending'){
					this.worldData = this.worldData.sort(function(a,b){
						return a.currentConfirmedCount-b.currentConfirmedCount;
					})
				}else if(e.order==='descending'){
					this.worldData = this.worldData.sort(function(a,b){
						return b.currentConfirmedCount-a.currentConfirmedCount;
					})
					
				}
			},
			sort_change_2(e){
				if(e.order==='ascending'){
					this.worldData = this.worldData.sort(function(a,b){
						return a.confirmedCount - b.confirmedCount;
					})
				}else if(e.order==='descending'){
					this.worldData = this.worldData.sort(function(a,b){
						return b.confirmedCount - a.confirmedCount;
					})
					
				}
			},
			sort_change_3(e){
				if(e.order==='ascending'){
					this.worldData = this.worldData.sort(function(a,b){
						return a.curedCount - b.curedCount;
					})
				}else if(e.order==='descending'){
					this.worldData = this.worldData.sort(function(a,b){
						return b.curedCount - a.curedCount;
					})
					
				}
			},
			sort_change_4(e){
				if(e.order==='ascending'){
					this.worldData = this.worldData.sort(function(a,b){
						return a.deadCount - b.deadCount;
					})
				}else if(e.order==='descending'){
					this.worldData = this.worldData.sort(function(a,b){
						return b.deadCount - a.deadCount;
					})
					
				}
			},
			clickLoadMore(e){
				let status = e.detail.status;
				if(status = 'more') {
					this.status = '';
					this.worldData = this.worldDataAll;
				}
				
			},
			
			// 趋势图tab
			tabChange:function(e){
					var index = e.target.dataset.current || e.currentTarget.dataset.current;
					this.current=index;
				},
			swiperChange:function(e) {			
				var index=e.target.current || e.detail.current;
				this.current = index;
			}
			
			
		}
	}
</script>

<style>
	.all-container{
		background-color: #fff;
		border-radius: 20rpx;
		display: block;
		width: 100%;
		max-width: 1400rpx;
	}
	.toptab{
		 position: fixed;top: 0;left: 0;
	}
	.domestic{
		width: 100%;
		max-width: 1400rpx;
	}
	.title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 10px 10px;
		margin-top: 10px;
    }

    .title span {
        font-weight: 700;
    }

    .num {
        position: relative;
        text-align: center;
        background: #fff;
    }

    .num::after {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 200%;
        height: 200%;
        border: 1px solid #ebebeb;
        border-radius: 5px;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
        transform: scale(0.5);
        transform-origin: 0 0;
        content: "";
    }

    .num ul {
        flex-flow: wrap;
        position: relative;
        display: flex;
        margin: 0;
        padding: 8px 0 12px;
    }

    .num ul li {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 33.3333333%;
        margin: 10px 0;
    }

    .num ul li .create-item {
        position: relative;
        text-align: center;
    }

    .num ul li span {
        display: block;
        color: #333;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .num ul li .strong {
        font-weight: 700;
        font-size: 18px;
    }

    .num ul li .create-item .create-count {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        color: #999;
        font-size: 10px;
        font-weight: 400;
    }

    .num ul li .create-item .create-count em {
        font-weight: 400;
        font-style: normal;
    }
	.domestic .map {
        position: relative;
        text-align: center;
        background: #fff;
        border: 1px solid #ebebeb;
        border-radius: 5px;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    }

    .time {
        font-size: 10px;
    }

    .detail {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0 10px 10px;
    }

    .detail span {
        color: #666;
    }
	.ui-virus-select{
		border: 1px solid #ebebeb;
		border-radius: 5px;
		box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
		padding: 10px 0;
	}
	.ui-virusinfos{
		height: 650rpx;
	}
	.ui-virus-name-list{
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 10px;
	}
	.ui-virus-name-item{
		width: 33%;
		padding: 0 50rpx;
		text-align: center;
	}
	.ui-virus-name-list .active{
		background-color: #007AFF;
		color: #fff;
		border-radius: 10rpx;
	}
	.select{
		margin: 20rpx 0;
		font-size: 28rpx;
	}
	.table{
		padding: 10rpx;
	}
	.table-td .td{
		font-size: 24rpx;
	}
	.table .th{
		font-size: 24rpx;
		
	}
	
</style>