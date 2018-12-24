<template>
  <!--课表详情-->
  <div class="timeTableInfo">
    <headerBack title="课表详情"></headerBack>
    <!--课件所属班级-->
    <div class="courseInfo">
      <div class="courseName">
        <span class="courseTitle">{{listPeriodinfo.coursename}}</span>
      </div>

      <div class="courseItem">
        <div class="itemImg teacherImg"></div>
        <span class="itemTittle">老师：{{LessonsByOne.nickname}}</span>
      </div>
      <div class="courseItem">
        <div class="itemImg courseImg"></div>
        <span class="itemTittle">课时：{{listPeriodinfo.periodname}}</span>
      </div>
    </div>
    <!--灰色地带-->
    <div class="grayBlock"></div>

    <!--课件-->
    <div class="wareInfo">
      <div class="wareTitle">课件</div>
      <div class="wareItem" v-for="(el, i) in ware.data" :key="i" v-if="ware && ware.data">
        {{el.showname}}
      </div>
      <div class="addWare">
        <router-link tag="div" :to="{path:'/MyCourseware',query:{fromType:'add'}}">添加课件</router-link>
      </div>
    </div>

    <!--灰色地带-->
    <div class="grayBlock"></div>

    <!--学生列表-->

    <div class="studentInfo">
      <div class="studentTitle">
        学生
      </div>
      <template v-for="(item,index) of studentlists">
        <div class="studentItem">
          <img class="studentImg" :src="item.imageurl || userPhoto" alt="" @error="imageError">
          <div class="rightCon">
            <div class="leftInfo">
              <div class="topTittle">{{item.nickname}} &nbsp;
                <div class='menImg' v-if="item.sex == 1"></div>
                <div class='womenImg' v-if="item.sex == 2"></div>
              </div>
              <div class="bottomTittle">
                <span>{{item.country}}</span>
                &nbsp;&nbsp;
                <span>{{item.province}}</span>
                &nbsp;&nbsp;
                <span>{{item.city}}</span>
                &nbsp;&nbsp;
                <span>{{item.age}}岁</span>
              </div>
            </div>
            <div class="rightBlock" @click="toRoute(index)">
              <div>评价</div>
            </div>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import userPhoto from '@/assets/images/userImg.png'
export default {
  name: "TimeTableInfo",
  data() {
    return {
      imageError: 'this.src="' + userPhoto + '"',
      userPhoto,
      listPeriodinfo: {},
      studentlists: [],  //学生列表
      ware: {}
    }
  },
  computed: {
    ...mapState({
      LessonsByOne: ({ home }) => home.LessonsByOne
    })
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions([
      'getPeriodinfo'
    ]),
    ...mapMutations(['SETSTUDENT']),
    toRoute(index) {
      this.SETSTUDENT(this.studentlists[index])
      this.$router.push('/Evaluate')
    },
    // 获取课时详情
    getData() {
      let params = {
        'toteachtimeid': this.LessonsByOne.id,
        'starttime': this.LessonsByOne.starttime,
        'endtime': this.LessonsByOne.endtime,
        'date': this.LessonsByOne.date
      }
      this.getPeriodinfo(params).then(res => {
        if (res.code === 0) {
          console.log(res)
          let data = res.data;
          // 课表信息
          this.listPeriodinfo = data.listPeriodinfo
          this.studentlists = data.studentlists
          if (data.ware && data.ware.code === 0) {
            // 课件信息
            this.ware = data.ware.data;
          } else {
            // 模拟数据
            this.ware = {};
            this.ware.data = [{
              showname: 'sdsd'
            }, {
              showname: 'sdsdtcbb.ppt'
            }];
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/mixin";
.timeTableInfo {
  /*课程班级介绍*/
  .courseInfo {
    box-sizing: border-box;
    height: 3.05rem;
    padding: 0.52rem 0rem 0rem 0.69rem;
    .courseName {
      height: 0.51rem;
      line-height: 0.51rem;
      margin-bottom: 0.4rem;
      .courseTitle {
        float: left;
        font-size: 0.43rem;
        font-weight: bold;
        color: rgba(60, 60, 65, 1);
        margin-right: 0.27rem;
      }
    }

    /*老师和课时显示*/
    .courseItem {
      height: 0.32rem;
      line-height: 0.32rem;
      padding: 0rem 0rem 0.44rem 0.53rem;

      .itemImg {
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 0.03rem;
        float: left;
        margin-right: 0.21rem;
      }
      .teacherImg {
        @include bg-image("~@/assets/icon/home/icon_teacher");
      }
      .courseImg {
        @include bg-image("~@/assets/icon/home/icon_courseStart");
      }
      .itemTittle {
        font-size: 0.35rem;
        font-weight: bold;
        color: rgba(97, 99, 111, 1);
      }
    }
  }
  /*课件列表展示*/
  .wareInfo {
    .wareTitle {
      height: 1.04rem;
      padding: 0.55rem 0rem 0rem 0.69rem;
      font-size: 0.43rem;
      font-weight: bold;
      color: rgba(60, 60, 65, 1);
      box-sizing: border-box;
    }
    .wareItem {
      height: 1.13rem;
      line-height: 1.13rem;
      padding-left: 1.21rem;
      font-size: 0.35rem;
      color: rgba(97, 99, 111, 1);
      @include border-1p(rgba(238, 238, 238, 1));
    }
    .addWare {
      padding: 0.27rem 0.43rem 0.27rem 0rem;
      overflow: hidden;
      div {
        width: 2.03rem;
        height: 0.75rem;
        line-height: 0.75rem;
        text-align: center;
        border: 1px solid rgba(7, 201, 148, 1);
        border-radius: 0.05rem;
        float: right;
        font-size: 0.37rem;
        font-weight: bold;
        color: rgba(7, 201, 148, 1);
      }
    }
  }

  /*学生列表*/
  .studentInfo {
    padding-bottom: 1.95rem;
    .studentTitle {
      height: 1.17rem;
      box-sizing: border-box;
      padding-left: 0.71rem;
      padding-top: 0.56rem;
      font-size: 0.43rem;
      font-weight: bold;
      color: rgba(60, 60, 65, 1);
    }
    .studentItem {
      padding: 0.27rem 0.56rem 0.27rem 1.24rem;
      display: flex;
      @include border-1p(rgba(238, 238, 238, 1));
      .studentImg {
        display: block;
        width: 1.04rem;
        height: 1.04rem;
        margin-right: 0.15rem;
        border-radius: 50%;
      }
      .rightCon {
        display: flex;
        flex: 1;
        .leftInfo {
          display: flex;
          flex-direction: column;
          .topTittle {
            display: flex;
            align-items: center;
            flex: 1;
            font-size: 0.35rem;
            font-weight: bold;
            color: rgba(52, 54, 60, 1);
            .womenImg {
              display: inline-block;
              width: 0.35rem;
              height: 0.35rem;
              @include bg-image("~@/assets/icon/sex_woMan");
            }
            .menImg {
              display: inline-block;
              width: 0.35rem;
              height: 0.35rem;
              @include bg-image("~@/assets/icon/sex_man");
            }
          }
          .bottomTittle {
            display: flex;
            align-items: center;
            flex: 1;
            font-size: 0.27rem;
            font-weight: bold;
            color: rgba(153, 153, 153, 1);
          }
        }
        .rightBlock {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          div {
            width: 1.44rem;
            height: 0.64rem;
            line-height: 0.64rem;
            text-align: center;
            border: 1px solid rgba(55, 210, 151, 1);
            border-radius: 0.05rem;
            font-size: 0.35rem;
            font-weight: bold;
            color: rgba(55, 210, 151, 1);
          }
        }
      }
    }
  }
}
</style>
