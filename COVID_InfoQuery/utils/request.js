
import axios from  "axios"
const instance = axios.create({
  baseURL: "/api",
  timeout: 4000,
})
instance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export default instance