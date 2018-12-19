<template>
    <!--课程详情-->
  <div class="courseDetails">
      <headerBack title="课程详情"></headerBack>
    <!--课程头部-->
    <div class="courseHeader">
      <img class="courseImg" src="~@/assets/images/courseImg.png" alt="">
      <div class="courseCon">
        <div class="topTitle">钢琴陪练</div>
        <div class="bottomTitle">课时数：48</div>
      </div>
    </div>

    <!--灰色地带-->
    <div class="grayBlock"></div>

    <!--课程安排-->
    <div class="timeTitle">
      <div class="leftTitle">课程安排</div>
      <div class="rightTime">剩余<span class="courseNum">35</span>课时</div>
    </div>
    <betterScroll class="wrapper">

      <!--课程item-->
      <div class="courseItem" v-for="num of 30">
        <div class="leftIcon">
          <div class="startIcon"></div>
        </div>
        <div class="courseNum">课时1</div>
        <div class="rightTime">2018-04-20 18:00:00</div>
      </div>
    </betterScroll>

  </div>
</template>

<script>
    export default {
        name: "CourseDetails"
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .courseDetails{
    .wrapper {
      overflow: scroll;
      position: absolute;
      top: 5.33rem;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom:10px;
    }
    /*课程头部内容*/
    .courseHeader{
      padding:0.43rem 0.00rem 0.43rem 0.43rem;
      display:flex;
      .courseImg{
        width:2.61rem;
        height:1.97rem;
        background:rgba(230,230,230,1);
        border-radius:0.11rem;
        margin-right:0.33rem;
      }
      .courseCon{
        display:flex;
        flex-direction: column;
        .topTitle{
          display:flex;
          flex:1;
          align-items: center;
          font-size:0.43rem;
          font-family:PingFangSC-Regular;
          font-weight:bold;
          color:rgba(60,60,65,1);
        }
        .bottomTitle{
          flex:1;
          font-size:0.35rem;
          font-weight:bold;
          color:rgba(97,99,111,1);
        }
      }

    }

    /*课程安排*/
    .timeTitle{
      height:1.09rem;
      box-sizing: border-box;
      display:flex;
      padding:0.55rem 0.43rem 0.00rem 0.69rem;
      .leftTitle{
        font-size:0.43rem;
        font-family:PingFangSC-Light;
        font-weight:bold;
        color:rgba(60,60,65,1);
      }
      .rightTime{
        flex:1;
        display:flex;
        align-items: center;
        justify-content: flex-end;
        font-size:0.32rem;
        font-family:PingFangSC-Light;
        font-weight:bold;
        color:rgba(138,139,144,1);
        .courseNum{
          color:#0BCC96;
        }
      }
    }
    /*课程Item*/
    .courseItem{
      height:1.13rem;
      padding-left:1.23rem;
      padding-right:1.23rem;
      display:flex;
      @include  border-1p(rgba(238,238,238,1));
      .leftIcon{
        display:flex;
        align-items: center;
        margin-right:0.24rem;
        .startIcon{
          width:0.37rem;
          height:0.29rem;
          border-radius:0.05rem;
          @include  bg-image('~@/assets/icon/home/course_start');
        }
      }
      .courseNum{
        display:flex;
        align-items: center;
        font-size:0.37rem;
        font-weight:bold;
        color:rgba(97,99,111,1);
      }
      .rightTime{
        flex:1;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        font-size:0.32rem;
        font-weight:300;
        color:rgba(138,139,144,1);
      }
    }
  }
</style>
