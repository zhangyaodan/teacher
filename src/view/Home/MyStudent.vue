<template>
    <!--我的学生-->
  <div class="MyStudent">
    <!--头部返回-->
    <headerBack title="我的学生" ></headerBack>


    <betterScroll class="wrapper">
      <!--灰色地带-->
      <div class="grayBlock"></div>
        <!--学生item-->
        <div  v-for="item of 20"  class="courseItem"  >
          <img class="courseImg" src="~@/assets/images/userImg.png" alt="">
          <div class="rightInfo">
            <div class="leftCon">
              <div class="topTittle">
                李二蛋&nbsp;&nbsp;<div class="sexIcon"></div>
              </div>
              <div class="bottomTittle">
                中国 河南 洛阳 18岁
              </div>
            </div>
            <div class="rightIcon">
              <div class="icon_go"></div>
            </div>
          </div>
        </div>
    </betterScroll>


  </div>
</template>

<script>
    export default {
        name: "MyStudent",
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .MyStudent{
    .wrapper {
      overflow: scroll;
      position: absolute;
      top: 1.21rem;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom:10px;
    }
    .courseItem{
      padding:0.31rem  0.55rem 0.31rem 0.55rem;
      @include  border-1p(rgba(238,238,238,1));
      display:flex;
      /*课程图片*/
      .courseImg{
        display:block;
        width:1.15rem;
        height:1.15rem;
        margin-right:0.25rem;
        border-radius:50%;
      }

      /*右侧内容*/
      .rightInfo{
        flex:1;
        display:flex;
        .leftCon{
          diplay:flex;
          flex-direction:column;
          .topTittle{
            display:flex;
            height:50%;
            align-items: center;
            font-size:0.37rem;
            font-weight:bold;
            color:rgba(52,54,60,1);
            .sexIcon{
              width:0.35rem;
              height:0.35rem;
              background:rgba(245,109,160,1);
              border-radius:50%;
              @include  bg-image('~@/assets/icon/sex_woMan');
            }
          }
          .bottomTittle{
            display:flex;
            height:50%;
            align-items: center;
            font-size:0.32rem;
            font-weight:bold;
            color:rgba(153,153,153,1);
          }
        }
        /*右侧图标*/
        .rightIcon{
          flex:1;
          display:flex;
          align-items: center;
          justify-content: flex-end;
          .icon_go{
            width:0.17rem;
            height:0.31rem;
            @include bg-image('~@/assets/icon/icon_go');
          }
        }
      }
    }
  }
</style>
