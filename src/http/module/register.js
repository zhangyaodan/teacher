import {rpcCall} from 'http/service/http';
// 获取手机号验证码
export const  sendOrganWebUserCode =  params => rpcCall('Teacher/sendUpdatePassMsg.html', 'get', params)
// 教师注册
export const  registerTeacher =  params => rpcCall('Login/registerTeacher.html', 'get', params)
