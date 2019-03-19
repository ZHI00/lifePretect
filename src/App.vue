<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div :class="$style.div"></div> -->
    <router-view/>
    <!-- <div class="test">11111111111</div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  }
}
</script>

<style lang="scss">
/* 通用样式 */
/* 优化，可以设置为外部引入 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
// 顶部提示框
.van-notify{
  font-size: 28px;
  height: 60px;
  line-height: 58px;
}

// 弹出框
.van-dialog__header{
  font-size:36px;
}
.van-dialog__message{
  font-size:30px;
}
.van-dialog__confirm{
  height: 80px;
  line-height:80px;
  .van-button__text{
    font-size:30px;
  }
}

// .test{
//   position: fixed;
//   bottom: 0;
// }
</style>
