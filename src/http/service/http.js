import axios from 'axios'
import qs from "qs"
import {HTTP_MAIN} from '../../constants'
import {encryptionRequest} from '@/http/service/encryptionRequest'
// 设置加密忽略列表
const noEncryptUrl = [
    'Login/registerTeacher.html',
    'login/getPublicKey'
]


export const responseHandler = (options, resData, resolve, reject) => {
    if (resData.code === 'success') {
        resolve(resData)
    } else {
        reject(resData)
    }
}


export const rpcCall = (url, method = 'get', params = {}, root = 'teacher') => {

    if (method === 'get') {
        url += '?' + qs.stringify(params)
    }

    const _url = `${HTTP_MAIN}${root}/${url}`

    let config = {
        method: method.toLocaleUpperCase(),
        url: _url,
        data: qs.stringify(params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    let TIME_OUT = 10000 // 超时时间为十秒
    if (noEncryptUrl.indexOf(url) < 0) {
        // 进行加密
        const mimi = encryptionRequest(params)
        config.headers.sign = mimi.sign
        config.headers.token = mimi.token
        config.headers.starttime = mimi.starttime
    }else{
      console.log(url);
    }

    return new Promise((resolve, reject) => {
      console.log(config);
        axios(config).then(res => {
            if (res.data.code === -40666) {
              this.$vux.toast.show({
                showPositionValue: false,
                text: '您已在其他端登陆，请重新登陆!',
                type: 'warn',
                position: 'middle',
                time:1000
              })
                return
            }
            resolve(res)
        }, err => {
            console.log('http error===>', err)
            reject(err)
        })
    })
}


