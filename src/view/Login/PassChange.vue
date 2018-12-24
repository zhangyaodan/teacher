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
          <input name="code"  v-validate="'required|alpha_num'"  data-vv-as="验证码" class="codeInput" v-model="code" placeholder="验证码" type="text">
        </div>
        <div class="rightInfo">
          <span v-if="codeShow" @click="sendCode">发送验证码</span>
          <span v-else>{{timeNum}}&nbsp;s</span>
        </div>
      </div>
      <div class="errorShow" v-show="errors.has('code')">
        <span  class="help is-danger">{{ errors.first('code') }}</span>
      </div>
      <div class="itemItem">
        <div class="leftTitle">新密码</div>
        <div class="middleInfo">
          <input placeholder="请输入新密码" name="newpass"  data-vv-as="密码"  v-validate="'required|min:6'" maxlength="16" v-model="newpass" type="text">
        </div>
      </div>
      <div class="errorShow" v-show="errors.has('newpass')">
        <span  class="help is-danger">{{ errors.first('newpass') }}</span>
      </div>
      <div class="itemItem">
        <div class="leftTitle">确认密码</div>
        <div class="middleInfo">
          <input placeholder="请再次输入新密码" data-vv-as="新密码"  v-validate="{'required': 'true', 'is': newpass}" name="repeatPass"  v-model="repass" type="text">
        </div>
      </div>
      <div class="errorShow" v-show="errors.has('repeatPass')">
        <span  class="help is-danger">{{ errors.first('repeatPass') }}</span>
      </div>
      <!--密码提示-->
      <div class="passInfo">密码至少为6位，支持中英文字母、数字、特殊字符</div>
      <!--确定-->
      <div class="saveOk" @click="updatePassword">确定</div>
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
          'sendUpdatePassMsg',
          'updatePass'
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
        // 修改密码
        updatePassword(){
          this.$validator.validate().then(result => {
              if (!result) {
                return;
              }else{
                let obj = {
                  mobile:this.mobile,
                  code:this.code,
                  newpass:this.newpass,
                  repass:this.repass
                }
                this.updatePass(obj).then(data=>{
                  this.$toast('密码修改成功')
                }).catch(err=>{
                  this.$toast(err.info)
                })
              }
          })

        }
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
    .errorShow{
      height:0.6rem;
      line-height:0.6rem;
      padding-left:0.87rem;
      color:red;
      clear:both;
    }
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
        border-radius:0.05rem;

        /*background:rgba(209,209,209,1);*/
        /*font-size:0.45rem;*/
        /*font-family:PingFangSC-Regular;*/
        /*font-weight:400;*/
        /*color:rgba(255,255,255,1);*/

        background:linear-gradient(90deg,rgba(39,249,180,1),rgba(11,204,150,1));
        font-size:0.45rem;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
