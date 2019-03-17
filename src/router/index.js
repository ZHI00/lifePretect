import Vue from 'vue'
import Router from 'vue-router'
import sphygmomanometer from '../assets/pages/sphygmomanometer'
import setdata from '../assets/pages/setdata/indextry.vue'
import test from '../assets/pages/test/index.vue'
import login from '../assets/pages/login/index.vue'
import myinfo from '../assets/pages/myInfo'
import healthmanager from '../assets/pages/healthManager/index.vue'
import allData from '../assets/pages/healthInfo/index.vue'
import alldatatest from '../assets/components/infoCrad/index.vue'
// import deviceChose from '../assets/pages/deviceChose/index.vue'
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
    // {
    //   path:'/deviceChose',
    //   name:'deviceChose',
    //   component:deviceChose
    // }

  ]
})
