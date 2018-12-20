<template>
  <!--登录页-->
  <div class="Login">
      <!--用户卡片-->
      <userCard></userCard>
      <!--登陆输入框-->
      <div class="loginCon">
        <!--输入手机号-->
        <div class="inputItem">
          <div class="leftIcon"></div>
          <input placeholder="请输入手机号" v-model="username" type="text">
        </div>
        <!--输入密码-->
        <div class="inputItem">
          <div  class="leftIcon"></div>
          <input placeholder="请输入登录密码" v-model="password" :type="eyeType?'text':'password'">
          <div class="rightIcon" @click="eyeType=!eyeType">
            <div :class="{'openEye':eyeType,'closeEye':!eyeType}"></div>
          </div>
        </div>
        <!--注册-->
        <div class="register">
          <div class="goRegister">
            分享 <router-link  tag="span"  :to="{path:'/Register'}">注册</router-link>
          </div>
          <router-link tag="div"  :to="{path:'/ForgetPassword'}" class="forgetPass"  >
            忘记密码？
          </router-link>
        </div>
        <!--登陆按钮-->
        <div class="login" @click="goLogin">
          登陆
        </div>
      </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  import userCard from '@/components/login/userCard';
    export default {
        name: "Login",
      components:{
        userCard
      },
      data(){
        return{
          eyeType:false,      //默认隐藏密码
          username:'',          //手机号
          password:'',          //密码
        }
      },
      methods:{
        ...mapActions([
          'handleLogin'
        ]),
          // 登陆
        goLogin(){
          let obj = {
              username: this.username,
              password: this.password,
              type:'1',
              source:'app',
              organid:2
          }
          this.handleLogin(obj).then(data=>{
            this.$vux.toast.show({
              showPositionValue: false,
              text: '登陆成功',
              type: 'text',
              position: 'middle',
              time:1000
            })
            this.$router.push('/')
          }).catch(err=>{
            this.$vux.toast.show({
              showPositionValue: false,
              text: err.info,
              type: 'text',
              position: 'middle',
              time:1000
            })
          });
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .Login{
    /*登陆内容*/
    .loginCon{
      margin-top:-0.89rem;
      padding:0.00rem 0.88rem;
      /*input框*/
      input{
        border:none;
        outline:none;
        font-size:0.37rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        line-height:1.20rem;
      }
      .inputItem{
        height:1.32rem;
        padding:0.00rem 0.55rem 0.00rem 0.36rem;
        @include border-1p(rgba(222,223,235,1));
        display:flex;
        align-items: center;
        .leftIcon{
          width:0.51rem;
          height:0.51rem;
          margin-right:0.33rem;
        }
        /*隐藏密码*/
        .rightIcon{
          flex:1;
          display:flex;
          justify-content: flex-end;
          /*隐藏密码*/
          .closeEye{
            height:0.51rem;
            width:0.51rem;
            @include  bg-image('~@/assets/icon/login/icon_closeEye')
          }
          /*显示密码*/
          .openEye{
            height:0.51rem;
            width:0.51rem;
            @include  bg-image('~@/assets/icon/login/icon_openEye')
          }
        }

      }
      .inputItem:nth-of-type(1)>.leftIcon{
        @include bg-image('~@/assets/icon/login/icon_phone')
      }
      .inputItem:nth-of-type(2)>.leftIcon{
        @include bg-image('~@/assets/icon/login/icon_passWord')
      }
      /*注册*/
      .register{
        padding:0.00rem 0.39rem;
        height:0.89rem;
        display:flex;
        align-items: center;
        margin-bottom:0.80rem;
        .goRegister{
          font-size:0.32rem;
          font-family:PingFangSC-Light;
          font-weight:bold;
          color:rgba(152,153,156,1);
          span{
            color:#08AF80
          }
        }
        .forgetPass{
          flex:1;
          display:flex;
          justify-content: flex-end;
          font-size:0.32rem;
          font-family:PingFangSC-Light;
          font-weight:bold;
          color:rgba(152,153,156,1);
        }
      }
      /*登陆按钮*/
      .login{
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
  }
</style>
