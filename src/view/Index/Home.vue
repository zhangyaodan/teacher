<template>
  <div class="Home">
    <!--头部卡片-->
    <mineCard></mineCard>
    <!--今日课表-->
    <!--头部标题-->
    <div class="headerTitle">
      <div class="title">
        今日陪练
      </div>
      <div class="timeShow">
        {{date}}&nbsp;&nbsp;{{day}}
      </div>
    </div>
    <betterScroll class="wrapper">
      <!--课表信息-->
      <div class="courseItem" v-for="(item,index) of listArr" @click="toRoute(index)">
        <img class="courseImg" src="~@/assets/images/courseImg.png" alt="">
        <div class="rightCon">
          <div class="title">【课时{{item.sort}}】{{item.coursename}}</div>
          <div class="teacher">老师：{{item.nickname}}</div>
          <div class="time">
            <div class="leftTime">
              {{item.starttime.substring(11)}} -- {{item.endtime.substring(11)}}
            </div>
            <div v-if="item.classstatus == 0" class="courseStatus0">
              已结束
            </div>
            <div v-else-if="item.classstatus == 1" class="courseStatus1" @click.stop="intoClassroom(item.id)">
              进教室
            </div>
            <div v-else class="courseStatus2">
              未开始
            </div>

          </div>
        </div>
      </div>
    </betterScroll>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import mineCard from '@/components/home/mineCard.vue'     //头部卡片
import { formatDateTime } from '@/utils/index.js'
export default {
  name: "Home",
  components: {
    mineCard,
  },
  data() {
    return {
      day: '周' + '日一二三四五六'.charAt(new Date().getDay()),  //周几
      // date: formatDateTime(new Date()),  //年-月-日
      date: '',  //年-月-日
      datecode:1,     //0 为开始 1 已结束 2全部
      pagenum: 1,   //默认请求第一页
      listArr: [],
    }
  },
  created() {
    // 获取今日陪练
    this.getData()
  },
  methods: {
    ...mapActions([
      'getLessonsByall', 'intoClassroom'
    ]),
    ...mapMutations(['SETLESSONSBYONE']),
    // 前往课表详情页
    toRoute(index) {
      this.listArr[index].date = this.date
      // 保存当前选中课表的信息
      this.SETLESSONSBYONE(this.listArr[index])
      this.$router.push('/TimeTableInfo')
    },
    intoClassroom(id) {
      this.intoClassroom({ 'toteachid': id }).then(res => {
        if (res.code === 0) {
          window.open(res.data.url, `_blank`)
        }
      }).catch(err => {
          this.$toast(err.info)
      })
    },
    getData() {
      // 获取今日陪练信息
      let obj = {
        date:this.date,
        datecode: this.datecode,
        pagenum: this.pagenum
      }
      this.getLessonsByall(obj).then(res => {
        if (res.code === 0) {
          let arr = res.data.data
          if (arr.length != 0) {
            arr.map(e => {
                // 判断是否是今天的数据
              // if (e.time == this.date) {
                this.listArr = e.data
              // }
            })
          } else {
            this.listArr = []
          }
        }
      }).catch(err => {

      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/mixin";
.Home {
  .wrapper {
    overflow: scroll;
    position: absolute;
    top: 8.5rem;
    left: 0;
    right: 0;
    bottom: 1.32rem;
  }
  /*课表标题*/
  .headerTitle {
    clear: both;
    height: 1.15rem;
    line-height: 1.15rem;
    padding: 0rem 0.43rem 0rem 0.56rem;
    background: rgba(255, 255, 255, 1);
    @include border-1p(rgba(238, 238, 238, 1));
    .title {
      float: left;
      height: 1.15rem;
      font-size: 0.37rem;
      font-family: PingFangSC-Regular;
      font-weight: bold;
      color: rgba(71, 74, 81, 1);
    }
    .timeShow {
      float: right;
      font-size: 0.27rem;
      font-family: PingFangSC-Regular;
      color: rgba(71, 74, 81, 1);
    }
  }
  /*课表单条信息*/
  .courseItem {
    @include border-1p(rgba(238, 238, 238, 1));
    padding: 0.4rem 0.43rem 0.4rem 0.43rem;
    display: flex;
    /*课表图片*/
    .courseImg {
      display: block;
      width: 2.88rem;
      height: 1.92rem;
      border-radius: 0.11rem;
      margin-right: 0.41rem;
    }
    /*右侧课表信息*/
    .rightCon {
      flex: 1;
      height: 1.92rem;
      /*标题*/
      .title {
        margin-bottom: 0.31rem;
        font-size: 0.37rem;
        font-family: Adobe Heiti Std R;
        font-weight: normal;
        color: rgba(75, 80, 90, 1);
      }
      /*老师*/
      .teacher {
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-bottom: 0.45rem;
      }
      /*时间*/
      .time {
        height: 0.37rem;
        line-height: 0.37rem;
        overflow: hidden;
        .leftTime {
          height: 0.37rem;
          float: left;
          font-size: 0.35rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(11, 204, 150, 1);
        }
        .courseStatus0 {
          float: right;
          height: 0.37rem;
          font-size: 0.35rem;
          font-family: PingFangSC-Light;
          color: rgba(153, 153, 153, 1);
        }
        .courseStatus1 {
          @extend .courseStatus0;
          width: 1.71rem;
          height: 0.64rem;
          line-height: 0.64rem;
          color: white;
          background: rgba(55, 210, 151, 1);
          border-radius: 0.05rem;
          text-align: center;
          margin-top: -0.13rem;
        }
        .courseStatus2 {
          @extend .courseStatus0;
        }
      }
    }
  }
}
</style>
