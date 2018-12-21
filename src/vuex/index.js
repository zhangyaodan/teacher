import Vue from 'vue';
import Vuex from 'vuex';

import register from './module/login/register'   //登陆页面
import login from './module/login/login'   //登陆页面
import home from './module/home/home'   //home 页
import myCourseWare from './module/home/myCourseWare'   //我的课件列表
import personal from './module/mine/personal'   //个人中心
import studentEstimate from './module/mine/studentEstimate'   //评价列表

import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    register,
    login,
    home,
    personal,
    myCourseWare,
    studentEstimate
  },
  plugins: [createPersistedState()]
})
