<template>
  <!--我的学生-->
  <div class="MyStudent">
    <!--头部返回-->
    <headerBack title="我的学生"></headerBack>

    <betterScroll class="wrapper">
      <!--灰色地带-->
      <div class="grayBlock"></div>
      <!--学生item-->
      <div v-for="item of listArr" class="courseItem">
        <img class="courseImg" :src="item.imageurl || userPhoto" alt="" @error="imageError">
        <div class="rightInfo">
          <div class="leftCon">
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
          <div class="rightIcon">
            <div class="icon_go"></div>
          </div>
        </div>
      </div>
    </betterScroll>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import userPhoto from '@/assets/images/userImg.png'
export default {
  name: "MyStudent",
  data() {
    return {
      imageError: 'this.src="' + userPhoto + '"',
      userPhoto,
      listArr: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions([
      'getUserList'
    ]),
    getData() {
      let params = {
        'mobil': '',
        'nickname': '',
        'pagenum': 1,
      }
      this.getUserList(params).then(res => {
        if (res.code === 0) {
          console.log(res)
          this.listArr = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/mixin";
.MyStudent {
  .wrapper {
    overflow: scroll;
    position: absolute;
    top: 1.21rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 10px;
  }
  .courseItem {
    padding: 0.31rem 0.55rem 0.31rem 0.55rem;
    @include border-1p(rgba(238, 238, 238, 1));
    display: flex;
    /*课程图片*/
    .courseImg {
      display: block;
      width: 1.15rem;
      height: 1.15rem;
      margin-right: 0.25rem;
      border-radius: 50%;
    }

    /*右侧内容*/
    .rightInfo {
      flex: 1;
      display: flex;
      .leftCon {
        display: flex;
        flex-direction: column;
        .topTittle {
          display: flex;
          height: 50%;
          align-items: center;
          font-size: 0.37rem;
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
          height: 50%;
          align-items: center;
          font-size: 0.32rem;
          font-weight: bold;
          color: rgba(153, 153, 153, 1);
        }
      }
      /*右侧图标*/
      .rightIcon {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .icon_go {
          width: 0.17rem;
          height: 0.31rem;
          @include bg-image("~@/assets/icon/icon_go");
        }
      }
    }
  }
}
</style>
