/*
* success : 请求成功执行的函数
* fail：请求失败执行的函数
*  定义全局方法
* import index from './service/index'
* Vue.prototype.$index = index;
* */
import http from './http';
import qs from 'qs';
import vue from 'vue'
import router from '@/router'
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
    return new Promise((resolve, reject) => {
      http.post(url, qs.stringify(data))
        .then(res =>{
          if (res.code === -40666) {
            // vue.$toast('您已经在其他端口登陆，请重新登陆')
            router.push('/Login')
            return
          }
          resolve(res)
        },err=>{
          console.log(33333333333333333333,err);
          // console.log('http error===>', err)
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
