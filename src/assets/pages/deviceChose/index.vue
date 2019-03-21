<template>
    <div class="deviceChose">
      <div class="grade">
        <!-- 返回 -->
        <div class="header">
          <mt-button @click.native='goback' icon="back"></mt-button>
        </div>
        
        <!-- 外圆环 -->
        <mu-circular-progress 
        class="demo-circular-progress circular-progress" 
        mode="determinate" 
        :value="(response.data[0].healthPoint.point/100)*80" 
        color="rgba(255,255,255,0.8)" 
        :stroke-width="2" 
        :size="circleSize+37"
        v-if="circleSize>90"></mu-circular-progress>
        
        <!-- 内圆环 -->
        <mu-circular-progress 
        class="demo-circular-progress circular-progress" 
        mode="determinate" 
        :value="80" 
        color="rgba(255,255,255,0.2)" 
        :stroke-width="6" 
        :size="circleSize+20"
        v-if="circleSize>90"></mu-circular-progress>

        <div class="testText">
          <div class="testStatus">健康指数<span v-text="computeStatus">中等</span></div>
          <div class="score" :v-text="response.data[0].healthPoint.point">23</div>
          <div class="testTime">评估时间:<span :v-text="response.data[0].healthPoint.evaluationDate">2019-03-04</span></div>
        </div>
      </div>

      <div class="title">智能设备</div>
      <div class="deviceItem">
        <!-- 血压计 -->
        <router-link :to="{path:'/device',query:{deviceType:'sphy'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-xieyaji"></span>
              <div>
                <p class="item_title">血压计</p>
                <p class="item_detail">高血压监测与预防，血压数据异常预警</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>

        <!-- 肺活仪 -->
        <router-link :to="{path:'/device',query:{deviceType:'pulm'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-feihuoyi"></span>
              <div>
                <p class="item_title">肺活仪</p>
                <p class="item_detail">肺活量测量与锻炼，可测评及提高肺部机能</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>

        <!-- 体脂秤 -->
        <router-link :to="{path:'/device',query:{deviceType:'bodyfat'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-tizhicheng-"></span>
              <div>
                <p class="item_title">体脂秤</p>
                <p class="item_detail">测量内脏脂肪、体脂率、基础代谢等十项指标</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>


        <!-- 手环 -->
        <router-link :to="{path:'/device',query:{deviceType:'bangle'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-shouhuan"></span>
              <div>
                <p class="item_title">手环</p>
                <p class="item_detail">实时心率、计步、卡路里等数据监测，预警功能</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>


        <!-- 血糖仪 -->
        <router-link :to="{path:'/device',query:{deviceType:'gluc'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-xietangyi-"></span>
              <div>
                <p class="item_title">血糖仪</p>
                <p class="item_detail">糖尿病监测及预防，血糖数据异常预警</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>
        


         <!-- 血氧仪 -->
        <router-link :to="{path:'/device',query:{deviceType:'oxim'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-xietangyi2"></span>
              <div>
                <p class="item_title">血氧仪</p>
                <p class="item_detail">测量人体血氧饱和度、血氧数据异常预警</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>
        

         <!-- 血脂仪 -->
        <router-link :to="{path:'/device',query:{deviceType:'LDX'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-xietangyi"></span>
              <div>
                <p class="item_title">血脂仪</p>
                <p class="item_detail">测量总胆固醇、甘油三酯等五项指标</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
         </router-link>
        

         <!-- 尿酸分析仪 -->
         <router-link :to="{path:'/device',query:{deviceType:'uric'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-xietangyi1"></span>
              <div>
                <p class="item_title">尿酸分析仪</p>
                <p class="item_detail">快速量测尿酸，帮助您顶起监控尿酸</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
         </router-link>
        

         <!-- 尿液分析仪 -->
         <router-link :to="{path:'/device',query:{deviceType:'urine'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-niaoyefenxi"></span>
              <div>
                <p class="item_title">尿液分析仪</p>
                <p class="item_detail">测量PH比值、蛋白质、白细胞等11项指标</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
         </router-link>
        
        

         <!-- 体温计 -->
         <router-link :to="{path:'/device',query:{deviceType:'ther'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-tiwen"></span>
              <div>
                <p class="item_title">体温计</p>
                <p class="item_detail">24小时监测实时体温，体温异常预警</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
         </router-link>
        

        <!-- 心电仪 -->
        <router-link :to="{path:'/device',query:{deviceType:'elec'}}">
          <div class="item">
            <div class="left">
              <span class="iconfont icon-xindian"></span>
              <div>
                <p class="item_title">心电仪</p>
                <p class="item_detail">实时监测动态心电状态，精准判断心脏疾病</p>
              </div>
            </div>
            <div class="right">></div>
          </div>
        </router-link>
        
      </div>
    </div>
</template>

<script>
import circularProgress from 'muse-ui/lib/Progress/CircularProgress'
import { setTimeout } from 'timers';
import http from '../../api/axios.js';
export default {
    props: {

    },
    data() {
        return {
          circleSize:this.getCircleSize(),
          circleProgressUpdata:true,
          // 用户信息
          userData:window.localStorage.getItem('userData'),
          // 返回的数据
          response:{}
        };
    },
    computed: {
      
      computeStatus(){
        switch(this.response.data[0].healthPoint.status){
          case 1:
            return '较差';
          case 2:
            return '中等';
          case 3:
            return '良好';
          case 4:
            return '优秀';
          case 5:
            return '极好';
        }
      }
    },
    created() {

    },
    mounted() {

      this.getHtmlFontSize();
      this.dohttp();

    },
    watch: {

    },
    methods: {
      // goback
      goback(){
        window.history.back();
      },
      // 动态获取html的字体
      getHtmlFontSize(){
        let inter=setInterval(()=>{
          this.circleSize=this.getCircleSize();
        },200)
        setTimeout(() => {
          clearInterval(inter)
        }, 500);
      },
      // 设置圆环大小
      getCircleSize(){
        let reg=/[0-9]{2,}/ig;
        let num=parseInt(reg.exec(window.getComputedStyle(document.querySelector('html')).fontSize)[0])*3.33333;
        console.log(num)
        return num;
      },
      async dohttp(){
        let data={
          "type": " APP_A",
          "data": {
              "userId": this.userData.data[0].userId,
              "token": this.userData.data[0].token,
              "msg": [],
              "size": 1
          }
        }
        try{
          this.response=await http.httpMethod('post','terminal/getHealthPoint',data);
        }catch(err){
          console.log('这里是deviceChose页面');
          console.log(err);
        }
        
      }
    },
    components: {
      'mu-circular-progress':circularProgress
    },
};
</script>

<style lang="scss" scoped>
.iconfont{
  font-size: 55px;
}
.deviceChose{
  a{
    color:#000;
  }
  .grade{
    
    height: 500px;
    // background-color: #44c660;
    background:linear-gradient(#44c660,rgb(112,206,66));
    position: relative;
    
    .header{
      display: flex;
      align-items: center;
      height: 100px;
    }
    .circular-progress{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-42%) rotate(127deg);
    }
    .testText{
      color: #fff;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-42%);
      .testStatus{
        font-size: 26px;
      }
      .score{
        position: relative;
        bottom: -25px;
        font-size: 36px;
        font-weight: bold;
        
      }
      .testTime{
        position: relative;
        bottom: -155px;
        font-size: 22px;
      }

    }
  } 
  .title{
    height: 100px;
    font-size: 28px;
    text-align: center;
    line-height: 100px;
    background-color: #efefef;

  }
  .deviceItem{
    .item{
      height: 130px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      border-top: 2px solid #d7d7d7;
      .left{
        display:flex;
        align-items: center;
        padding-left: 20px;
        .item_title{
          font-size: 28px;
          margin: 0;
          margin-bottom: 5px;
          margin-top: 15px;
        }
        &>div{
          margin-left:20px;
        }
        .item_detail{
          font-size: 14px;
          margin: 0;
          color: #999;
          margin-bottom: 15px;
        }
      }
      .right{
        font-size: 36px;
        padding-right: 20px;
      }
    }
    & .item:last-child{
      border-bottom: 2px solid #d7d7d7;
    }
  }
}
</style>
<style lang="scss" scoped>
.mint-button{
  margin-left:20px;
  background-color:transparent;
  box-shadow:none;
  color:#fff;
  transform:scale(1.5);
}
</style>
