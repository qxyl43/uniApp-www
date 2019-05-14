import api from './request'

const baseURL = 'https://internal-dev.51hgp.com'
/* 
{
  baseURL,  //请求的基地址
  body, //请求的参数
  headers, //自定义的请求头
  method, // 请求方法
  timeout, //本次请求的超时时间
  url, // 本次请求的地址
  withCredentials //跨域请求是否发送第三方cookie
}
 */
api.config.baseURL = baseURL
api.config.withCredentials = true

export default api
