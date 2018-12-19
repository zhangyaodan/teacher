<template>
  <!--头部返回-->
    <div :class="['headerBack',borderStatus?'border':'']">
      {{title}}
      <div class="backIcon"  @click="goBack"></div>
      <template v-if="show">
        <router-link class="iconSetUp" v-if="type=='setUp'"   :to="{path:'/Personal'}">
        </router-link>
        <div class="iconSave" v-else-if="type=='save'">
        </div>
        <div v-else class="saveTitle"  @click="save">
          <slot></slot>
        </div>
      </template>
    </div>
</template>

<script>
    export default {
        name: "headerBack",
      props:{
          title:{         //标题名称
            type:String,
            default:''
          },
        show:{            //显示右侧图标
            type:Boolean,
          default:false
        },
        type:{            //图标类型
          type:String,
          default:'setUp'
        },
        borderStatus:{
            type:Boolean,
            default:true
        }
      },
      methods:{
          // 返回上一页面
        goBack(){
          this.$router.back();
        },
        // 保存发送
        save(){
          this.$emit('saveInfo');
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .headerBack{
    position:relative;
    height:1.17rem;
    line-height: 1.17rem;
    font-size:0.48rem;
    font-family:PingFangSC-Light;
    font-weight:300;
    text-align: center;
    color:rgba(46,47,55,1);
    &.border{
      @include border-1p(rgba(225,225,225,1));
    }

    /*返回按钮*/
    .backIcon{
      position:absolute;
      width:0.27rem;
      height:0.48rem;
      left:0.43rem;
      top:0.36rem;
      transform: rotate(180deg);
      @include bg-image('~@/assets/icon/icon_go')
    }
    /*右侧按钮设置*/
    .iconSetUp{
      position:absolute;
      width:0.53rem;
      height:0.53rem;
      right:0.43rem;
      top:0.33rem;
      @include bg-image('~@/assets/icon/icon_setUpNo')
    }
    /*右侧按钮保存*/
    .iconSave{
      position:absolute;
      width:0.53rem;
      height:0.53rem;
      right:0.43rem;
      top:0.33rem;
      @include bg-image('~@/assets/icon/icon_save')
    }
    /*右侧保存title*/
    .saveTitle{
      position:absolute;
      right:0.43rem;
      top:00rem;
      height:1.17rem;
      line-height: 1.17rem;
      font-size:0.19rem;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(101,102,110,1);
    }
  }
</style>
