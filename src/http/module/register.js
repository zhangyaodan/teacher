import {rpcCall} from 'http/service/http';
// 获取手机号验证码
export const  sendUpdatePassMsg =  params => rpcCall('Teacher/sendUpdatePassMsg.html', 'post', params)
// 教师注册
export const  registerTeacher =  params => rpcCall('Login/registerTeacher.html', 'post', params)
