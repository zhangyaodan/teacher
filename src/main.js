// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import 'normalize.css'    //css初始化
import 'lib-flexible'     //移动端自适应
import '@/assets/css/layout.css'
import headerBack from '@/components/headerBack.vue'     //头部返回组件 常用
import betterScroll from '@/components/better-scroll.vue'     //头部返回组件 常用
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)// 默认参数
Vue.component('headerBack',headerBack)          //全局组件
Vue.component('betterScroll',betterScroll)          //全局组件


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,




  components: { App },
  template: '<App/>'
})
