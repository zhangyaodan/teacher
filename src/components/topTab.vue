<template>
  <div class="topTab">
    <div class="leftOut">
      <div :class="['innerTab',tabStatus=='left'?'selectedTab':'defaultTab']" @click="changeStatus('left')">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="rightOut">
      <div :class="['innerTab',tabStatus=='right'?'selectedTab':'defaultTab']" @click="changeStatus('right')">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topTab",
  data() {
    return {
      tabStatus: 'left',

    }
  },
  methods: {
    changeStatus(val) {
      this.tabStatus = val
      this.$emit('changeFatherStatus',val)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/mixin";
/*头部tab*/
.topTab {
  display: flex;
  height: 1.23rem;
  .leftOut {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .rightOut {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .innerTab {
    width: 2.32rem;
    height: 1.23rem;
    line-height: 1.23rem;
    text-align: center;
    box-sizing: border-box;
  }
  /*默认状态*/
  .defaultTab {
    font-size: 0.43rem;
    color: rgba(97, 99, 111, 1);
  }
  /*选中状态*/
  .selectedTab {
    font-size: 0.43rem;
    color: rgba(4, 189, 138, 1);
    @include border-1p(rgba(11, 204, 150, 1), 2);
  }
}
</style>
