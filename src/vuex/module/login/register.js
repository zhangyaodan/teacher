// 这里对文件进行一个说明
import { register } from '@/http'
export default {
  state: {
  },
  mutations: {

  },
  actions: {
    // 获取验证码
    sendUpdatePassMsg({ state, commit }, payload) {
      const fn = register.sendUpdatePassMsg
      return new Promise((resolve, reject) => {
        fn(payload).then(res => {
          if (res.data.code !== 0) return reject(res)
          resolve(res.data.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 教师注册
    registerTeacher({ state, commit }, payload) {
      const fn = register.registerTeacher
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
