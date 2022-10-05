module.exports = {
	devServer:{
		proxy:{
			'/api':{
				target:'http://apis.juhe.cn',
				changeOrigin: true,
				pathRewrite: { '^/api': '' }
			},
			'/g2/getOnsInfo':{
				target:'https://view.inews.qq.com/g2/getOnsInfo',
				changeOrigin: true,
				pathRewrite: { '^/g2/getOnsInfo': '' }
			},
			'/jwsr':{
				target:'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
				changeOrigin: true,
				pathRewrite: { '^/jwsr': '' }
			}
		}
	}
}