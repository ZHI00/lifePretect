<template>
    <div>
      <van-popup 
      v-model="show"
      position="top"
      >内容</van-popup>
      <router-link :to="{path:'/device',query:{deviceType:'bodyfat'}}">
      <div class="test"></div></router-link> 

      <div 
      class="div"
      @click="click"
      ></div>

      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
      </mt-loadmore>
    </div>
</template>

<script>
import { Popup } from 'vant';
import { Loadmore } from 'mint-ui';
export default {
    data() {
        return {
          show: false,
          list:[0,1,2,3,4,5,6,7,9,8,10,11,2,4,7,3,4,0,1,2,3,4,5,6,7,9,8,10,11,2,4,7,3,4,0,1,2,3,4,5,6,7,9,8,10,11,2,4,7,3,4],
          allLoaded:false
        };
    },
    methods:{
      click(){
        this.show=true;
      },
      loadBottom(){

      },
      loadTop(){

      }
    },
    components:{
      'van-popup':Popup,
      'mt-loadmore':Loadmore 
    }

};
</script>

<style lang="scss">
// @import '~../../css/test.scss';
.test{
  width: 50px;
  height: 50px;
  background-color: #44c660;
}
.div{
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
