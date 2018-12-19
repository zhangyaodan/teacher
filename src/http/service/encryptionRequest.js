// import md5 from 'md5'
// import md5 from 'js-md5'
import { md5 } from './md5.js'
import store from '@/vuex';
import {
  hex_sha1
} from './bass64.js'


// 生成签名 参数 key starttime token
const getStr = (data, key, starttime, token) => {
  var tostr = data ? getStrings(data, '') : ''
  return md5(hex_sha1(md5(tostr) + md5(key) + starttime) + token);
}

// 鬼知道这是干嘛的 用就完了
const getStrings = (data, str) => {
  for (var x in data) {
    if (isJson(data[x])) {
      var i = 0;
      for (var k in data[x]) {
        i++;
        break;
      }
      if (i > 0) {
        str += x;
        str = getStrings(data[x], str);
      }
    } else if (isArray(data[x])) {
      if (data[x].length != 0) {
        str += x;
        str = getStrings(data[x], str);
      }
    } else {
      if (data[x] !== undefined && data[x] !== null && data[x] !== '' && data[x] !== false && data[x] !== true) {
        str += x.toString() + data[x].toString();
      }
    }
  }
  return str;
}

const isArray = (o) => {
  return Object.prototype.toString.call(o) == '[object Array]';
}
const isJson = (obj) => {
  return typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}

export const encryptionRequest = (data) => {
  const key = store.state.login.state.key
  const token = store.state.login.state.token
  const starttime = new Date().getTime()
  const sign = getStr(data, key, starttime, token)

  return {
    key,
    token,
    starttime,
    sign
  }
  // console.log('md5===>', md5)
}


export const imageUpload = ({ data = {} }) => {
  data = data || {}
  const { token, starttime, sign } = encryptionRequest(data)
  return {
    token,
    starttime,
    sign
  }
}

// export default encryptionRequest()
