<template>
  <div class="Mine">
    <!--头部返回-->
    <headerBack title="我的" :show="true"></headerBack>
    <!--用户头像item-->
    <div class="imgItem">
      <img class="userImg" src="~@/assets/images/userImg.png" alt="">
      <div class="rightCon">
        <div class="userInfo">UED@163.COM</div>
        <div class="iconGo">
          <div></div>
        </div>
      </div>
    </div>
    <!--灰色地带-->
    <div class="grayBlock"></div>
    <!--我的消息-->
    <div class="itemList">
      <div class="outPadding">
        <div class="iconLeft newsIcon"></div>
      </div>
      <router-link  tag="div" class="rightCon" :to="{path:'/StudentEstimate'}">
        <div class="leftTitle">我的评价</div>
        <div class="rightIcon ">
          <div></div>
        </div>
      </router-link>
    </div>
    <!--设置-->
    <router-link  tag="div"  :to="{path:'/SetUp'}" class="itemList">
      <div class="outPadding">
        <div class="iconLeft setUpIcon"></div>
      </div>
      <div class="rightCon">
        <div class="leftTitle">设置</div>
        <div class="rightIcon ">
          <div></div>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
    export default {
        name: "Mine",
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .Mine{
    .imgItem{
      clear: both;
      overflow: hidden;
      padding:0.37rem 0.43rem 0.36rem 0.55rem;
      display:flex;
      .userImg{
        display:block;
        width:1.36rem;
        height:1.36rem;
        float:left;
        margin-right:0.27rem;
        border-radius:50%;
      }
      .rightCon{
        display:flex;
        flex:1;
        .userInfo{
          display:flex;
          align-items: center;
          font-size:0.43rem;
          color:rgba(75,80,90,1);
        }
        .iconGo{
          display:flex;
          flex:1;
          align-items: center;
          justify-content: flex-end;
          div{
            width:0.17rem;
            height:0.31rem;
            @include bg-image('~@/assets/icon/icon_go');
          }
        }
      }
    }

    /*灰色地带*/
    .grayBlock{
      height:0.24rem;
      background:rgba(245,246,250,1);
    }
    /*列表信息*/
    .itemList{
      padding-left:0.43rem;
      display:flex;
      .outPadding{
        padding:0.37rem 0px 0.36rem 0.00rem;
        .iconLeft{
          width:0.53rem;
          height:0.53rem;
          margin-right:0.47rem;
        }
        .newsIcon{
          @include bg-image('~@/assets/icon/mine_news');
        }
        .setUpIcon{
          @include bg-image('~@/assets/icon/mine_setUp');
        }
      }

      .rightCon{
        padding:0.37rem 0.43rem 0.36rem 0.00rem;
        display:flex;
        align-items: center;
        flex:1;
        @include  border-1p(rgba(238,238,238,1));
        .leftTitle{
          font-size:0.43rem;
          color:rgba(75,80,90,1);
        }
        .rightIcon{
          flex:1;
          display:flex;
          justify-content: flex-end;
          div{
            width:0.17rem;
            height:0.31rem;
            @include bg-image('~@/assets/icon/icon_go');
          }
        }
      }
    }


  }
</style>
