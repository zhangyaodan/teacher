<template>
  <!--用户协议-->
  <div class="Agreement" v-if="isShowProtocol">
    <headerBack title="用户协议"></headerBack>
    <!--内容区域-->
    <div class="infoCon">
      <p class="title">
        【首部及导言】
      </p>
      <p class="conInfo">
        欢迎您使用腾讯课堂服务（以下简称：“本服务”）！为使用 本服务，您应当阅读并遵守《腾讯课堂服务协议》（以下称 “本协议”）、 《腾讯服务协议》、 《QQ号码规则》、 《Q Q软件许可及服务协议》、 《QQ群服务协议》、 《财付通 服务协议》、 《快捷支付服务协议》、 《微信支付用户服 务协议》、 《微信电子商务服务协议》等相关协议及业务规 则。请您务必审慎阅读、充分理解各条款内容，特别是限制 或免除责任的相应条款，以及开通或使用某项服务的单独协 议，并选择接受或不接受。限制或免除责任条款可能以加粗 形式提示您注意。除非您已阅读并接受本协议所有条款，否 则您无权使用本服务。您在本服务中进行的支付、添加、使 用等行为即视为您已阅读并同意受本协议的约束。如果您未 满18周岁，请在法定监护 人的陪同下阅读本协议，并在法 定监护人的指导下使用本服务。
      </p>

      <p class="title">
        一、 【协议范围】
      </p>
      <p class="conInfo">
        本协议是您（以下也称“用户”）、腾讯、财付通公司、课程 开发者等之间关于您使用本服务所涉相关事项的法律协议。
      </p>

      <p class="title">
        二、 【术语定义】
      </p>
      <p class="conInfo">
        如无特别说明，下列术语在本协议中的含义为： 2.1.课程发布者：指经有效注册、申请后，将其享有相应权利
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { constants } from 'zlib';
export default {
  name: "Agreement",

  computed: {
    ...mapState({
      isShowProtocol: ({ register }) => register.isShowProtocol
    })
  },
  watch: {
    isShowProtocol(val, oldVal) {
    }
  }
}
</script>

<style scoped lang="scss">
.Agreement {
  position: absolute;
  top: 0;
  background: white;
  .infoCon {
    padding: 0.55rem 0.43rem 0.23rem 0.45rem;
    .title {
      font-size: 0.37rem;
      color: rgba(46, 47, 55, 1);
      margin-bottom: 0.33rem;
    }
    .conInfo {
      line-height: 0.59rem;
      font-size: 0.35rem;
      color: rgba(132, 133, 139, 1);
      margin-bottom: 0.72rem;
    }
  }
}
</style>
