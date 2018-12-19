// tab首页切换
import Home from '@/view/Index/Home.vue'
import News from '@/view/Index/News.vue'
import Mine from '@/view/Index/Mine.vue'
// 登陆
import Login from'@/view/Login/Login.vue';
import Register from'@/view/Login/Register.vue';
import Personal from '@/view/Login/Personal.vue'
import LayoutChange from '@/view/Login/LayoutChange.vue'
import PhoneChange from '@/view/Login/PhoneChange.vue'
import PassChange from '@/view/Login/PassChange.vue'
// 我的
import SetUp from '@/view/Mine/SetUp.vue'
import Agreement from '@/view/Mine/Agreement.vue'
// 首页
import Bespeak from '@/view/Home/Bespeak.vue'
import MyStudent from '@/view/Home/MyStudent.vue'
import StudentEstimate from '@/view/Home/StudentEstimate.vue'
import MyTimeTable from '@/view/Home/MyTimeTable.vue'
import TimeTableInfo from '@/view/Home/TimeTableInfo.vue'
import Evaluate from '@/view/Home/Evaluate.vue'
import MyCourse from '@/view/Home/MyCourse.vue'
import CourseDetails from '@/view/Home/CourseDetails.vue'
import MyCourseware from '@/view/Home/MyCourseware.vue'
import CourseWareList from '@/view/Home/CourseWareList.vue'
import Index from '@/view';
export const module = [
  // ============登陆相关
  {
    path:'/Login',
    name:'登陆',
    component:Login
  },
  {
    path:'/Register',
    name:'注册',
    component:Register
  },
  {
    path:'/Personal',
    name:'个人中心',
    component:Personal
  },
  {
    path:'/LayoutChange',
    name:'个人中心公共修改页',
    component:LayoutChange
  },
  {
    path:'/PhoneChange',
    name:'修改手机号',
    component:PhoneChange
  },
  {
    path:'/PassChange',
    name:'修改密码',
    component:PassChange
  },
  // ===========tab切换栏
  {
    path:'/',
    name:'入口页面',
    component:Index,
    children:[
      {
        path:'',
        name:'首页',
        component: Home
      },
      {
        path:'/News',
        name:'信息',
        component: News
      },
      {
        path:'/Mine',
        name:'我的',
        component: Mine
      },
    ]
  },

  // ===========首页
  {
    path:'/Bespeak',
    name:'预约时间',
    component:Bespeak
  },
  {
    path:'/MyStudent',
    name:'我的学生',
    component:MyStudent
  },
  {
    path:'/StudentEstimate',
    name:'学生评价列表',
    component:StudentEstimate
  },
  {
    path:'/MyTimeTable',
    name:'我的课表',
    component:MyTimeTable
  },
  {
    path:'/TimeTableInfo',
    name:'课表详情',
    component:TimeTableInfo
  },
  {
    path:'/Evaluate',
    name:'结束课程学生评价',
    component:Evaluate
  },
  {
    path:'/MyCourse',
    name:'我的课程',
    component:MyCourse
  },
  {
    path:'/CourseDetails',
    name:'课程详情',
    component:CourseDetails
  },
  {
    path:'/MyCourseware',
    name:'我的课件',
    component:MyCourseware
  },
  {
    path:'/CourseWareList',
    name:'课件详情列表',
    component:CourseWareList
  },

  // ===========我的
  {
    path:'/SetUp',
    name:'设置',
    component:SetUp
  },
  {
    path:'/Agreement',
    name:'用户协议',
    component:Agreement
  },
]
