import Vue from 'vue';
import Vuex from 'vuex';

import register from './module/login/register'   //登陆页面
import login from './module/login/login'   //登陆页面

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    register,
    login
  }
})
