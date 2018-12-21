<template>
    <!--个人中心公共修改页-->
  <div class="LayoutChange">
    <!--头部导航-->
    <headerBack :title="title" :show="true" type="now" @saveInfo="saveInfo">
      保存
    </headerBack>
    <!--灰色地带-->
    <div class="grayBlock"></div>
    <!--内容展示-->
    <div>
      <textarea autofocus="autofocus" v-model="info"  :maxlength="conNum" class="textarea" name="" id=""></textarea>
    </div>
    <div class="numBlock">
      <span v-if="info!=='无'">{{info?info.length:0}}</span>
      <span v-else>0</span>
      / {{conNum}}
    </div>
  </div>

</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: "LayoutChange",
      data(){
          return {
            title:'',   //头部名称
            info:'无',   //修改的内容
            conNum:0,
          }
      },
      methods:{
        ...mapActions([
          'updateTeacherMsg'
        ]),
          // 保存数据
        saveInfo(){
          let obj = {};
          // 如果是昵称修改
          if(this.conNum==6){
            obj.nickname = this.info;
          }else{
            // 个性签名修改
            obj.profile = this.info;
          }
          console.log(obj)
          this.updateTeacherMsg(obj).then(res=>{
            this.$toast('修改成功')
          }).catch(err=>{
            this.$toast(err.info)
          })
        }
      },
      created(){
        // 头部名称
        this.title = this.$route.query.title;
        if(this.title=='昵称'){
          this.conNum = 6;
        }else{
          this.conNum = 25;
        }
        // 内容展示
        this.info = this.$route.query.info=='' || !this.$route.query.info?'无':this.$route.query.info;
      }
    }
</script>

<style scoped lang="scss">
  .textarea{
    width:calc(100% - 1.1rem);
    padding:0.44rem 0.55rem 0.00rem;
    margin:0.00rem auto 0.84rem;
    outline: none;
    border:none;
    font-size:0.40rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(52,54,60,1);
    line-height:0.48rem;
  }
  .numBlock{
    box-sizing: border-box;
    padding-right:0.55rem;
    height:0.93rem;
    line-height: 0.93rem;
    text-align: right;
    font-size:0.32rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(119,119,119,1);
    line-height:0.48rem;
  }
</style>
