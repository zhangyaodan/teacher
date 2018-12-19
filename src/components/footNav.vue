<template>
  <div class="footNav">
    <ul class="footbar">
      <router-link class="icon tab_home" tag="li" :to="{path:'/'}" exact active-class="tab_home_active">首页</router-link> <!-- 首页 -->
      <router-link class="icon tab_news" tag="li" :to="{path:'/News'}" exact active-class="tab_news_active" >消息</router-link> <!-- 课程 -->
      <router-link class="icon tab_mine" tag="li" :to="{path:'/Mine'}" exact  active-class="tab_mine_active">我的</router-link> <!-- 我的 -->
    </ul>
  </div>
</template>

<script>
    export default {
        name: "footNav"
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .footNav{
    background:rgba(255,255,255,1);
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    .footbar{
      display: flex;
      justify-content: space-around;
      @include border-1p-top(rgba(206, 206, 206, 1));
      height:1.32rem;
      margin:0.00rem;
      padding:0.00rem;
      .icon {
        display: inline-block;
        flex: 1;
        padding: 0.80rem 0 0 0;
        font-size:0.27rem;
        text-align: center;
      }
      @each $iconNormal in tab_home, tab_news, tab_mine {
        .#{$iconNormal} {
          background: url("~@/assets/icon/#{$iconNormal}.png");
          background-size: 0.56rem 0.56rem;
          background-repeat: no-repeat;
          background-position: center 0.13rem;
        }
      }
      @each $iconActive in tab_home_active, tab_news_active, tab_mine_active
      {
        .#{$iconActive} {
          background: url("~@/assets/icon/#{$iconActive}.png");
          background-size: 0.96rem 0.87rem;
          background-repeat: no-repeat;
          background-position: center 0.13rem;
          color: green;
        }
      }
      @media (-webkit-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        @each $iconNormal in tab_home, tab_news, tab_mine {
          .#{$iconNormal} {
            background: url("~@/assets/icon/#{$iconNormal}@2x.png");
            background-size: 0.56rem 0.56rem;
            background-repeat: no-repeat;
            background-position: center 0.13rem;
          }
        }
        @each $iconActive in tab_home_active, tab_news_active, tab_mine_active
        {
          .#{$iconActive} {
            background: url("~@/assets/icon/#{$iconActive}@2x.png");
            background-size: 0.96rem 0.87rem;
            background-repeat: no-repeat;
            background-position: center 0.13rem;
            color: green;
          }
        }
      }
    }
  }

</style>
