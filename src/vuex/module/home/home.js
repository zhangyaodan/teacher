// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
  },
  mutations: {

  },
  actions: {
    // 今日陪练
    getLessonsByall({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getLessonsByall,payload).then(res => {
          if (res.data.code !== 0) return reject(res)
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
