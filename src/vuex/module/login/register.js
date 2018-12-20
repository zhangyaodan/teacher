// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
    isShowProtocol: false
  },
  mutations: {
    SETSHOWPROTOCOL(state, data) {
      state.isShowProtocol = data
    }
  },
  actions: {
    // 获取验证码
    sendUpdatePassMsg({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.sendUpdatePassMsg,payload).then(res => {
          if (res.data.code !== 0) return reject(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 教师注册
    registerTeacher({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.registerTeacher,payload).then(res => {
          console.log(res);
          if (res.code !== 0) return reject(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
  getters: {

  }
}
