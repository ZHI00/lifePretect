import Vue from 'vue'
import Router from 'vue-router'
import sphygmomanometer from '../assets/pages/sphygmomanometer'
import setdata from '../assets/pages/setdata/indextry.vue'
import test from '../assets/pages/test/index.vue'
import login from '../assets/pages/login/index.vue'
import myinfo from '../assets/pages/myInfo'
import health from '../assets/pages/healthManager/index.vue'
import allData from '../assets/pages/healthInfo/index.vue'
import alldatatest from '../assets/components/infoCrad/index.vue'
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
      path:'/login',
      name:'login',
      component:login
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo,
      
    },
    {
      path:'/health',
      name:'health',
      component:health
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
    }

  ]
})
