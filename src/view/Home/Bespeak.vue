<template>
  <!--选择时间-->
  <div class="Bespeak">
    <!--头部返回-->
    <headerBack title="选择时间" :show="true" type="save"></headerBack>
    <!--顶部用户信息-->
    <div class="topUser">
      <img class="userImg" src="~@/assets/images/userImg.png" alt="">
      <span class="userName">王大锤</span>
    </div>
    <!--灰色地带-->
    <div class="grayBlock"></div>
    <!--tab切换-->
    <div class="tabCon">
      <ul>
       <li :class="{'selectedLi':selecteNum==1,'defaultLi':selecteNum!=1}" @click="selecteNum=1">周一</li>
       <li :class="{'selectedLi':selecteNum==2,'defaultLi':selecteNum!=2}" @click="selecteNum=2">周二</li>
       <li :class="{'selectedLi':selecteNum==3,'defaultLi':selecteNum!=3}" @click="selecteNum=3">周三</li>
       <li :class="{'selectedLi':selecteNum==4,'defaultLi':selecteNum!=4}" @click="selecteNum=4">周四</li>
       <li :class="{'selectedLi':selecteNum==5,'defaultLi':selecteNum!=5}" @click="selecteNum=5">周五</li>
       <li :class="{'selectedLi':selecteNum==6,'defaultLi':selecteNum!=6}" @click="selecteNum=6">周六</li>
       <li :class="{'selectedLi':selecteNum==7,'defaultLi':selecteNum!=7}" @click="selecteNum=7">周日</li>
      </ul>
    </div>

    <!--预约时间title-->
    <div class="timeTitle">
      <!--左边绿色-->
      <div class="leftGreen"></div>
      <span class="rightTitle">上午预约</span>
    </div>
    <!--详细时间-->
    <div class="timeNum">
      <div class="numberIndex ">
        <div class="innerNum defaultNum">08:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">08:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">09:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">09:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">10:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum selectedNum">10:30</div>
      </div>
      <div class="numberIndex ">
        <div class="innerNum defaultNum">11:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">11:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">12:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">12:30</div>
      </div>
    </div>
    <!--预约时间title-->
    <div class="timeTitle">
      <!--左边绿色-->
      <div class="leftGreen"></div>
      <span class="rightTitle">下午预约</span>
    </div>
    <!--详细时间-->
    <div class="timeNum">
      <div class="numberIndex ">
        <div class="innerNum defaultNum">13:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">13:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">14:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">14:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">15:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum selectedNum">15:30</div>
      </div>
      <div class="numberIndex ">
        <div class="innerNum defaultNum">16:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">16:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">17:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">17:30</div>
      </div>
    </div>
    <!--预约时间title-->
    <div class="timeTitle">
      <!--左边绿色-->
      <div class="leftGreen"></div>
      <span class="rightTitle">晚上预约</span>
    </div>
    <!--详细时间-->
    <div class="timeNum">
      <div class="numberIndex ">
        <div class="innerNum defaultNum">18:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">18:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">19:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">19:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">20:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum selectedNum">20:30</div>
      </div>
      <div class="numberIndex ">
        <div class="innerNum defaultNum">21:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">21:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">22:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">22:30</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">23:00</div>
      </div>
      <div class="numberIndex">
        <div class="innerNum defaultNum">23:30</div>
      </div>
    </div>

    <!--同步所选时间-->
    <div class="signOut" >
      <div class="greenBlock" >同步所选时间</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Bespeak",
      data(){
          return {
            selecteNum:1
          }
      }
    }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/mixin";
  .Bespeak{
    /*头部用户信息*/
    .topUser{
      padding:0.41rem 0.00rem 0.40rem 0.71rem;
      display:flex;
      /*用户头像*/
      .userImg{
        width:1.17rem;
        height:1.17rem;
        border-radius:50%;
        margin-right:0.24rem;
      }
      /*用户名称*/
      .userName{
        display:flex;
        flex:1;
        align-items: center;
        font-size:0.43rem;
        font-weight:300;
        color:rgba(75,80,90,1);
      }
    }
    /*tab切换*/
    .tabCon{
      height:1.12rem;
      @include  border-1p(rgba(225,225,225,1));
      ul{
        padding:0.00rem 0.33rem;
        height:1.12rem;
        display:flex;
        li{
          display:flex;
          flex:1;
          align-items: center;
          justify-content: center;
        }
        .defaultLi{
          font-size:0.37rem;
          font-weight:300;
          color:rgba(97,99,111,1);
        }
        .selectedLi{
          font-size:0.37rem;
          font-weight:300;
          color:rgba(4,189,138,1);
          @include border-1p(rgba(11,204,150,1),2);
        }
      }
    }
    /*预约时间title*/
    .timeTitle{
      margin-top:0.53rem;
      height:0.35rem;
      line-height: 0.35rem;
      padding-left:0.43rem;
      .leftGreen{
        width:0.05rem;
        height:0.35rem;
        background:rgba(11,204,150,1);
        float:left;
        margin-right:0.15rem;
      }
      .rightTitle{
        font-size:0.35rem;
        font-weight:300;
        color:rgba(71,74,81,1);
      }
    }
    /*详细时间*/
    .timeNum{
      padding:0.00rem 0.53rem;
      margin-top:0.37rem;
      overflow: hidden;
      .numberIndex{
        box-sizing: border-box;
        width:25%;
        float:left;
        overflow: hidden;
        margin-bottom:0.27rem;
        .innerNum{
          width:1.95rem;
          height:0.85rem;
          margin:0.00rem auto;
          line-height: 0.85rem;
          text-align: center;
          border:1px solid rgba(227,223,223,1);
          border-radius:0.05rem;
          font-size:0.37rem;
        }
        .defaultNum{
          font-weight:300;
          color:rgba(113,116,127,1);
        }
        .selectedNum{
          font-weight:300;
          color:rgba(255,255,255,1);
          background:rgba(11,204,150,1);
        }
      }
    }

    /*同步所选时间*/
    .signOut{
      width:100%;
      margin-top:0.53rem;
      .greenBlock{
        width:9.15rem;
        height:1.17rem;
        line-height:1.17rem;
        text-align: center;
        margin:0.00rem auto;
        background:linear-gradient(90deg,rgba(39,249,180,1),rgba(11,204,150,1));
        box-shadow:0.00rem 0.11rem 0.17rem 0.00rem rgba(8,175,128,0.2);
        border-radius:0.11rem;
        font-size:0.45rem;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
    }
  }
</style>
