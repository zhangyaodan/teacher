// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import 'normalize.css'    //css初始化
import 'lib-flexible'     //移动端自适应
import {
  JSEncrypt
} from 'jsencrypt'; //登录加密
import '@/assets/css/layout.css'
import headerBack from '@/components/headerBack.vue'     //头部返回组件 常用
import betterScroll from '@/components/better-scroll.vue'     //头部返回组件 常用
Vue.component('headerBack',headerBack)          //全局组件
Vue.component('betterScroll',betterScroll)          //全局组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/userImg.png'),   //请求失败后显示的图片
  attempt: 1     // 加载图片数量
})
// 表单验证
import VeeValidate,{ Validator } from 'vee-validate';
// import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});

const dictionary = {
  zh_CN: {
    messages:{
      required: (value) => '输入内容不能为空'
    }
  }
};

Validator.extend('phone', {
  getMessage: (field, [args]) => `请输入正确的手机号码`,
  validate: (value, [args]) =>{
    const reg = /^[0-9]{6,15}$/;
    return reg.test(value)
  }
});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
