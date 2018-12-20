
import http from 'http'
import path from 'http/Path'
import {randomString} from '@/utils'
const ranString = randomString(10)   //随机字符串
export default {
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
  mutations: {
    SETPUBLICKEY(state, data) {
      state.publicKey = data
    },
  },
  actions: {
    // 登陆操作
    handleLogin({ commit, dispatch, state }, payload) {
      return new Promise((resolve, reject) => {
        // 先获取一次公钥  并且存起来
        dispatch('getPublicKey').then((res) => {
          // 登陆需要的前端生成的key
          payload.key = state.key;
          // 获取数据成功后登陆
          http.post(path.login,payload).then(res => {
            if (res.code !== 0) return reject(res)
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          return reject(err)
        })
      })
    },
    // 获取公钥
    getPublicKey({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getPublicKey,payload).then(res => {
          if (res.code !== 0) return reject(res)
          // 记录公钥
          commit('SETPUBLICKEY', res.key)
          resolve(res)
        }).catch(err => {
          console.log(err);
          reject(err)
        })
      })
    },
  },
  getters: {

  }
}
