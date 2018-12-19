<template>
  <!--我的课程-->
    <div class="MyCourse">
      <headerBack title="课程列表"></headerBack>

      <betterScroll class="wrapper">
        <template v-for="num of 20">
          <!--课程item-->
          <router-link tag="div" :to="{path:'/CourseDetails'}" class="courseItem">
            <img class="courseImg" src="~@/assets/images/courseImg.png" alt="">
            <div class="rightInfo">
              <div class="leftCon">
                <div class="topTittle">
                  钢琴陪练
                </div>
                <div class="bottomTittle">
                  课时数：40
                </div>
              </div>
              <div class="rightIcon">
                <div class="icon_go"></div>
              </div>
            </div>
          </router-link>
        </template>
      </betterScroll>
    </div>
</template>


<script>
    export default {
        name: "MyCourse",
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .MyCourse{
    .wrapper {
      overflow: scroll;
      position: absolute;
      top: 1.17rem;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom:10px;
    }
    .courseItem{
      padding:0.39rem 0.43rem 0.37rem 0.43rem;
      @include  border-1p(rgba(238,238,238,1));
      display:flex;
      /*课程图片*/
      .courseImg{
        display:block;
        width:2.48rem;
        height:1.52rem;
        margin-right:0.29rem;
        border-radius:0.11rem;
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
            font-size:0.40rem;
            font-weight:300;
            color:rgba(75,80,90,1);
          }
          .bottomTittle{
            display:flex;
            height:50%;
            align-items: center;
            font-size:0.32rem;
            font-weight:300;
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
