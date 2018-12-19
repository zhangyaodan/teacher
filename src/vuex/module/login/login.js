
import { login } from '@/http'
import {randomString} from '@/utils'
const ranString = randomString(10)   //随机字符串
export default {
  state: {
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
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}
