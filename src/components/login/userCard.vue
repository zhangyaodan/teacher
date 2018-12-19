<template>
  <!--登录页背景-->
  <div class="loginBg">
    <!--学生头像-->
    <img  class="userImg" src="@/assets/images/userImg.png" alt="">
    <!--hello-->
    <div class="welcomeBack">欢迎回来</div>
  </div>
</template>

<script>
    export default {
        name: "userCard"
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  /*登录页背景*/
  .loginBg{
    overflow: hidden;
    width:100%;
    height:8.96rem;
  @include bg-image('~@/assets/images/loginBg');
    /*学生头像*/
  .userImg{
    display:block;
    margin:2.01rem auto 0.43rem;
    width:2.16rem;
    height:2.16rem;
    background:rgba(255,255,255,1);
    border:0.01rem solid rgba(224, 225, 229, 1);
    border-radius:50%;
  }
  /*欢迎回来*/
  .welcomeBack{
    text-align: center;
    font-size:0.43rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  }
</style>
