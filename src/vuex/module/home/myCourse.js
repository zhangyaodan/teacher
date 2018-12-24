// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
  },
  mutations: {

  },
  actions: {
    // 我的课程列表
    getSchedulingList({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getSchedulingList,payload).then(res => {
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
