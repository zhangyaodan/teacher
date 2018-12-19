<template>
  <div class="News">
    <!--头部返回-->
    <headerBack title="我的消息" :borderStatus="false"></headerBack>
    <!--top切换栏-->
    <topTab>
      <span slot="left">系统消息</span>
      <span slot="right">推送消息</span>
    </topTab>

    <betterScroll class="wrapper">
      <!--newsItem-->
      <div class="newsItem" v-for="num of 25">
        <div class="leftImg">
          <img class="imgShow" src="~@/assets/icon/news/icon_user.png" alt="">
        </div>
        <div class="rightCon">
          <div class="topBlock">
            <div class="leftBlock">【上课提醒】</div>
            <div class="rightBlock">2018-04-05</div>
          </div>
          <div class="bottomBlock">
            您报名的***课程（共**课时），第*课时将于5分钟
            后开始，请及时进入教室
          </div>
        </div>
      </div>
    </betterScroll>

  </div>
</template>

<script>
  import topTab from '@/components/topTab';   //top切换栏
    export default {
        name: "News",
      components:{
          topTab
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .News{
    .wrapper {
      overflow: scroll;
      position: absolute;
      top: 2.44rem;
      left: 0;
      right: 0;
      bottom: 1.32rem;
      padding-bottom:10px;
    }
    .newsItem{
      height:2.16rem;
      display:flex;
      padding-left:0.43rem;
      @include  border-1p(rgba(238,238,238,1));
      .leftImg{
        display:flex;
        align-items: center;
        margin-right:0.43rem;
        .imgShow{
          width:1.39rem;
          height:1.39rem;
          border-radius:50%;
        }
      }
      .rightCon{
        display:flex;
        flex:1;
        flex-direction: column;
        .topBlock{
          display:flex;
          flex:1;
          align-items: center;
          .leftBlock{
            font-size:0.45rem;
            font-family:PingFangSC-Light;
            font-weight:bold;
            color:rgba(52,54,60,1);
          }
          .rightBlock{
            display:flex;
            justify-content: flex-end;
            flex:1;
            padding-right:0.43rem;
            font-size:0.32rem;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(153,153,153,1);
          }
        }
        .bottomBlock{
          display:flex;
          flex:1;
          padding-right:0.61rem;
          font-size:0.32rem;
          font-family:PingFangSC-Light;
          font-weight:bold;
          color:rgba(153,153,153,1);
        }
      }
    }
  }
</style>
