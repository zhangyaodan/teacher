import {rpcCall} from 'http/service/http';
// 登陆
export const  login =  params => rpcCall('Login/login.html', 'post', params,'appteacher')

