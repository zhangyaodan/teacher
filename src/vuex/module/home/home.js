// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
    LessonsByOne: {},   //存储某一个课表的信息
  },
  mutations: {
    // 今日陪练--存储某一个人的信息
    SETLESSONSBYONE(state, data) {
      state.LessonsByOne = data
    },
    // 课表详情--存储某一个学生的信息
    SETSTUDENT(state, data) {
      state.student = data
    }
  },
  actions: {
    // 今日陪练 我的陪练
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
    // 课表详情-添加课件
    addWarefile({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.upAttendance, payload).then(res => {
          if (res.code !== 0) return reject(res)
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 课表详情-评价
    upAttendance({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.upAttendance, payload).then(res => {
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
