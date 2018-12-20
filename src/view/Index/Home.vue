<template>
  <div class="Home">
    <!--头部卡片-->
    <mineCard></mineCard>
    <!--今日课表-->
    <!--头部标题-->
    <div class="headerTitle">
      <div class="title">
        今日陪练
      </div>
      <div class="timeShow">
        2018-4-18&nbsp;&nbsp;周三
      </div>
    </div>
    <betterScroll class="wrapper">
      <!--课表信息-->
      <div class="courseItem" v-for="num of 10">
        <img class="courseImg" src="~@/assets/images/courseImg.png" alt="">
        <div class="rightCon">
          <div class="title">课时1】四则运算符的实际应用</div>
          <div class="teacher">老师：王大锤</div>
          <div class="time">
            <div class="leftTime">
              18:00:45-19:45
            </div>
            <div class="courseStatus">
              已结束
            </div>
          </div>
        </div>
      </div>
    </betterScroll>
  </div>
</template>

<script>
    import mineCard from '@/components/home/mineCard.vue'     //头部卡片
    export default {
        name: "Home",
        components:{
          mineCard,
        },
      data(){
          return{
          }
      },
      created(){

      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
    .Home{
      .wrapper {
        overflow: scroll;
        position: absolute;
        top: 8.5rem;
        left: 0;
        right: 0;
        bottom: 1.32rem;
      }
      /*课表标题*/
      .headerTitle{
        clear: both;
        height:1.15rem;
        line-height: 1.15rem;
        padding:0.00rem 0.43rem 0.00rem 0.56rem;
        background:rgba(255,255,255,1);
        @include border-1p(rgba(238,238,238,1));
        .title{
          float:left;
          height:1.15rem;
          font-size:0.37rem;
          font-family:PingFangSC-Regular;
          font-weight:bold;
          color:rgba(71,74,81,1);
        }
        .timeShow{
          float:right;
          font-size:0.27rem;
          font-family:PingFangSC-Regular;
          color:rgba(71,74,81,1);
        }
      }
      /*课表单条信息*/
      .courseItem{
        @include border-1p(rgba(238,238,238,1));
        padding:0.40rem 0.43rem 0.40rem 0.43rem;
        display:flex;
        /*课表图片*/
        .courseImg{
          display:block;
          width:2.88rem;
          height:1.92rem;
          border-radius:0.11rem;
          margin-right:0.41rem;
        }
        /*右侧课表信息*/
        .rightCon{
          flex:1;
          height:1.92rem;
          /*标题*/
          .title{
            margin-bottom:0.31rem;
            font-size:0.37rem;
            font-family:Adobe Heiti Std R;
            font-weight:normal;
            color:rgba(75,80,90,1);
          }
          /*老师*/
          .teacher{
            font-size:0.32rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(153,153,153,1);
            margin-bottom:0.45rem;
          }
          /*时间*/
          .time{
            height:0.37rem;
            line-height: 0.37rem;
            .leftTime{
              height:0.37rem;
              float:left;
              font-size:0.35rem;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(11,204,150,1);
            }
            .courseStatus{
              float:right;
              height:0.37rem;
              font-size:0.35rem;
              font-family:PingFangSC-Light;
              font-weight:bold;
              color:rgba(153,153,153,1);
            }
          }
        }
      }
    }
</style>
