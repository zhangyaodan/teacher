<template>
    <!--修改手机号-->
  <div class="phoneChange">
    <headerBack title="修改手机号"></headerBack>
    <div class="infoCon">
      <!--手机号item-->
      <div class="phoneItem">
        <div class="leftTitle">当前手机号</div>
        <div class="middleInfo">15972112481</div>
      </div>

      <!--itemItem-->
      <div class="itemItem">
        <div class="leftTitle">新手机号</div>
        <div class="middleInfo">
          <span>+86</span>&nbsp;&nbsp;<input placeholder="请输入手机号" type="text">
        </div>
        <div class="rightInfo">获取验证码</div>
      </div>

      <div class="itemItem">
        <div class="leftTitle">输入验证码</div>
        <div class="middleInfo">
          <input placeholder="验证码" type="text">
        </div>
      </div>

      <!--确定-->
      <div class="saveOk">确定</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PhoneChange"
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .phoneChange{
    .infoCon{
      padding:0.00rem 0.56rem;
      /*手机号item*/
      .phoneItem{
        height:1.55rem;
        display:flex;
        align-items: center;
        @include border-1p(rgba(230,230,230,1));
      }
      .leftTitle{
        font-size:0.37rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(52,54,60,1);
        margin-right:0.51rem;
        width:2.00rem;
      }
      .middleInfo{
        font-size:0.37rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(119,119,119,1);
        flex:1;
        input{
          outline: none;
          border:none;
          font-size:0.37rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(193,194,200,1);
          line-height:0.48rem;
          width:2.67rem;
        }
        /*区号*/
        span{
          font-size:0.37rem;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:rgba(52,54,60,1);
        }
      }
      /*获取验证码*/
      .rightInfo{
        text-align: right;
        font-size:0.37rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(4,189,138,1);
      }

      /*普通item*/
      .itemItem{
        height:1.31rem;
        display:flex;
        align-items: center;
        @include border-1p(rgba(230,230,230,1));

      }

      /*确定按钮*/
      .saveOk{
        width:8.89rem;
        height:1.17rem;
        line-height: 1.17rem;
        text-align: center;
        margin:0.55rem auto 0.00rem;
        background:rgba(209,209,209,1);
        border-radius:0.05rem;
        font-size:0.45rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
