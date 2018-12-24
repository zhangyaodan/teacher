<template>
  <!--我的课件-->
  <div>
    <headerBack title="我的课件" :borderStatus='false'></headerBack>
    <!--顶部tab-->
    <topTab @changeFatherStatus="changeFatherStatus">
      <span slot="left">机构资源</span>
      <span slot="right">智慧琴童</span>
    </topTab>
    <betterScroll class="wrapper">
      <!--灰色地带-->
      <div>
        <courseWareItem v-for="(item,index) of listInfo"   :item="item" :key="index"  @click.native="toSonList(item.fileid)"></courseWareItem>
      </div>
    </betterScroll>
  </div>
</template>

<script>
  import courseWareItem from '@/components/home/courseWareItem.vue'
  import { mapState, mapActions, mapMutations } from 'vuex';
  import topTab from '@/components/topTab';
    export default {
        name: "MyCourseware",
      components:{
        courseWareItem,
        topTab
      },
      data(){
          return {
            pagenum:1,   //当前页码
            filetype:0, //0机构使用  1老师使用 2官方私有 3官方公共
            limit:10,  //每页数量
            listInfo:[],  //数据列表
            fromType:'', //判断是否是添加课件过来的页面
          }
      },
      mounted(){
        // 获取课件列表
        this.getFileLists();
        this.fromType = this.$route.query.fromType
      },
      methods:{
        ...mapActions([
          'getFileList'
        ]),
        // 获取课件列表
        getFileLists(){
          let obj ={
            showname:'',
            filetype:this.filetype,
            pagenum:this.pagenum,
            limit:this.limit,
            fatherid:0,     //文件夹id  默认为0
            teahcerid:this.uid
          }
          this.getFileList(obj).then(res=>{
            // 获取到接口数据
            this.listInfo = res.data
          });
        },
        // tab切换
        changeFatherStatus(val){
          // 每次给列表数据清空
          this.listInfo = []
          // 机构资源
          if(val=='left'){
            this.filetype=0
          }else{
            // 智慧琴童
            this.filetype=1
          }
          // 请求课件信息
          this.getFileLists()
        },
        // 前往二级课件列表
        toSonList(fileid){
          this.$router.push({path:'/CourseWareList',query:{filetype:this.filetype,fatherid:fileid,fromType:this.fromType}})
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
    top: 2.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom:10px;
  }
</style>
