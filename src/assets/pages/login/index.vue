<template>
    <div class="login_container">
      <div class="logo">
        logo
      </div>
      <div class="login">
        <div class="account">
          <!-- <span class="iconfont icon-shouji"></span> -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouji"></use>
          </svg>
          <input 
          class="account_input" 
          type="number"
          placeholder="请输入账号/手机号/医保卡"
          >
        </div>
        <div class="password">
          <!-- <span class="iconfont icon-yy12"></span> -->
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yy12"></use>
          </svg>
          <input 
          class="password_input" 
          type="password"
          placeholder="请输入密码"
          >
        </div>

        <div class="submit"><span>确认绑定</span></div>
      </div>
      <span class="docLogin">
        医生登陆
      </span>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style lang="scss" scoped>

.login_container{
  height: 100%;
  position: relative;
  overflow: hidden;
  &>.logo{
    width: 100%;
    height: 400px;
    margin-top: 160px;
    margin-bottom: 80px;
    background-color: #44c660;
  }
  &>.login{
    margin:0 auto;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    // text-align: left;


    input{
      border:none;
      border-bottom: 2px solid #d7d7d7;
      width: 550px;
      font-size: 24px;
      height: 85px;
    }

    &>.account{
      margin-bottom: 30px;
      // height: 100px;
    }
    &>.password{
      margin-bottom: 80px;
      // height: 100px;
    }

    .submit{
      height: 80px;
      width: 600px;
      background-color: #44c660;
      border: 2px solid #d7d7d7;
      border-radius: 80px;
      margin: 0 auto;
      color:#fff;
      position: relative;
      font-size: 28px;

      &>span{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }
    .icon{
      position: absolute;
      color: #44c660;
      width: 80px;
      height: 80px;
      position: relative;
      top:30px;
    }
  }
  &>.docLogin{
    position: absolute;
    bottom: 50px;
    // -225
    right: 50px;
    font-size: 34px;
  }
}

</style>
<style>
html,body,#app{
  height: 100%;
}
</style>

