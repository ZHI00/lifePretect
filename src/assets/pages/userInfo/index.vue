<template>
<!-- 这里的修改、个人提醒需要放一个图标 -->
<!-- 跳转过去的健康数据，需要一个按钮弹出对健康数据的评价 -->
    <div class="userInfo">
      <!-- 头部个人信息 -->
      <div class="userInfo_probable">
        <!-- 左边 -->
        <span class="left">
          <span class="userName">张三</span>
          <span>58岁</span>
          <span>男</span>
        </span>

        <!-- 右边 -->
        <span class="right">
          <span class="disease">糖尿病</span>
          <span v-if="false"><span class="iconfont icon-xiugai"></span>修改</span>
          <span><span class="iconfont icon-jia"></span>个人提醒</span>
        </span>
      </div>

      <!-- 导航 -->
      <nav @click="clickNav">
        <!-- <router-link :to="{path:'/alldata'}"> -->
          <div>健康数据</div>
        <!-- </router-link> -->
        <!--  -->
        <!-- <router-link :to="{path:'/alldata'}"> -->
          <div>健康日记</div>
        <!-- </router-link> -->
        <!--  -->
        <!-- <router-link :to="{path:'/alldata'}"> -->
          <div>个人病例</div>
        <!-- </router-link> -->
        
        <!-- <router-link :to="{path:'/alldata'}"> -->
          <div>体检报告</div>
        <!-- </router-link> -->
       
      </nav>
      
      <!-- 路由视角 -->
      <!-- <router-view></router-view> -->
      <keep-alive>
        <!-- 健康数据 -->
        <health-info
        ref="healthInfo" 
        @confirm="uploadEvaluate"
        v-if="showModule[0]"
        :showGoback="false"
        :showEvaluate="true"
        ></health-info>

        <!-- 健康日记/管理 -->
        <health-manager v-if="showModule[1]"></health-manager>
      </keep-alive>
    </div>
</template>

<script>
import healthInfo from '../healthInfo/index'
import healthManager from '../healthManager/index'
import { setTimeout } from 'timers';
import { Notify } from 'vant';
export default {
    data() {
        return {
          showModule:[true,false,false,false]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      clickNav(event){
        let index=Array.prototype.findIndex.call(document.querySelectorAll("nav>div"),(item,index)=>{
          if(item===event.target){
            return true;
          }
        })
        console.log(index)
        // this.showModule=new Array(4).fill(false);
        this.showModule=this.showModule.map(item=>{
          return false
        })
        this.showModule[index]=true;
        console.log(this.showModule)
      },
      uploadEvaluate(value){
        // 这里等待服务器完成请求了，就调用下面的方法
        // 用await/async
        setTimeout(()=>{
          this.$refs.healthInfo.showMaskLayer();
          Notify({
            message: '评价成功或者失败',
            duration: 1000,
            background: '#1989fa'
          });
        },1000)
        console.log(value)
      }
    },
    components: {
      'health-info':healthInfo,
      'health-manager':healthManager
    },
};
</script>


<style lang="scss" scoped>
.userInfo .userInfo_probable .right span.iconfont{
  font-size: 28px;
  padding-right: 5px;
  color: rgb(69, 194, 153);
}
.userInfo{
  font-size: 28px;
  margin-top: 30px;
  .userInfo_probable{
    display: flex;
    justify-content: space-between;
    padding: 0 15px 0 30px;
    margin-bottom: 30px;s
    span{
      padding-right: 20px;
    }
    .left{
      // span:nth-child(n+2):before{
      //   display: inline-block;
      //   content:'';
      //   height: 100%;
      //   width: 2px;
      //   background-color: #000;
      //   position: absolute;
      // }
      span{
        position: relative;
        text-align: center;   
        padding: 0 10px;
      }
      span:nth-child(n+2){
        border-left:1px solid #000;
      }
    }
    .right{
      &>span{
        padding-right: 10px;
      }
    }
  } 
  nav{
    display: flex;
    border: 2px solid #d7d7d7;
    // div{
    //   width: 25%;
    //   text-align: center;
    //   border-right: 2px solid #d7d7d7;
    //   height: 50px;
    //   line-height: 50px;
    // }
    // div:last-child{
    //   border: none;
    // }
    div{
      width: 25%;
      text-align: center;
      border-right: 2px solid #d7d7d7;
      height: 50px;
      line-height: 50px;
      color: #000;
    }
    div:last-child{
      border: none;
    }
  }
}
</style>
