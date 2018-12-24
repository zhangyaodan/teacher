<template>
  <!--我的课表-->
  <div class="MyTimeTable">
    <headerBack title="我的课表" :borderStatus='false'></headerBack>
    <!--顶部tab-->
    <topTab @changeFatherStatus="changeFatherStatus">
      <span slot="left">待上课</span>
      <span slot="right">已结束</span>
    </topTab>

    <betterScroll class="wrapper">
      <!--灰色地带-->
      <div class="grayBlock"></div>
      <template v-for="(item,key) of listArr">
        <!--课表title-->
        <div class="tableTitle">
          {{date}}&nbsp;&nbsp;{{day}}
        </div>
        <!--课表信息-->
        <router-link tag="div" :to="{path:'/TimeTableInfo'}" class="courseItem">
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
        </router-link>
        <div class="grayBlock"></div>
      </template>
    </betterScroll>

  </div>
</template>

<script>
import topTab from '@/components/topTab';
import { formatDateTime } from '@/utils/index.js'
import { mapActions } from 'vuex';
export default {
  name: "MyTimeTable",
  data() {
    return {
      day: '周' + '日一二三四五六'.charAt(new Date().getDay()),  //周几
      date: formatDateTime(new Date()),  //年-月-日
      // date: '2018-12-19',
      pagenum: 1,   //默认请求第一页
      listArr: []
    }
  },
  components: {
    topTab
  },
  created() {
    this.getData('', 0)
  },
  methods: {
    ...mapActions([
      'getLessonsByall',
      'intoClassroom'
    ]),
    changeFatherStatus(val) {
      if (val == 'left') {
        this.getData('', 0)
      } else {
        this.getData('', 1)
      }
    },
    intoClassroom(id) {
      this.intoClassroom({ 'toteachid': id }).then(res => {
        if (res.code === 0) {
          window.open(res.data.url, `_blank`)
        } else {
          // this.$Message.warning(res.info);
        }
      }).catch(err => {

      })
    },
    getData(date, datecode) {
      // 获取今日陪练信息
      let obj = {
        date,
        datecode,
        pagenum: this.pagenum
      }
      this.getLessonsByall(obj).then(res => {
        if (res.code === 0) {
          let arr = res.data.data
          if (arr.length != 0) {
            arr.map(e => {
              if (e.time == this.date) {
                this.listArr = e.data
              }
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
.MyTimeTable {
  .wrapper {
    overflow: scroll;
    position: absolute;
    top: 2.44rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  /*课表title*/
  .tableTitle {
    height: 0.99rem;
    line-height: 0.99rem;
    padding-left: 0.56rem;
    font-size: 0.35rem;
    color: rgba(71, 74, 81, 1);
    @include border-1p(rgba(238, 238, 238, 1));
  }

  /*课表单条信息*/
  .courseItem {
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
        height: 0.64rem;
        line-height: 0.64rem;
        .leftTime {
          height: 0.64rem;
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
.grayBlock:last-child {
  height: 0;
}
</style>
