<template>
    <div>
        <headerBack title="找回密码"></headerBack>
        <div class="infoCon">
            <div class="itemItem">
                <div class="leftTitle">+86</div>
                <div class="middleInfo">
                    <input placeholder="请输入手机号" type="text">
                </div>
            </div>
            <div class="itemItem">
                <div class="leftTitle">验证码</div>
                <div class="middleInfo">
                    <input placeholder="短信验证码" type="text">
                </div>
                <div class="rightInfo">获取验证码</div>
            </div>
            <!--输入密码-->
            <div class="itemItem">
                <div class="leftTitle">新密码</div>
                <div class="middleInfo">
                    <input placeholder="请输入登录密码" :type="eyeType?'text':'password'"> </div>
                <div class="rightIcon" @click="eyeType=!eyeType">
                    <div :class="{'openEye':eyeType,'closeEye':!eyeType}"></div>
                </div>
            </div>

            <!--确定-->
            <div class="saveOk">确定</div>
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
        }
    },
    created() {
        this.getData();
    },
    methods: {
        ...mapActions([
            'resetTeacherPass',
        ]),
        getData() {
            let params = {
                'mobile': '18241893379',
                'code': '33',
                'domain': '1',
                'newpass': '123456'
            }
            this.resetTeacherPass(params).then(res => {

            })
        }


    }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/css/mixin";
.infoCon {
  padding: 0rem 0.56rem;
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
      color: rgba(193, 194, 200, 1);
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
