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
          v-model="accoValue"
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
          v-model="passValue"
          >
        </div>

        <div 
        class="submit"
        @click="doHttp"
        >
          <span>确认绑定</span>
          <div class="loading">
            <van-loading 
            v-if="showLoading"
            color="#fff"
            />
          </div>
        </div>
      
     
      </div>
      <span class="docLogin">
        医生登陆
      </span>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import { Loading } from 'vant';
import http from '../../api/axios.js';
export default {
    data() {
        return {
          accoValue:'',
          passValue:'',
          showLoading:false
        };
    },
    methods:{
      // 今天基本上的修改都在请求这里
      // 提交请求
      doHttp(event){
        // 
        this.showLoading=true;
        let data={
          "type": "APP_A",
          "data": {
              "msg": [
                  {
                      "userName": this.accoValue,
                      "password": this.passValue,
                      "deviceToken": "",
                      "currentVersion": ""
                  }
              ],
              "size":1
          }

        }
        console.log(data)
        http.httpMethod('post','/user/login',data).then(response=>{
          // 存储用户信息
          if(response.status=="0"){
            window.localStorage.setItem('userData',response.data[0]);
            console.log(window.localStorage.getItem('userData'));

            // 跳转
            // 优化，其实可以根据前一个页面来进行跳转
            this.$router.push({ 
              path:'/healthmanager'
            });

          }
        
        }).catch(err=>{
          Dialog.alert({
            title: '提示',
            message: '111'
          }).then(() => {
            this.passValue='';
            this.showLoading=false;
          });
        })
        // 点击后拉起请求
        // 触发loading
        // 拿到数据然后判断状态，应该在其他地方判断，不应该是点击按钮判断，而是拿到数据之后

      
      }
    },
    mounted(){
      console.log(http)
    },
    created(){
      // 优化，登陆页还有一个可以优化，登陆过后进入登录页直接跳转健康管理
    }
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
    .loading{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left:60%;
    }


    input{
      border:none;
      border-bottom: 2px solid #d7d7d7;
      width: 550px;
      font-size: 24px;
      height: 85px;
      background-color: transparent;
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
<style lang="scss">
html,body,#app{
  height: 100%;
}
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

</style>


