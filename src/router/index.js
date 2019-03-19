import Vue from 'vue'
import Router from 'vue-router'
import sphygmomanometer from '../assets/pages/sphygmomanometer'
import setdata from '../assets/pages/setdata/indextry.vue'
import test from '../assets/pages/test/index.vue'
import userLogin from '../assets/pages/userLogin/index.vue'
import docLogin from '../assets/pages/docLogin/index.vue'
import myinfo from '../assets/pages/myInfo'
import healthmanager from '../assets/pages/healthManager/index.vue'
import allData from '../assets/pages/healthInfo/index.vue'
import alldatatest from '../assets/components/infoCrad/index.vue'
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
      path: '/sphy',
      name: 'sphygmomanometer',
      component: sphygmomanometer,
      
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
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo,
      
    },
    {
      path:'/healthmanager',
      name:'healthmanager',
      component:healthmanager
    },
    {
      path:'/alldata',
      name:'alldata',
      component:allData
    },
    {
      path:'/alldatatest',
      name:'alldatatest',
      component:alldatatest
    },
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
          path:'/alldata',
          name:'alldata',
          component:allData
        }
      ]
    }

  ]
})
