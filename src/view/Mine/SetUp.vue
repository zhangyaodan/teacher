<template>
    <!--设置页面-->
  <div class="SetUp">
    <headerBack title="我的"></headerBack>
    <!--灰色地带-->
    <div class="grayBlock"></div>
    <!--item条目-->
    <div class="item">
      <div class="leftCon">
        当前版本
      </div>
      <div class="rightCon">
        1.0.0
      </div>
    </div>
    <router-link tag="div" :to="{path:'/Agreement'}" class="item">
      <div class="leftCon">
        用户协议
      </div>
      <div class="rightIcon">
        <div></div>
      </div>
    </router-link>
    <div class="item">
      <div class="leftCon">
        清楚缓存
      </div>
      <div class="rightIcon">
        <span>1.3M &nbsp;</span><div></div>
      </div>
    </div>
    <!--退出-->
    <div class="signOut" >
      <div class="greenBlock" @click="signOut">退出当前账号</div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: "SetUp",
      components: {
      },
      data(){
          return {
            signOutStatus:false
          }
      },
      methods:{
        ...mapMutations(['CLEARTOKEN']),
          // 退出当前账号
        signOut(){
          this.$dialog.confirm({
            message: '确定退出吗？'
          }).then(() => {
            this.CLEARTOKEN();
            this.$router.push('/Login');
          }).catch(() => {
            // on cancel
          });

        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .SetUp{
    /*item条目*/
    .item{
      height:1.25rem;
      line-height: 1.25rem;
      padding:0.00rem 0.41rem 0.00rem 0.55rem;
      font-size:0.43rem;
      font-family:PingFangSC-Light;
      font-weight:300;
      @include  border-1p(rgba(238,238,238,1));
      .leftCon{
        float:left;
        height:1.25rem;
        color:rgba(75,80,90,1);
      }
      .rightCon{
        float:right;
        height:1.25rem;
        color:rgba(132,135,141,1);
      }
      .rightIcon{
        float:right;
        height:1.25rem;
        display:flex;
        align-items: center;
        color:rgba(131,134,140,1);
        div{
          width:0.17rem;
          height:0.31rem;
          @include bg-image('~@/assets/icon/icon_go');
        }
      }
    }
    /*退出*/
    .signOut{
      position:fixed;
      width:100%;
      left:0.00rem;
      bottom:2.67rem;
      .greenBlock{
        width:9.15rem;
        height:1.17rem;
        line-height:1.17rem;
        text-align: center;
        margin:0.00rem auto;
        background:linear-gradient(90deg,rgba(39,249,180,1),rgba(11,204,150,1));
        font-size:0.45rem;
        font-weight:bold;
        color:rgba(255,255,255,1);
        box-shadow:0.00rem 0.11rem 0.17rem 0.00rem rgba(8,175,128,0.2);
        border-radius:0.11rem;

      }
    }
    /*退出提示*/
    .signOutInfo{
      font-size:0.48rem;
      color:rgba(41,44,50,1);
      text-align: center;
    }
  }
</style>
