
import "@/mock/mockServe.js"

const key = "5dc22657a9bfb4b84957333fb7779e2e" //天行数据接口的key

// 请求封装
const get = (url,callback) =>{
	uni.showLoading({
		title:"加载中"
	})
	uni.request({
		url,
		header:{
			'Accept':"application/json",
			"Content-Type":"application/x-www-form-urlencoded",
		},
		method:"GET",
		success:(response)=>{
			const result = response.data
			callback(result)
		},
		complete:(response) =>{
			setTimeout(function(){
				uni.hideLoading();
			},300)
		},
		fail:(error) =>{
			uni.hideLoading()
			if(error && error.response){
				showError(error.response)
			}else{
				//....
			}
		}
	})
}
//封装showError 
const showError = error =>{
	let errorMsg = "";
	switch (error.status){
		case 400:
			errorMsg = "请求参数错误"
			break
		case 401:
			errorMsg = "未授权，请登录"
			break
		case 403:
			errorMsg = "跨域拒绝访问"
			break
		case 404:
			errorMsg = `请求地址出错:${error.config.url}`
			break
		case 408:
			errorMsg = "请求超时"
			break
		case 500:
			errorMsg = "服务器错误"
			break
		case 502:
			errorMsg = "网关错误"
			break
		case 503:
			errorMsg = "服务不可用"
			break
		case 504:
			errorMsg = "网关超时"
			break
		case 505:
			errorMsg = "HTTP版本不受支持"
			break
		default:
			errorMsg = error.msg
			break
	}
	
	uni.showToast({
		title:errorMsg,
		icon:"none",
		duration:1000,
		complete:()=>{
			setTimeout(function(){
				uni.hideToast();
			},1000)
		}
	})
}

export const getnewsList = (callback) => get('http://api.tianapi.com//ncov/index?key='+ key, callback)
export const getTripQuery = (callback) => get("/mock/tripQuery", callback)

