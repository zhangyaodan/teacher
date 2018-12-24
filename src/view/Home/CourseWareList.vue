<template>
  <!--课件详情列表-->
    <div class="courseWareList">
      <headerBack title="我的课件"></headerBack>

      <betterScroll class="wrapper">

        <!--灰色地带-->
        <div class="grayBlock"></div>
        <template v-if="fromType=='add'">
          <van-checkbox-group v-model="result">
            <van-cell-group>
              <van-cell
                v-for="item in list"
                clickable
                :key="item"
                :title="`复选框 ${item}`"
                @click="toggle(index)"
              >
                <van-checkbox :name="item" ref="checkboxes" />
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </template>
        <template v-for="(item,index) of 20"  v-else>
          <courseWareItem :type="false" imgType="excel"></courseWareItem>
        </template>
      </betterScroll>

    </div>
</template>

<script>
  import courseWareItem from '@/components/home/courseWareItem.vue'
  import { mapState, mapActions, mapMutations } from 'vuex';
  import { Checkbox, CheckboxGroup,Cell, CellGroup } from 'vant';
    export default {
        name: "courseWareList",
      components:{
        courseWareItem,
        'van-cell-group':CellGroup,
        'van-cell':Cell,
        'van-CheckboxGroup':CheckboxGroup,
        'van-Checkbox':Checkbox
      },
      data(){
        return {
          pagenum:1,   //当前页码
          filetype:0, //0机构使用  1老师使用 2官方私有 3官方公共
          fatherid:0,   //父级id
          limit:10,  //每页数量
          listInfo:[],  //数据列表
          fromType:'',  //判断是否是添加课件
          list:[2,3,4,5,6,7,78,6,4,33,33]
        }
      },
      created(){
          // 父级id
        this.fatherid = this.$route.query.fatherid
        // 文件类型
        this.filetype = this.$route.query.filetype
        // 是否是添加课件
        this.fromType = this.$route.query.fromType
        // 获取课件列表
        this.getFileLists();
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
            fatherid:this.fatherid,     //父级文件夹id  默认为0
            teahcerid:this.uid
          }
          this.getFileList(obj).then(res=>{
            // 获取到接口数据
            this.listInfo = res.data
          });
        },
        toggle(index) {
          this.$refs.checkboxes[index].toggle();
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
