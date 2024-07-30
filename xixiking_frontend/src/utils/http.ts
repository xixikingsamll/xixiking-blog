import axios from 'axios'

// 创建与后端对接的基本接口
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3007',
    timeout: 5000
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    // 成功时做什么
    config => {
        return config;
    },

    // 失败时做什么
    error => {
        return error;
    }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    // 成功时做什么
    response => {
        return response;  
    },
    error => {
        // 对响应错误做点什么  
        // 例如，你可以在这里处理网络错误或服务器错误  
        if (error.response) {  
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内  
        // console.log(error.response.data);  
        // console.log(error.response.status);  
        // console.log(error.response.headers);  
        } else if (error.request) {  
        // 请求已发出，但没有收到响应  
        console.log(error.request);  
        } else {  
        // 发送请求时发生了某些错误  
        console.log('Error', error.message);  
        }  
        return error.response;
    }
)

export default axiosInstance