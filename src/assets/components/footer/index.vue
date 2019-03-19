<template>
    <div class="footer">
      <div :class="{active:actives[0]}">
        <span class="iconfont icon-icon-home"></span>
        <span>首页</span>
      </div>
      
      <div :class="{active:actives[1]}">
        <span class="iconfont icon-xiaoxi"></span>
        <span>消息</span>
      </div>
      
      <div :class="{active:actives[2]}">
        <span class="iconfont icon-zhudonghehu"></span>
        <span>患者</span>
      </div>
      
      <div :class="{active:actives[3]}">
        <span class="iconfont icon-touxiang"></span>
        <span>我的</span>
      </div>
      
      
    </div>
</template>

<script>
export default {
    props: {
      actives:{
        type:Array,
        default(){
          return [true,false,false,false]
        }
      }
    }
};
</script>

<style lang="scss" scoped>
.iconfont{
  font-size: 40px;
}
.footer{
  width: 100%;
  height: 110px;
  display:flex;
  font-size: 28px;
  &>div{
    width: 25%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .active{
    color: rgb(69, 194, 153);
  }
}
</style>
