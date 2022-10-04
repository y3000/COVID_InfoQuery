<template>
	<view id="parent">
		<l-echart ref="chart" @finished="init"></l-echart>
	</view>
</template>

<script>
	// 如果你使用插件内提供的echarts.min
	// 也可以自行去官网下载自定义覆盖
	// 这种方式仅限于vue2
	import * as echarts from '@/uni_modules/lime-echart/static/echarts.min'
	// 引入tripQuery的数据
	// import {getTripQuery} from "@/utils/request.js"
	// import "@/mock/mockServe"
	import tripQueryDatas from "@/mock/tripQuery.json"
	// console.log(tripQuryDatas)
	export default {
		data() {
			return {
				option: {
					title: {
						text: '疫情同程链',
						subtext: '传播链查询',
						top: 'bottom',
						left: 'left'
					},
					animationDurationUpdate: 1500,
					animationEasingUpdate: 'quinticInOut',
					tooltip: {},
					legend: [{
						// selectedMode: 'single',
						data: [{
								"name": "确诊患者"
							},
							{
								"name": "无症状感染者"
							},
							{
								"name": "疑似病例"
							},
							{
								"name": "密接患者"
							},
							{
								"name": "海归人员"
							},
							{
								"name": "正常人员"
							}
						].map(function(a) {
							return a.name;
						})
					}],
					series: [{
						name: 'Les Miserables',
						type: 'graph',
						layout: 'force',
						// data: tripQueryDatas["nodes"],
						// links: tripQueryDatas["links"],
						data: tripQueryDatas.nodes,
						links: tripQueryDatas.links,
						categories: [{
								"name": "确诊患者"
							},
							{
								"name": "无症状感染者"
							},
							{
								"name": "疑似病例"
							},
							{
								"name": "密接患者"
							},
							{
								"name": "海归人员"
							},
							{
								"name": "正常人员"
							}
						],
						roam: true,
						label: {
							position: 'right',
							show: true
						},
						edgeSymbol: ['circle', 'arrow'],
						edgeSymbolSize: [4, 10],
						edgeLabel: {
							fontSize: 20
						},
						force: {
							repulsion: 1000
						},
						focusNodeAdjacency: true,
						roam: true,
						lineStyle: {
							normal: {
								opacity: 0.9,
								width: 1,
								curveness: 0.1
							}
						},
					}]
				},
			};
		},
		// 组件能被调用必须是组件的节点已经被渲染到页面上
		// 1、在页面mounted里调用，有时候mounted 组件也未必渲染完成
		mounted() {
			console.log(this.option.series[0])
			this.$refs.chart.init(echarts, chart => {
				chart.setOption(this.option);
			});
		},
		// 2、或者使用组件的finished事件里调用
		methods: {
			init() {
				console.log(this.option.series[0])
				this.$refs.chart.init(echarts, chart => {
					chart.setOption(this.option);
				});
			}
		}
	}
</script>
<style scoped>
	#parent {
		width: 100%;
		height: 100%;
	}

</style>
