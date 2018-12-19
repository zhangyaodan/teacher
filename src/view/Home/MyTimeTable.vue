<template>
  <!--我的课表-->
    <div class="MyTimeTable">
      <headerBack title="我的课表"></headerBack>
      <!--顶部tab-->
      <topTab>
        <span slot="left">待上课</span>
        <span slot="right">已结束</span>
      </topTab>


      <betterScroll class="wrapper">
        <!--灰色地带-->
        <div class="grayBlock"></div>
        <!--课表title-->
        <div class="tableTitle">
          2018-04-18 周三
        </div>
        <template v-for="(item,key) of 8" >
          <!--课表信息-->
          <router-link tag="div"  :to="{path:'/TimeTableInfo'}" class="courseItem">
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
          </router-link>
          <div class="grayBlock" v-if="item!=8"></div>
        </template>
      </betterScroll>


    </div>
</template>

<script>
  import topTab from '@/components/topTab';
    export default {
        name: "MyTimeTable",
      components:{
        topTab
      },
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .MyTimeTable{
    .wrapper {
      overflow: scroll;
      position: absolute;
      top: 2.44rem;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom:10px;
    }
    /*课表title*/
    .tableTitle{
      height:0.99rem;
      line-height: 0.99rem;
      padding-left:0.56rem;
      font-size:0.35rem;
      color:rgba(71,74,81,1);
      @include  border-1p(rgba(238,238,238,1));
    }

    /*课表单条信息*/
    .courseItem{
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
          height:0.64rem;
          line-height: 0.64rem;
          .leftTime{
            height:0.64rem;
            float:left;
            font-size:0.35rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(11,204,150,1);
          }
          .courseStatus{
            float:right;
            height:0.64rem;
            text-align: center;
            width:1.57rem;
            /*background:rgba(55,210,151,1);*/
            font-family:PingFangSC-Light;
            font-weight:bold;
            font-size:0.35rem;
            font-weight:bold;
            color:rgba(174,174,174,1);
          }
        }
      }
    }
  }
</style>
