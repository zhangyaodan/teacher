<template>
    <!--学生评价-->
  <div class="Evaluate">
    <headerBack title="评价"></headerBack>

    <!--学生头像-->
    <div class="topBlock">
      <div class="leftImg">
        <img class="imgShow" src="~@/assets/images/userImg.png" alt="">
      </div>
      <div class="rightTitle">李小美</div>
    </div>
    <!--灰色地带-->
    <div class="grayBlock"></div>
    <!--学生评价内容-->
    <div class="evaluateInfo">
      <div class="pingFen">学生评分</div>
      <div class="starOut">
        <div v-for="num of 5" :class="['starDefault',num<3?'starBg':'starBorder'] "></div>
      </div>
      <div class="titleFont">课程评分</div>

      <textarea class="textarea" name="" id=""></textarea>

      <div class="submit">提交</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Evaluate"
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .Evaluate{
    .topBlock{
      height:2.07rem;
      display:flex;
      padding-left:0.71rem;
      align-items: center;
      .leftImg{
        dispaly:flex;
        align-items: center;
        margin-right:0.32rem;
        .imgShow{
          width:1.36rem;
          height:1.36rem;
          border-radius:50%;
        }
      }
      .rightTitle{
        font-size:0.43rem;
        font-family:PingFangSC-Light;
        font-weight:bold;
        color:rgba(52,54,60,1);
      }
    }
    /*评价内容*/
    .evaluateInfo{
      padding:0.55rem 0.41rem 0.00rem 0.44rem;
      .pingFen{
        font-size:0.40rem;
        font-family:PingFangSC-Light;
        font-weight:bold;
        color:rgba(60,60,65,1);
        margin-bottom:0.52rem;
      }
      .starOut{
        display: flex;
        justify-content: center;
        margin-bottom:0.93rem;
        .starDefault{
          height:0.75rem;
          width:0.75rem;
          float:left;
          margin-right:0.41rem;
        }
        .starBg{
          @include bg-image('~@/assets/icon/home/icon_starBg')
        }
        .starBorder{
          @include bg-image('~@/assets/icon/home/icon_starBorder')
        }
      }
      .titleFont{
        font-size:0.40rem;
        font-family:PingFangSC-Light;
        font-weight:bold;
        color:rgba(60,60,65,1);
        margin-bottom:0.43rem;
      }
      .textarea{
        width:8.75rem;
        height:4.08rem;
        background:rgba(246,246,248,1);
        border-radius:0.05rem;
        margin:0.00rem auto;
        margin-bottom:0.84rem;
      }
      .submit{
        margin:0.00rem auto;
        width:9.15rem;
        height:1.17rem;
        line-height: 1.17rem;
        text-align: center;
        background:linear-gradient(90deg,rgba(39,249,180,1),rgba(11,204,150,1));
        box-shadow:0.00rem 0.11rem 0.17rem 0.00rem rgba(8,175,128,0.2);
        border-radius:0.11rem;
        font-size:0.45rem;
        font-family:PingFangSC-Light;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
