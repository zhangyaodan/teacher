<template>
  <!--课件详情列表-->
    <div class="courseWareList">
      <headerBack title="我的课件"></headerBack>

      <betterScroll class="wrapper">
        <!--灰色地带-->
        <div class="grayBlock"></div>
        <template v-for="(item,index) of 20" >
          <courseWareItem :type="false" imgType="excel"></courseWareItem>
        </template>
      </betterScroll>
    </div>
</template>

<script>
  import courseWareItem from '@/components/home/courseWareItem.vue'
    export default {
        name: "courseWareList",
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
