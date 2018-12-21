// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
    info:{}
  },
  mutations: {
    // 存储老师信息
    SAVEINFO(state, data) {
      state.info = data;
    }
  },
  actions: {
    // 获取学生评价列表
    getAllComment({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getAllComment,payload).then(res => {
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
