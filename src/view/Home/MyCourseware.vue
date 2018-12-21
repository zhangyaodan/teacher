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
  import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: "MyCourseware",
      components:{
        courseWareItem
      },
      data(){
          return {
            pagenum:1,   //当前页码
          }
      },
      mounted(){
        // 获取课件列表
        this.getFileList();
      },
      methods:{
        ...mapActions([
          'getFileList'
        ]),
        // 获取课件列表
        getFileList(){
          let obj ={
            showname:'',
            filetype:1,   //0机构使用  1老师使用 2官方私有 3官方公共
            pagenum:1,
            limit:10,
            fatherid:0,     //文件夹id  默认为0
            teahcerid:this.uid
          }
          this.getFileList(obj);
        }
      },
      ...mapState({
        uid:({login})=>login.uid,
      })
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
