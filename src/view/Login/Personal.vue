<template>
  <!--个人中心页-->
  <div>
    <!--头部返回-->
    <headerBack title="个人中心"></headerBack>
    <!--灰色地带-->
    <div class="grayBlock"></div>
    <!--用户头像item-->
    <div class="imgItem conPadding">
      <div class="leftTitle">头像</div>
      <div class="imgMiddle">
        <img :src="info.imageurl" alt="">
      </div>
      <div class="rightIcon">
      </div>
    </div>
    <!--itemItem-->
    <!--昵称-->
    <router-link tag="div" class="itemItem conPadding" :to="{path:'/LayoutChange',query:{title:'昵称',info:info.profile}}">
      <div class="leftTitle">昵称</div>
      <div class="imgMiddle">
        <span>{{info.nickname}}</span>
      </div>
      <div class="rightIcon">
      </div>
    </router-link>
    <!--性别-->
    <div class="itemItem conPadding">
      <div class="leftTitle">性别</div>
      <div class="imgMiddle">
        <span v-if="info.sex==0">保密</span>
        <span v-else-if="info.sex==1">男</span>
        <span v-else="info.sex==2">女</span>
      </div>
      <div class="rightIcon">
      </div>
    </div>
    <!--生日-->
    <div class="itemItem conPadding" @click="timeShow=true">
      <div class="leftTitle">生日</div>
      <div class="imgMiddle">
        <span>{{info.birth}}</span>
      </div>
      <div class="rightIcon">
      </div>
    </div>
    <!--手机号-->


    <router-link tag="div" class="itemItem conPadding" :to="{path:'/PhoneChange'}">
      <div class="leftTitle">手机号</div>
      <div class="imgMiddle">
        <span>+{{info.prphone}} {{info.mobile}}</span>
      </div>
      <div class="rightIcon">
      </div>
    </router-link>
    <!--修改密码-->
    <router-link tag="div" class="itemItem conPadding" :to="{path:'/PassChange'}">
      <div class="leftTitle">修改密码</div>
      <div class="imgMiddle">
        <span></span>
      </div>
      <div class="rightIcon">
      </div>
    </router-link>
    <!--个性签名-->
    <router-link tag="div"  :to="{path:'/LayoutChange',query:{title:'个性签名',info:info.profile}}" class="signature conPadding">
      <div class="leftTitle">个性签名</div>
      <div class="imgMiddle">
        <span></span>
      </div>
      <div class="rightIcon">
      </div>
    </router-link>
    <div class="signatureInfo">
      {{info.profile}}
    </div>

    <van-popup v-model="timeShow" position="bottom" :overlay="true">
      <van-datetime-picker @cancel="timeShow=false"	   @confirm="selecteBirth"
                v-model="currentDate"
                type="date"
      />
    </van-popup>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  import moment from 'moment'
    export default {
        name: "Personal",
      data(){
        return {
          currentDate: new Date(),
          timeShow:false,  //默认选择时间框不显示
        }
      },
      created(){
        // 获取老师信息
        this.getTeacherInfo()
      },
      methods:{
        ...mapActions([
          'getTeachMs',
          'updateTeacherMsg'
        ]),
        // 获取老师信息
        getTeacherInfo(){
          let obj = {
            teachid:this.uid
          }
          // 获取个人信息
          this.getTeachMs(obj);
        },
        // 选择生日
        selecteBirth(){
          this.timeShow = false
          this.currentDate = moment(this.currentDate).format("YYYY-MM-DD")
          let obj ={
            birth:this.currentDate
          }
          this.updateTeacherInfo(obj)
        },
        // 修改用户信息
        updateTeacherInfo(obj){
          this.updateTeacherMsg(obj).then(res=>{
            this.$toast('修改成功')
            // 再次获取信息
            this.getTeacherInfo()
          }).catch(err=>{
            this.$toast(err.info)
          })
        }
      },
      computed:{
        ...mapState({
          uid:({login})=>login.uid,
          info:({personal}) => personal.info
        })
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .conPadding{
    padding:0.00rem 0.40rem;
  }
  .imgItem{
    height:2.37rem;
    display:flex;
    align-items: center;
    @include  border-1p(rgba(230,230,230,1));
  }
  .leftTitle{
    font-size:0.40rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(75,80,90,1);
    line-height:0.48rem;
  }
  /*头像位置*/
  .imgMiddle{
    flex:1;
    display:flex;
    justify-content: flex-end;
    img{
      display:block;
      width:1.49rem;
      height:1.49rem;
      border-radius:50%;
      margin-right:0.85rem;
    }
    span{
      font-size:0.35rem;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(153,153,153,1);
      line-height:0.48rem;
      margin-right:0.55rem;
    }
  }
  /*右侧箭头*/
  .rightIcon{
    width:0.19rem;
    height:0.32rem;
    @include  bg-image('~@/assets/icon/icon_go')
  }

  .itemItem{
    height:1.21rem;
    display:flex;
    align-items: center;
    @include  border-1p(rgba(230,230,230,1));
  }

  /*个性签名*/
  .signature{
    height:1.21rem;
    display:flex;
    align-items: center;
  }
  /*签名内容*/
  .signatureInfo{
    padding:0.27rem 0.99rem 0.00rem 0.40rem;
    font-size:0.32rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:0.48rem;
  }
</style>
