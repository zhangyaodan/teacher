// 这里对文件进行一个说明
import http from 'http'
import path from 'http/Path'
export default {
  state: {
    listInfo:[]
  },
  mutations: {
    SAVESTUDENTINFO(state,data){
      state.listInfo = data
    }
  },
  actions: {
    // 获取学生评价列表
    getAllComment({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post(path.getAllComment,payload).then(res => {
          if (res.code !== 0) return reject(res)
          commit('SAVESTUDENTINFO',res.data)
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
