<template>
	<view>
	  <view class="charts-box">
	    <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" />
	  </view>
	</view>
</template>
<script>
export default {
	props: {
		jwsr: {
			type: Array,
			default: function () {
				return [];
			},
		},
		areas: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
    data() {
        return {
			chartData:{},
			  opts: {
				legendShape: 'circle',
				dataLabel: false,
				xAxis: {
					// max: 6500,
					labelCount: 4,
					disableGrid: true,
				},
				yAxis: {
					disableGrid: false,
					// "showTitle": false,
				},
				extra: {
					bar: {
						type: "group",
						width: 10,
						seriesGap: 2,
						categoryGap: 3,
						barBorderCircle: false,
						linearType: "none",
						linearOpacity: 1,
						colorStop: 0,
						activeBgColor: "#000000",
						activeBgOpacity: 0.08,
						meterBorde: 1,
						meterFillColor: "#FFFFFF"
					}
				},
				color: ['#FA541B'],
				legend: {
					show: false
				},
				title: {
					name: 940,
					fontSize: 48 / 2,
					color: "#323567"
				}
			  }
		}
	},
  mounted() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
			  categories:this.areas,
			   series:this.jwsr
          };
		  // console.log( this.categories);
		  // console.log( this.jwsr);
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
} 
</script>
<style>
	.charts-box{
	  width: 100%;
	  height:300px;
	}
</style>
