module.exports = {
	devServer:{
		port:'8081',
		disableHostCheck:true,
		proxy:{
			'/api':{
				target:'http://apis.juhe.cn/springTravel/query',
				changeOrigin:true,
				pathRewrite:{
					'^/api': ''
				}
			}
		}
	}
}