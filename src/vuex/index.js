import Vue from 'vue';
import Vuex from 'vuex';

import register from './module/login/register'   //登陆页面
import login from './module/login/login'   //登陆页面
import home from './module/home/home'   //home 页
import personal from './module/mine/personal'   //home 页
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    register,
    login,
    home,
    personal
  },
  plugins: [createPersistedState()]
})
