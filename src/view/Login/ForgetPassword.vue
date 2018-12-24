<template>
    <div>
        <headerBack title="找回密码"></headerBack>
        <div class="infoCon">
            <div class="itemItem">
                <div class="leftTitle">+86</div>
                <div class="middleInfo">
                  <input placeholder="请输入手机号"  name="phone"  v-validate="'required|phone'"  data-vv-as="手机号" v-model="mobile" type="text">
                </div>
            </div>
            <div class="errorShow" v-show="errors.has('phone')">
              <span  class="help is-danger">{{ errors.first('phone') }}</span>
            </div>
            <div class="itemItem">
                <div class="leftTitle">验证码</div>
                <div class="middleInfo">
                    <input name="code"  v-validate="'required|alpha_num'"  data-vv-as="验证码" v-model="code" placeholder="短信验证码" type="text">
                </div>
                <div class="rightInfo">
                  <span v-if="codeShow" @click="sendCode">发送验证码</span>
                  <span v-else>{{timeNum}}&nbsp;s</span>
                </div>
            </div>
            <div class="errorShow" v-show="errors.has('code')">
              <span  class="help is-danger">{{ errors.first('code') }}</span>
            </div>
            <!--输入密码-->
            <div class="itemItem">
                <div class="leftTitle">新密码</div>
                <div class="middleInfo">
                    <input data-vv-as="新密码" v-model="newpass"  v-validate="'required|min:6'"  maxlength="16" name="pass" placeholder="请输入登录密码" :type="eyeType?'text':'password'"> </div>
                <div class="rightIcon" @click="eyeType=!eyeType">
                    <div :class="{'openEye':eyeType,'closeEye':!eyeType}"></div>
                </div>
            </div>
            <div class="errorShow" v-show="errors.has('pass')">
              <span  class="help is-danger">{{ errors.first('pass') }}</span>
            </div>
            <!--确定-->
            <div class="saveOk" @click="updatePassword">确定</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    name: '',
    data() {
        return {
          eyeType: false,      //默认隐藏密码
          mobile:'',   //手机号
          code:'',   //验证码
          prphone:'86',
          codeShow:true,  //默认发送验证码显示
          timeNum:60,    //默认倒计时从60开始
          timeOut:null,    //计时器
          newpass:'',   //新密码
        }
    },
    created() {
    },
    methods: {
        ...mapActions([
            'resetTeacherPass',
            'sendUpdatePassMsg'
        ]),
      // 发送验证码
      sendCode(){
          if(this.mobile==''){
            return;
          }
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
              domain:'mls',
              newpass:this.newpass
            }
            this.resetTeacherPass(obj).then(data=>{
              this.$toast('密码修改成功')
            }).catch(err=>{
              this.$toast(err.info)
            })
          }
        })

      }
    }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/css/mixin";
.infoCon {
  padding: 0rem 0.56rem;
  .errorShow{
    height:0.6rem;
    line-height:0.6rem;
    padding-left:0.87rem;
    color:red;
    clear:both;
  }
  /*手机号item*/
  .leftTitle {
    font-size: 0.37rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(52, 54, 60, 1);
    margin-right: 0.51rem;
    width: 2rem;
  }
  .middleInfo {
    font-size: 0.37rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(119, 119, 119, 1);
    flex: 1;
    input {
      outline: none;
      border: none;
      font-size: 0.37rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      line-height: 0.48rem;
      width: 2.67rem;
    }
    /*区号*/
    span {
      font-size: 0.37rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(52, 54, 60, 1);
    }
  }
  /*获取验证码*/
  .rightInfo {
    text-align: right;
    font-size: 0.37rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(4, 189, 138, 1);
  }
  /*隐藏密码*/
  .closeEye {
    height: 0.51rem;
    width: 0.51rem;
    @include bg-image("~@/assets/icon/login/icon_closeEye");
  }
  /*显示密码*/
  .openEye {
    height: 0.51rem;
    width: 0.51rem;
    @include bg-image("~@/assets/icon/login/icon_openEye");
  }
  /*普通item*/
  .itemItem {
    height: 1.31rem;
    display: flex;
    align-items: center;
    @include border-1p(rgba(230, 230, 230, 1));
  }

  /*确定按钮*/
  .saveOk {
    background: linear-gradient(
      90deg,
      rgba(39, 249, 180, 1),
      rgba(11, 204, 150, 1)
    );
    box-shadow: 0px 10px 26px 0px rgba(8, 175, 128, 0.28);
    width: 8.89rem;
    height: 1.17rem;
    line-height: 1.17rem;
    text-align: center;
    margin: 0.55rem auto 0rem;
    border-radius: 0.05rem;
    font-size: 0.45rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
