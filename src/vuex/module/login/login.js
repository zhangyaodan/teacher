
import http from 'http'
import path from 'http/Path'
import {randomString,wrap_encrypt} from '@/utils'

const ranString = randomString(10)   //随机字符串
export default {
  state: {
      publicKey: '',   //公钥
      token: '',      //登陆token
      key: ranString,   //本地存储key
      mobile:'',     //用户登录的手机号
      uid:'',     //老师uid
  },
  mutations: {
    // 存储公钥
    SETPUBLICKEY(state, data) {
      state.publicKey = data
    },
    // 存储登陆token
    SETTOKEN(state, data) {
      state.token = data
    },
    //清空token
    CLEARTOKEN(state, data) {
      state.token = ''
    },
    // 存储用户手机号
    SETMOBILE(state,data){
      state.mobile = data
    },
    // 存储老师id
    SETUID(state,data){
      state.uid = data
    }
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
          http.post(path.login,{data:wrap_encrypt(JSON.stringify(payload),state.publicKey)}).then(res => {
            if (res.code !== 0) return reject(res)
            // 存储token
            commit('SETTOKEN', res.data.token)
            // 存储手机号
            commit('SETMOBILE', payload.username)
            // 存储老师id
            commit('SETUID',res.data.uid)
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
