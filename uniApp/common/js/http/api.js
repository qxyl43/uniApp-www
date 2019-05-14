import http from './'
//设置baseUrl
http.config.baseUrl = "https://internal-dev.51hgp.com"
//设置请求前拦截器
http.interceptor.request = (config) => {
    //添加通用参数
    config.header = {
        
    }
}
//设置请求结束后拦截器
http.interceptor.response = (response) => {
    //判断返回状态 执行相应操作
    return response;
}