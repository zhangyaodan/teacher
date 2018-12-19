<template>
    <div>
      <!--课件item-->
      <router-link  tag="div"  :to="{path:'/CourseWareList'}" class="wareItem">
        <div class="leftIconOut">
          <div v-if="imgType=='default'" class="leftIcon leftDefault"></div>
          <div v-else-if="imgType=='world'" class="iconWorld leftDefault"></div>
          <div  v-else-if="imgType=='excel'" class="iconExcel leftDefault"></div>
          <div v-else class="iconPdf leftDefault"></div>
        </div>
        <div class="middleInfo">
          小学四年级数学
        </div>
        <div class="rightIcon" v-if="type">
          <div></div>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "courseWareItem",
      props:{
        type:{
          type:Boolean,
          default:true
        },
        imgType:{
          type:String,
          default:'default'
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  /*课件item*/
  .wareItem{
    height:1.23rem;
    padding:0.00rem  0.55rem 0.00rem 0.55rem;
    display:flex;
    /*padding:*/
    @include  border-1p(rgba(238,238,238,1));
    .leftIconOut{
      display:flex;
      align-items: center;
      .leftDefault{
        width:0.56rem;
        height:0.56rem;
        border-radius:0.05rem;
        margin-right:0.21rem;
      }
      /*文件*/
      .leftIcon{
        @include  bg-image('~@/assets/icon/course_courseWare');
      }
      /*world*/
      .iconWorld{
        @include  bg-image('~@/assets/icon/icon_world');
      }
      /*excel*/
      .iconExcel{
        @include  bg-image('~@/assets/icon/icon_excel');
      }
      /*pdf*/
      .iconExcel{
        @include  bg-image('~@/assets/icon/icon_pdf');
      }
    }
    .middleInfo{
      display:flex;
      align-items: center;
      font-size:0.37rem;
      color:rgba(52,54,60,1);
    }
    .rightIcon{
      display:flex;
      align-items: center;
      justify-content: flex-end;
      flex:1;
      div{
        @include bg-image('~@/assets/icon/icon_go');
        width:0.20rem;
        height:0.35rem;
      }
    }

  }
</style>
