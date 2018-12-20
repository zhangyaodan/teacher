/*
* success : 请求成功执行的函数
* fail：请求失败执行的函数
*  定义全局方法
* import index from './service/index'
* Vue.prototype.$index = index;
* */
import http from './http';
import qs from 'qs';

//有的请求需要用户认证，视情况而定
const getConfig = function (auth) {
  let config = {}
  if(auth){
    config.headers={
      "Authorization": auth
    }
  }
  return config;
}

var index = {
  get:function (url,data,success,fail) {

    return http.get(url,{
      params:data
    })
      .then(function (res) {
        success(res);
      })
      .catch(function (error) {
        if(fail){
          fail(error);
        }
        console.log(error);
      })
  },
  post:function (url,data,success,fail) {
    console.log(url);
    return new Promise((resolve, reject) => {
      http.post(url, qs.stringify(data))
        .then(res =>{
          if (res.code === -40666) {
            alert('已经在别的地方登陆')
            return
          }
          resolve(res)
        },err=>{
          console.log('http error===>', err)
          reject(err)
        })
    })
  },
  postExport:function (url,data,type,success,fail) {
    return http.post(url, qs.stringify(data),type)
      .then(function (res) {
        success(res);
      })
      .catch(function (error) {
        if(fail){
          fail(error);
        }
        console.log(error);
      })
  },
}
export default  index;
