<template>
    <!--修改密码-->
  <div class="passChange">
    <!--头部导航-->
    <headerBack title="修改密码"></headerBack>
    <div class="infoCon">
      <!--手机号item-->
      <div class="phoneItem">
        <div class="leftTitle">当前手机号</div>
        <div class="middleInfo">{{mobile}}</div>
      </div>

      <!--itemItem-->
      <div class="itemItem">
        <div class="leftTitle">输入验证码</div>
        <div class="middleInfo">
          <input class="codeInput" placeholder="验证码" type="text">
        </div>
        <div class="rightInfo">
          <span v-if="codeShow" @click="sendCode">发送验证码</span>
          <span v-else>{{timeNum}}&nbsp;s</span>
        </div>
      </div>

      <div class="itemItem">
        <div class="leftTitle">新密码</div>
        <div class="middleInfo">
          <input placeholder="请输入新密码" type="text">
        </div>
      </div>

      <div class="itemItem">
        <div class="leftTitle">确认密码</div>
        <div class="middleInfo">
          <input placeholder="请再次输入新密码" type="text">
        </div>
      </div>
      <!--密码提示-->
      <div class="passInfo">密码至少为6位，支持中英文字母、数字、特殊字符</div>
      <!--确定-->
      <div class="saveOk">确定</div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: "PassChange",
      data(){
          return {
            codeShow:true,  //默认发送验证码显示
            timeNum:60,    //默认倒计时从60开始
            timeOut:null,    //计时器
            newpass:'',   //新密码
            repass:'',  //重复密码
            code:'',   //验证码
            prphone:'86',  //区号
          }
      },
      methods:{
        ...mapActions([
          'sendUpdatePassMsg'
        ]),
        // 发送验证码
        sendCode(){
          // 开启倒计时读秒
          this.codeShow = false
          // 开启计时器
          this.startTime()
          // 发送手机号获取code
          let obj = {
            mobile:this.mobile,
            prphone:this.prphone
          }
          this.sendUpdatePassMsg(obj)
        },
        // 开启计时器
        startTime(){
          let that = this
          this.timeOut = setInterval(function(){
            if(that.timeNum>0){
              that.timeNum--
            }else{
              that.codeShow = true
              that.clearTime()
            }
          },1000)
        },
        // 消除计时器
        clearTime(){
          window.clearInterval(this.timeOut)
        },
      },
      computed:{
        ...mapState({
          mobile: ({ login }) => login.mobile,
        })
      },
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .passChange{
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

        }
        /*验证码输入框*/
        .codeInput{
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

      /*密码提示*/
      .passInfo{
        padding-top:0.40rem;
        font-size:0.32rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:0.48rem;
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
