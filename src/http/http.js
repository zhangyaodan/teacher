import http from "axios";
import qs from "qs";
import sha1 from "sha1";
import md5 from 'md5';
import store from '@/vuex';
function getStr(arr, key, starttime, token) {
  var tostr = arr ? getStrings(arr, "") : "";
  return md5(sha1(md5(tostr) + md5(key) + starttime) + token);
}

function getStrings111(data, str) {
  for (var x in data) {
    if (isJson(data[x]) || isArray(data[x])) {
      str += x;
      str = getStrings(data[x], str);
    } else {
      str += x + data[x];
    }
  }
  return str;
}

function getStrings(data, str) {
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
      if (
        data[x] !== undefined &&
        data[x] !== null &&
        data[x] !== "" &&
        data[x] !== false &&
        data[x] !== true
      ) {
        str += x.toString() + data[x].toString();
      }
    }
  }
  return str;
}

function isArray(o) {
  return Object.prototype.toString.call(o) == "[object Array]";
}

function isJson(obj) {
  return (
    typeof obj == "object" &&
    Object.prototype.toString.call(obj).toLowerCase() == "[object object]" &&
    !obj.length
  );
}

function queryString(data) {
  var str = "";
  for (var d in data) {
    if (data.hasOwnProperty(d)) {
      str += d + "=" + data[d] + "&";
    }
  }
  return str;
}
// 域名定义
let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = "http://test.wisdom.com/";
} else if (process.env.NODE_ENV === "production") {
  // baseUrl = "www.wisdom.com/";
}
// 域名赋值
http.defaults.baseURL = baseUrl;
// 请求超时时间
http.defaults.timeout = 10000
// 定义post请求头
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// 请求拦截器
http.interceptors.request.use(config =>{
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    // return config;

    // 当前时间戳
    var starttime = Date.parse(new Date());
    // get请求进行地址编码
    if (config.method == "get") {
      config.url = encodeURI(config.url);
    }

    console.log(11111111111111111111111,store);
    if (localStorage.getItem("userinfo") == null || localStorage.getItem("userinfo") == "" ||
      localStorage.getItem("key") == null || localStorage.getItem("key") == "") {
      window.localStorage.removeItem("userinfo");
      window.localStorage.removeItem("key");
    } else {
      var token = JSON.parse(window.localStorage.getItem("userinfo")).token;
      var data = qs.parse(config.data);

      config.headers.common["sign"] = getStr(data, localStorage.getItem("key"), starttime, token);
      config.headers.common["token"] = String(token);
      config.headers.common["starttime"] = String(starttime);
    }
    return config;
  },
  error =>{
    // Do something with index error
    return Promise.reject(error);
  },
);
var count = 0

// 响应拦截
// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.code == -40666) {
      count = count + 1
      if (count == 1) {
        alert(response.data.info)
      }
      setTimeout(function () {
        window.localStorage.removeItem("userinfo");
        window.localStorage.removeItem("key");
        // window.location.href = location.origin + "/admin/login/login.html";
        window.location.href = location.origin + "/admin/#/login";
      }, 1500);
    } else {
      return response.data;
    }
  },
  function (error) {
    // Do something with response error
    if (error.response) {
      if (error.response.status === 400) {
        alert.error("数据错误！");
      } else if (error.response.status === 401) {
        // define window.app=vm in main.js
        // window.app.$router.push({name: 'Login'});
      } else if (error.response.status === 403) {
        alert("您没有操作权限哦！");
      } else if (error.response.status === 404) {
        alert("对象不存在！");
      } else if (error.response.status === 500) {
        alert("服务器发生了一些错误哦！");
      }
    }
    return Promise.reject(error);
  }
);

export default http;
