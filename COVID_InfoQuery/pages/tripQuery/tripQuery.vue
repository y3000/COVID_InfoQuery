<template>
	<view>
		肺炎同程查询
		<Echarts :option="option" style="height: 300px;" @click="echartsClick"></Echarts>
		<button @click="updateClick">切换数据</button>
	</view>
</template>

<script>
	// 引入Echarts图表组件
	import Echarts from "@/components/echarts/echarts.vue"
	export default {
		data() {
			return {
				option: {},
				option2: {
					notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
					tooltip: {
						trigger: 'axis',
						positionStatus: true,
						formatterStatus: false, // 自定义变量：是否格式化tooltip，设置为false时下面三项均不起作用
						formatterUnit: '元', // 自定义变量：数值后面的单位
						formatFloat2: true, // 自定义变量：是否格式化为两位小数
						formatThousands: true // 自定义变量：是否添加千分位
					},
					legend: {
						data: ['', '']
					},
					grid: {
						left: '8%',
						right: '8%',
						bottom: '8%',
						containLabel: true
					},
					xAxis: [{
						name: '位移（m）',
						nameLocation: 'middle', //轴位置
						nameGap: 26, //name名字与轴线间距
						type: 'value',
						axisLine: {
							onZero: false
						}
					}],
					yAxis: [{
						name: '载荷（KN）',
						nameLocation: 'middle', //轴位置
						nameGap: 26, //name名字与轴线间距
						type: 'value',
						axisLine: {
							onZero: false
						}
					}],
					series: [{
						id: 'a',
						type: 'line',
						smooth: true,
						symbolSize: 0,
						data: [
							[11.26, 44.8],
							[11.94, 44.52],
							[12.64, 44.31],
							[13.34, 44.26],
							[14.04, 44.36],
							[14.76, 44.51],
							[15.46, 44.71],
							[16.2, 44.84],
							[16.92, 44.92],
							[17.64, 44.85],
							[18.38, 44.69],
							[19.1, 44.46],
							[19.84, 44.21],
							[20.56, 44.06],
							[21.28, 43.99],
							[22, 44.03],
							[22.72, 44.14],
							[23.46, 44.27],
							[24.16, 44.36],
							[24.88, 44.38],
							[25.58, 44.31],
							[26.28, 44.2],
							[26.98, 44.07],
							[27.68, 43.97],
							[28.36, 43.91],
							[29.04, 43.89],
							[29.72, 43.94],
							[30.38, 44.02],
							[31.04, 44.13],
							[31.68, 44.22],
							[32.34, 44.26],
							[32.98, 44.28],
							[33.6, 44.26],
							[34.22, 44.24],
							[34.84, 44.19],
							[35.44, 44.19],
							[36.04, 44.18],
						]
					}]
				},
				option3: {
					notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(220, 220, 220, 0.8)'
						}
					}]
				}
			};
		},
		components: {
			Echarts
		},
		onLoad() {
			this.option = this.option2
		},
		methods: {
			/**
			 * 点击事件
			 * @param {Object} params
			 */
			echartsClick(params) {
				console.log('点击数据', params)
			},
			/**
			 * 切换数据
			 */
			updateClick() {
				if (this.option === this.option2) {
					this.option = this.option3
				} else {
					this.option = this.option2
				}
			}
		}
	}
</script>

<style>

</style>
