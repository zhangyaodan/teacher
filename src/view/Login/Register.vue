<template>
    <!--注册页-->
  <div class="register">
    <!--用户卡片-->
    <userCard></userCard>
    <!--注册页-->
    <!--登陆输入框-->
    <div class="registerCon">
      <!--输入手机号-->
      <div class="inputItem">
        <div class="poneNum">+86</div>
        <input placeholder="请输入手机号" type="text">
      </div>
      <!--短信验证码-->
      <div class="inputItem">
        <div class="leftIcon"></div>
        <input placeholder="短信验证码" type="text">
        <div class="rightIcon rightTitle" @click="sendOrganWebUserCode">
          发送验证码
        </div>
      </div>
      <!--输入密码-->
      <div class="inputItem">
        <div  class="leftIcon"></div>
        <input placeholder="设置登录密码" type="text">
        <div class="rightIcon">
          <div></div>
        </div>
      </div>
      <!--用户服务协议-->
      <div class="agreement">
        <input type="checkbox">
        <router-link tag="span"  :to="{path:'/Agreement'}">已阅读并同意《用户服务协议》</router-link>
      </div>
      <!--注册按钮-->
      <div class="goRegister" @click="goRegister">
        注册
      </div>
    </div>
    <router-link tag="div" :to="{path:'/Login'}" class="toLogin">已有账号，去 <span>登陆</span></router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from "qs"
  import userCard from '@/components/login/userCard'
  import { mapState, mapActions, mapMutations } from 'vuex';

  axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    export default {
        name: "Register",
      components:{
          userCard
      },
      mounted(){
      },
      methods:{
        ...mapActions([
          'registerTeacher',
          'sendOrganWebUserCode'
        ]),
        // 发送验证码
        sendOrganWebUserCode(){
          this.sendOrganWebUserCode();
        },
        goRegister(){
          this.$router.push('/Personal');
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .register{
    .registerCon{
      margin-top:-0.89rem;
      padding:0.00rem 0.88rem;
      /*input框*/
      input{
        border:none;
        outline:none;
        font-size:0.37rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(193,194,200,1);
        line-height:1.20rem;
      }
      .inputItem{
        height:1.32rem;
        padding:0.00rem 0.55rem 0.00rem 0.36rem;
        @include border-1p(rgba(222,223,235,1));
        display:flex;
        align-items: center;
        .poneNum{
          font-size:0.37rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:1.20rem;
          margin-right:0.15rem;
        }
        .leftIcon{
          width:0.51rem;
          height:0.51rem;
          margin-right:0.33rem;
        }
        /*发送验证码*/
        .rightTitle{
          font-size:0.35rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(7,201,148,1);
        }
        /*隐藏密码*/
        .rightIcon{
          flex:1;
          display:flex;
          justify-content: flex-end;
          div{
            height:0.51rem;
            width:0.51rem;
            @include  bg-image('~@/assets/icon/login/icon_closeEye')
          }
        }

      }
      .inputItem:nth-of-type(2)>.leftIcon{
        @include bg-image('~@/assets/icon/login/icon_code')
      }
      .inputItem:nth-of-type(3)>.leftIcon{
        @include bg-image('~@/assets/icon/login/icon_passWord')
      }

      /*用户协议*/
      .agreement{
        margin-bottom:0.80rem;
        height:1.01rem;
        display:flex;
        align-items: center;
        padding-left:0.40rem;
        input{
          margin-right:0.24rem;
        }
        span{
          font-size:0.32rem;
          font-family:PingFangSC-Light;
          font-weight:300;
          color:rgba(130,130,130,1);
          line-height:1.20rem;
        }
      }
      /*注册按钮*/
      .goRegister{
        margin:0.00rem auto;
        width:8.27rem;
        height:1.17rem;
        line-height: 1.17rem;
        text-align: center;
        background:linear-gradient(90deg,rgba(39,249,180,1),rgba(11,204,150,1));
        box-shadow:0.00rem 0.13rem 0.35rem 0.00rem rgba(8,175,128,0.28);
        border-radius:0.59rem;
        font-size:0.48rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:1.20rem;
      }
    }
    /*去登陆*/
    .toLogin{
      position:fixed;
      width:100%;
      text-align: center;
      left:0.00rem ;
      bottom:0.92rem;
      font-size:0.37rem;
      font-family:PingFangSC-Light;
      font-weight:bold;
      color:rgba(152,153,156,1);
      span{
        color:#08AF80
      }
    }
  }
</style>
