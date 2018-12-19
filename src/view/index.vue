<template>
  <div>
    <router-view></router-view>
    <footNav></footNav>
  </div>
</template>

<script>
  import footNav from '@/components/footNav.vue'     //头部卡片
    export default {
        name: "index",
      components:{
        footNav
      }
    }
</script>

<style scoped>

</style>
