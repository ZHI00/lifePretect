import Vue from 'vue'
import Router from 'vue-router'
import device from '../assets/pages/device'
import setdata from '../assets/pages/setdata/indextry.vue'
import test from '../assets/pages/test/index.vue'
import userLogin from '../assets/pages/userLogin/index.vue'
import docLogin from '../assets/pages/docLogin/index.vue'
import myInfo from '../assets/pages/myInfo'
import healthManager from '../assets/pages/healthManager/index.vue'
import healthInfo from '../assets/pages/healthInfo/index.vue'
// import alldatatest from '../assets/components/infoCrad/index.vue'
// 这里开始是今周的任务
import deviceChose from '../assets/pages/deviceChose/index.vue'
import personalRemind from '../assets/pages/personalRemind/index.vue'
import globalRemind from '../assets/pages/globalRemind/index.vue'
import remindHistory from '../assets/pages/remindHistory/index.vue'
import userList from '../assets/pages/userList/index.vue'
import userInfo from '../assets/pages/userInfo/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/device',
      name: 'device',
      component: device,
      
    },
    {
      path: '/setdata',
      name: 'setdata',
      component: setdata
    },
    {
      path: '/',
      name: 'test',
      component: test,
      
    },
    {
      path:'/userLogin',
      name:'userLogin',
      component:userLogin
    },
    {
      path:'/docLogin',
      name:'docLogin',
      component:docLogin
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo,
      
    },
    {
      path:'/healthManager',
      name:'healthManager',
      component:healthManager
    },
    {
      path:'/healthInfo',
      name:'healthInfo',
      component:healthInfo
    },
    // {
    //   path:'/alldatatest',
    //   name:'alldatatest',
    //   component:alldatatest
    // },
    {
      path:'/deviceChose',
      name:'deviceChose',
      component:deviceChose
    },
    {
      path:'/personalRemind',
      name:'personalRemind',
      component:personalRemind
    },
    {
      path:'/globalRemind',
      name:'globalRemind',
      component:globalRemind
    },
    {
      path:'/remindHistory',
      name:'remindHistory',
      component:remindHistory
    },
    {
      path:'/userList',
      name:'userList',
      component:userList
    },
    {
      path:'/userInfo',
      name:'userInfo',
      component:userInfo,
      children:[
        {
          path:'/healthManager',
          name:'healthManager',
          component:healthManager
        }
      ]
    }

  ]
})
