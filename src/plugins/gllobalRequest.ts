/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {message} from "antd";


/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.NODE_ENV === 'production'? 'http://suibemmaback.suibemma.club' : undefined
  // requestType: 'form',
});


/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {

  const res = await response.clone().json();
  if (res === null){
    message.error("操作失败")
    return response;
  }
  return response;
});

export default request;
