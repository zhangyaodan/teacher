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
        <div class="poneNum">+{{prphone}}</div>
        <input placeholder="请输入手机号" v-model="mobile" type="text">
      </div>
      <!--短信验证码-->
      <div class="inputItem">
        <div class="leftIcon"></div>
        <input placeholder="短信验证码" type="text"  v-model="code">
        <div  class="rightIcon rightTitle" @click="sendCode">
          <span v-if="codeShow">发送验证码</span>
          <span v-else>{{timeNum}}s</span>
        </div>
      </div>
      <!--输入密码-->
      <div class="inputItem">
        <div  class="leftIcon"></div>
        <input placeholder="设置登录密码" v-model="password" type="text">
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
  import userCard from '@/components/login/userCard'
  import { mapState, mapActions, mapMutations } from 'vuex';

    export default {
        name: "Register",
      components:{
          userCard
      },
      data(){
        return{
          mobile:'',   //手机号
          prphone:'86', //区号
          codeShow:true,  //默认发送验证码显示
          timeNum:60,    //默认倒计时从60开始
          timeOut:null,    //计时器
          password:'',   //登陆的密码
          code:'',   //验证码
        }
      },
      mounted(){

      },
      methods:{
        ...mapActions([
          'registerTeacher',
          'sendUpdatePassMsg'
        ]),
        // 发送验证码
        sendCode(){
          // 开启倒计时读秒
          this.codeShow = false
          // 开启计时器
          this.startTime()
          // 发送手机号获取code
          let obj = {
            mobile:this.mobile,
            prphone:this.prphone
          }
          this.sendUpdatePassMsg(obj)
        },
        // 开启计时器
        startTime(){
          let that = this
          this.timeOut = setInterval(function(){
            if(that.timeNum>0){
              that.timeNum--
            }else{
              that.codeShow = true
              that.clearTime()
            }
          },1000)
        },
        // 消除计时器
        clearTime(){
          window.clearInterval(this.timeOut)
        },
        // 注册
        goRegister(){
          let obj = {
            domain:'mls',
            prphone:this.prphone,
            mobile:this.mobile,
            password:this.password,
            code:this.code
          }
          this.registerTeacher(obj).then(data=>{
            this.$vux.toast.show({
              showPositionValue: false,
              text: '登陆成功',
              type: 'success',
              position: 'middle',
              time:1000
            })
            this.$router.push('/Personal')
          }).catch(err=>{
            this.$vux.toast.show({
              showPositionValue: false,
              text: err.data.info,
              type: 'warn',
              position: 'middle',
              time:1000
            })
          })
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
