// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
    LessonsByOne: {}
  },
  mutations: {
    // 今日陪练--存储某一个人的信息
    SETLESSONSBYONE(state, data) {
      state.LessonsByOne = data
    },
  },
  actions: {
    // 今日陪练
    getLessonsByall({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getLessonsByall, payload).then(res => {
          if (res.code !== 0) return reject(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 课表详情
    getPeriodinfo({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getPeriodinfo, payload).then(res => {
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
