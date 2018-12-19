<template>
  <!--我的课件-->
  <div>
    <headerBack title="我的课件"></headerBack>
    <betterScroll class="wrapper">
      <!--灰色地带-->
      <div class="grayBlock"></div>
      <courseWareItem v-for="(num,index) of 20"  :key="index"></courseWareItem>
    </betterScroll>
  </div>
</template>

<script>
  import courseWareItem from '@/components/home/courseWareItem.vue'
    export default {
        name: "MyCourseware",
      components:{
        courseWareItem
      }
    }
</script>

<style scoped lang="scss">
  .wrapper {
    overflow: scroll;
    position: absolute;
    top: 1.17rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom:10px;
  }
</style>
