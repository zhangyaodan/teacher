<template>
     <!--学生评价列表-->
     <div class="StudentEstimate">
       <headerBack title="评价"></headerBack>
       <!--灰色地带-->
       <div class="grayBlock"></div>
       <!--评价标题综合评分-->
       <div class="studentTitle">
         综合评分：4.8
       </div>

       <betterScroll class="wrapper">

           <!--item-->
           <div class="estimateItem" v-for="item of 25" >
             <div class="imgItem">
               <img class="studentImg" src="~@/assets/images/userImg.png" alt="">
               <div class="studentName">李晓梅</div>
               <div class="startOut">
                 <div v-for="num of 5" :class="['studentStar',num<3?'starBg':'starBorder']"></div>
               </div>
               <div class="time">2018-04-20</div>
             </div>
             <!--学生评价内容-->
             <div class="studentInfo">
               老师讲课深入浅出，知识点讲解很全面，很多疑难问题都得到了解答。儿子说学完这个课程后走路腰不酸腿不疼，上楼梯也不喘气了，真好。
             </div>
           </div>

       </betterScroll>


     </div>

</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: "StudentEstimate",
      data(){
        return {
          pagenum:1,  //默认请求第一页
          limit:20,   //默认一页20条
          allcommit:1,  //'全部1,好评2，中评3,差评4'
        }
      },
      mounted(){
        this.studentEstimate()
      },
      methods:{
        ...mapActions([
          'getAllComment'
        ]),
        // 获取学生评价的列表
        studentEstimate(){
          let obj = {
            pagenum:this.pagenum,
            limit:this.limit,
            allcommit:this.allcommit
          }
          this.getAllComment(obj)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
    .StudentEstimate{
      .wrapper {
        overflow: scroll;
        position: absolute;
        top: 2.54rem;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom:10px;
      }
      .studentTitle{
        box-sizing: border-box;
        height:1.09rem;
        padding:0.52rem 0.00rem 0.00rem 0.55rem;
        font-size:0.40rem;
        font-weight:bold;
        color:rgba(52,54,60,1);
      }
      /*item*/
      .estimateItem{
        height:2.92rem;
        padding:0.32rem 0.55rem 0.00rem 0.00rem;
        @include  border-1p(rgba(238,238,238,1));
        .imgItem{
          padding-left:0.55rem;
          display:flex;
          margin-bottom:0.11rem;
          .studentImg{
            display:block;
            width:1.01rem;
            height:1.01rem;
            border-radius:50%;
            margin-right:0.24rem;
          }
          .studentName{
            display:flex;
            align-items: center;
            font-size:0.40rem;
            font-weight:bold;
            color:rgba(52,54,60,1);
            margin-right:0.36rem;
          }
          .startOut{
            display:flex;
            align-items: center;
            .studentStar{
              height:0.29rem;
              width:0.29rem;
              margin-right:0.20rem;
            }
            .starBg{
              @include bg-image('~@/assets/icon/home/icon_starBg');
            }
            .starBorder{
              @include bg-image('~@/assets/icon/home/icon_starBorder');
            }
          }
          .time{
            flex:1;
            display:flex;
            align-items: center;
            justify-content: flex-end;
            font-size:0.32rem;
            font-weight:300;
            color:rgba(138,139,144,1);
          }

        }
        /*学生评价内容*/
        .studentInfo{
          padding-left:1.81rem;
          font-size:0.32rem;
          font-weight:300;
          color:rgba(138,139,144,1);
          line-height:0.43rem;
        }
      }
    }
</style>
