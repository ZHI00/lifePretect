<template>
    <div class="myinfo_container">
      <div class="myinfo_container_wallpaper">
        wallpaper
      </div>
      <div class="myinfo_container_caseHistory myinfo_text_border">
        <!-- 我的病历 -->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-touxiang"></use>
          </svg>
          <span class="myinfo_text">我的病历</span>
          <span class="myinfo_arrow">></span>
        </div>
        <!-- 我的体检 -->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <span class="myinfo_text">我的体检</span>
          <span class="myinfo_arrow">></span>
        </div>
      </div>
      <div class="myinfo_container_info myinfo_text_border" >
        <!-- 个人资料 -->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-touxiang"></use>
          </svg>
          <span class="myinfo_text">个人资料</span>
          <span class="myinfo_arrow">></span>
        </div>
        <!-- 手机绑定 -->
         <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-touxiang"></use>
          </svg>
          <span class="myinfo_text">手机绑定</span>
          <span class="myinfo_arrow">></span>
        </div>
        <!-- 修改密码 -->
         <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-touxiang"></use>
          </svg>
          <span class="myinfo_text">修改密码</span>
          <span class="myinfo_arrow">></span>
        </div>
      </div>
      <div class="myinfo_container_new myinfo_text_border">
        <!-- 站内资讯 -->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <span class="myinfo_text">站内资讯</span>
          <span class="myinfo_arrow">></span>
        </div>
        <!-- 关于我们 -->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <span class="myinfo_text">关于我们</span>
          <span class="myinfo_arrow">></span>
        </div>
      </div>
      <div class="myinfo_container_nav">
        <div class="toHealthManager">
          健康管理
        </div>
        <div class="toMyInfo">
          我的信息
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style lang="scss" scoped>
.myinfo_container{
  background-color: #d7d7d7;
  height: 100%;
  position: relative;
  &>div:nth-child(n+2){
    background-color: #fff;
    margin:0 20px 20px 20px;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
    text-align:left;
    &>div{
      // height: 100%;
      font-size: 28px;
      line-height:130px;
      padding-left: 20px;
      position: relative;
      svg{
        background-color: #44c;
        border-radius: 50%;
        color: #fff;
        position: relative;
        top:7px;
        border: none;
        
        // transform: scale(0.9);
        // text-indent: 20px;
      }
      &>.myinfo_text{
        padding-left: 10px;
      }
      &>.myinfo_arrow{
        position: absolute;
        right: 30px;
      }
    }

    // 图标背景
    &>div:first-child svg{
      background-color: rgb(234, 76, 136);
    }
    &>div:nth-child(2) svg{
      background-color: rgb(25, 181, 254);
    }
    &>div:nth-child(3) svg{
      background-color: rgb(247, 169, 22);
    }
  }
  .myinfo_container_wallpaper{
    height: 130px;
    background-color: #44c660;
    margin-bottom: 5px;
  }

  .myinfo_text_border>div:nth-child(n+2){
    border-top: #d7d7d7 solid 2px;
  }
  
  .icon {
    width: 50px;
    height: 50px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  &>.myinfo_container_nav{
    margin: 0 !important;
    width: 100%;
    position: absolute;
    padding: 0 !important;
    bottom: 0;
    display: flex;
    &>div{
      width: 50%;
      padding: 0 !important;
      text-align: center;
      height: 100px;
      box-sizing: border-box;
      border: solid 2px #000;
      line-height: 100px !important;
    }
    &>div:first-child{
      border-right: none;
    }

  }
}
</style>
<style>

  html,body,#app{
    height: 100%;
  }
</style>
