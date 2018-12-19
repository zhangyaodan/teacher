
import { login } from '@/http'
import {randomString} from '@/utils'
const ranString = randomString(10)   //随机字符串
export default {
  state: {
    state: {
      publicKey: '',
      // 切换的时候 这里会变成官方的token
      token: '',
      key: ranString,
      account: '',
      companyfullname: '',
      ico: '',
      userico: '',
      rootlist: '',
      // 切换的时候 这里会变成官方的角色
      role: '',
      isHQ: false,
      cookies: {}
    },
  },
  mutations: {

  },
  actions: {
    // 登陆
    login({ state, commit }, payload) {
      const fn = login.login
      return new Promise((resolve, reject) => {
        fn(payload).then(res => {
          if (res.data.code !== 0) return reject(res)
          resolve(res.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
  getters: {

  }
}
