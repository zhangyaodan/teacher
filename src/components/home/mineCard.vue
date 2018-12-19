<template>
  <div class="mineCard">
    <div class="cardBg">
      <!--时间预约-->
      <router-link :to="{path:'/Bespeak'}" class="icon_bespeak"></router-link>
      <!--用户头像-->
      <img class="userImg" src="~@/assets/images/userImg.png"  alt="">
      <span class="userName">王大锤</span>
      <!--tab切换-->
      <div class="subTab">
        <router-link tag="div" :to="{path:item.route}"  class="tabIndex" v-for="(item,index) of tabInfo" :key="index">
          <div class="tabImg"></div>
          <div class="tabName">{{item.title}}</div>
        </router-link >
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mineCard",
      data(){
          return {
            tabInfo:[
              {
                title:'我的陪练',
                route:'/MyTimeTable'
              },
              {
                title:'我的学生',
                route:'/MyStudent'
              },
              {
                title:'我的课程',
                route:'/MyCourse'
              },
              {
                title:'我的课件',
                route:'/MyCourseware'
              }
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .mineCard{
    /*头部卡片背景*/
    .cardBg{
      height:5.96rem;
      margin-bottom:1.41rem;
      padding-top:0.01rem;
      @include bg-image('~@/assets/images/homeBg');
      position:relative;
      /*时间预约图标*/
      .icon_bespeak{
        height:0.56rem;
        width:0.56rem;
        @include bg-image('~@/assets/icon/home/icon_bespeak');
        position:absolute;
        top:0.85rem;
        right:0.44rem;
      }
      /*用户头像*/
      .userImg{
        display:block;
        border-radius:50%;
        width:1.49rem;
        margin:1.72rem auto 0.00rem;
      }
      /*用户名称*/
      .userName{
        display:block;
        height:0.89rem;
        line-height: 0.89rem;
        text-align: center;
        font-size:0.43rem;
        font-weight:bold;
        color:rgba(255,255,255,1);
        text-shadow:0.00rem 0.03rem 0.05rem rgba(9,136,100,0.48);
      }
      /*二级tab导航*/
      .subTab{
        height:2.33rem;
        width:calc(100% - 0.88rem);
        padding-top:0.47rem;
        border-sizing:border-box;
        margin-left:0.44rem;
        background:rgba(255,255,255,1);
        box-shadow:0.00rem 0.00rem 0.24rem 0.00rem rgba(205,205,217,0.46);
        border-radius:0.11rem;
        position:absolute;
        left:0.00rem;
        bottom:-1.13rem;
        /*每一个tab*/
        .tabIndex{
          width:25%;
          float:left;
          .tabImg{
            width:1.32rem;
            height:1.27rem;
            margin:0.00rem auto;
          }
          .tabName{
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(52,54,60,1);
            text-align: center;
          }
          &:nth-of-type(1)>.tabImg{
            @include bg-image('~@/assets/icon/home/icon_timeTable');
          }
          &:nth-of-type(2)>.tabImg{
            @include bg-image('~@/assets/icon/home/icon_student');
          }
          &:nth-of-type(3)>.tabImg{
            @include bg-image('~@/assets/icon/home/icon_course');
          }
          &:nth-of-type(4)>.tabImg{
            @include bg-image('~@/assets/icon/home/icon_courseWare');
          }
        }
      }
    }
  }
</style>
