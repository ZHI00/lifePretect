<template>
    <div class="healthManager_container">
      <!-- 背景图 -->
      <div class="healthManager_container_wallpaper"></div>
      <!-- 健康数据 -->
      <div class="healthManager_healthData">
        <h3>健康数据</h3>
        <!-- 时间和按钮 -->
        <div class="healthManager_healthData_time">
          <div class="time">上次测量(<span>2019-02-02</span>)</div>
          <div class="more">更多</div>
          <div class="add">添加</div>
        </div>
        <!-- 数据栏 -->
        <div class="data_detail">
          <!-- 血压计 -->
          <div class="bloodPressure">
            <div class="data_detail_title">
              <span class="device">血压计</span>
              <span>2018-04-02 18:07:00</span>
            </div>
            <!-- 数据详情 -->
            <div class="detail">
              <div class="iconbox">
                <!-- icon埋点 -->
                <!-- <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianshi"></use>
                </svg> -->
                <span class="iconfont icon-dianshi"></span>
              </div>
              <!-- 收缩压 -->
              <div class="data">
                <p>106 mmHg</p>
                <P>收缩压</P>
              </div>
              <!-- 舒张压 -->
              <div class="data">
                <p>106 mmHg</p>
                <P>舒张压</P>
              </div>
              <!-- 心率 -->
              <div class="data">
                <p>78 mmHg</p>
                <P>心率</P>
              </div>
            </div>
          </div>

          <!-- 血糖仪 -->
          <div class="bloodGlucose">
            <div class="data_detail_title">
              <span class="device">血糖仪</span>
              <span>2018-04-02 18:07:00</span>
            </div>
            <!-- 数据详情 -->
            <div class="detail">
              <div class="iconbox">
                <!-- icon埋点 -->
                <!-- <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xietangyi"></use>
                </svg> -->
                <span class="iconfont icon-xietangyi"></span>
              </div>
              <!-- 收缩压 -->
              <div class="data">
                <p>106 mmol/L</p>
                <P></P>
              </div>
             
            </div>
          </div>

          <!-- 医生评价 -->
          <div class="docEvaluate">
            <div class="docEvaluate_title">
              <div>医生评价</div>
              <div>
                <span class="docName">张医生</span>
                <span>2019-02-02 15:25</span>
              </div>
            </div>
            <textarea class="input_textarea"></textarea>
          </div>
        </div>
      </div>
      <!-- 健康日记 -->
      <div class="healthManager_healthDiary">
        <h3>健康日记</h3>
        <!-- 时间和按钮 -->
        <div class="healthManager_healthDiay_time">
          <div class="time">上次测量(<span>2019-02-02</span>)</div>
          <div class="more">更多</div>
          <div class="add">添加</div>
        </div>

        <!-- 运动 -->
        <div class="healthManager_healthDiary_play">
          <div class="healthManager_healthDiary_play_title"><span>运动</span></div>
          <div class="healthManager_healthDiary_play_detail">
            <!-- 第一行 -->
            <div class="row">
              <span>11:45</span>
              <span>慢跑</span>
              <span>20分钟</span>
              <span>30Kcal</span> 
            </div>
            <!-- 第二行 -->
            <div class="row">
              <span>11:45</span>
              <span>慢跑</span>
              <span>20分钟</span>
              <span>30Kcal</span> 
            </div>
            <!-- 第三行 -->
            <div class="row">
              <span>11:45</span>
              <span>慢跑</span>
              <span>20分钟</span>
              <span>30Kcal</span> 
            </div>
            <!-- 第四行 -->
            <div class="row">
              <span>11:45</span>
              <span>慢跑</span>
              <span>20分钟</span>
              <span>30Kcal</span> 
            </div>
          </div>
        </div>
        <div class="healthManager_healthDiary_food">
            
            <div class="healthManager_healthDiary_food_title"><span>饮食</span></div>
            <div class="healthManager_healthDiary_food_detail">
              <!-- 第一行 -->
              <div class="row">
                <div class="row_time">
                  <span>11:45</span>
                  <span>20分钟</span>
                  <span>30Kcal</span> 
                </div>
                <div class="row_detail">
                  <p>菠菜100g，花菜200g，瘦肉50g</p>
                </div>
              </div>
              <!-- 第二行 -->
              <div class="row">
                <div class="row_time">
                  <span>11:45</span>
                  <span>20分钟</span>
                  <span>30Kcal</span> 
                </div>
                <div class="row_detail">
                  <p>菠菜100g，花菜200g，瘦肉50g</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <!-- 家庭医生 -->
      <div class="healthManager_homeDoc">
        <h3>家庭医生</h3>

        <div class="healthManager_homeDoc_show">
          <!-- 医生一 -->
          <div class="showDoc">
            <div class="img">img</div>
            <div class="doctor">
              <div class="docName">
                张医生
              </div>
              <div class="consult">
                咨询
              </div>
            </div>
          </div>
          <!-- 医生二 -->
          <div class="showDoc">
            <div class="img">
              <!-- 图片 -->
            </div>
            <div class="doctor">
              <div class="docName">
                张医生
              </div>
              <div class="consult">
                咨询
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部导航 -->
      <div class="healthManager_nav">
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
import http from '../../api/axios.js'
import routerRedirect from '../../api/routerRedirect.js'
export default {
    props: {

    },
    data() {
        return {
          userData:window.localStorage.getItem('userData'),
          healthData:{
            healthDiary:'',
            allDeviceData:'',
            homeDoc:''
          }
        };
    },
    computed: {

    },
    created() {
      routerRedirect.redirect(this);
    },
    mounted() {
      this.doHttp();
    },
    watch: {

    },
    methods: {
      doHttp(){
        this.getHealthDiary();
        this.getAllData2();
        this.getServeUser();
      },
      // 健康日记
      getHealthDiary(){
        // let userData=window.localStorage.getItem('userData');
        let data={
          "type":"APP_A",
          "data":{
            "userId":this.userData.userId,
            "token":this.userData.token,
            "msg":[{
              "recordDate":''
            }],
            "size":1
          }
        }
        http.httpMethod('post','/record/getHealthDiary',data).then(response=>{
          this.healthData.healthDiary=response.data[0];
        }).catch(err=>{
          console.log('getHealthDiary.....'+err);
        });
      },
      // 获取最近测量数据
      getAllData2(){
        // 这里缺省一个userid，让其查询自身
        let data={
          "type":"APP_A",
          "data":{
            "userId":this.userData.userId,
            "token":this.userData.token,
            "msg":[{
              "withDate":'',
              "terminalType":"1"
            }],
            "size":1
          }
        }
        http.httpMethod('post','/record/getAllData2',data).then(response=>{
          this.healthData.allDeviceData=response.data[0];
        }).catch(err=>{
          console.log('getAllData2.....'+err);
        });
      },
      // 家庭医生
      getServeUser(){
        let data={
          "type":"APP_A",
          "data":{
            "userId":this.userData.userId,
            "token":this.userData.token,
            "msg":[{
              "withDate":'',
              "terminalType":"1"
            }],
            "size":1
          }
        }
        http.httpMethod('post','/record/getServeUser',data).then(response=>{
          this.healthData.homeDoc=response.data[0];
        }).catch(err=>{
          console.log('getServeUser.....'+err);
        });
      }

    },
    components: {

    },
};
</script>

<style lang="scss" scoped>
.icon {
  // width: 4em;
  // height: 4em;
  width: 4em;
  height: 4em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // color:#000;
}
.iconfont{
  font-size: 90px;
}
.healthManager_container{
  // padding-left:30px;
  // padding-right:30px;
  position: relative;
  .healthManager_container_wallpaper{
    height: 130px;
    background-color: #44c660;
  }
  // 健康数据
  .healthManager_healthData{
    padding-left:30px;
    padding-right:30px;

    h3{
      font-weight: normal;
      font-size: 30px;
    }
    .healthManager_healthData_time{
      height: 60px;
      position: relative;
      margin-bottom: 20px;
      &>div{
        display: inline-block;
        position: absolute;
        line-height: 60px;
        border-radius: 30px;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        border:2px solid #d7d7d7;
      }
      .time{
        left: 20px;
        font-size: 26px;
      }
      .more{
        right: 150px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
        font-size: 26px;
      }
      .add{
        right: 40px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
        font-size: 26px;
      }
    }
    .data_detail{
      margin-left: 30px;

      &>div{
        border: 2px solid #d7d7d7;
        border-radius: 10px;
        margin-bottom: 20px;
        &>div:first-child{
          border-bottom: 2px solid #d7d7d7;
        }
      }
      
      .data_detail_title{
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        // margin-bottom: 10px;

        &>span:first-child{
          padding-left: 10px;
        }
        &>span:last-child{
          padding-right: 10px;
        }
      }
      .detail{
        height: 130px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 24px;
        // margin-bottom: 30px;
        &>*{
          width: 24%;
          text-align: center;
        }
        
      }
      .docEvaluate{
        border: none;
        .docEvaluate_title{
          font-size: 24px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          border: none;
          .docName{
            margin-right: 10px;
          }
        }
        .input_textarea{
          border: 2px solid #d7d7d7;
          width: 100%;
          height: 200px;
          font-size: 28px;
        }

      }
    }
  }

  // 健康日记
  .healthManager_healthDiary{
    padding-left:30px;
    padding-right:30px;
    margin-top: 40px;
    

    h3{
      font-weight: normal;
      font-size: 30px;
    }
    .healthManager_healthDiay_time{
      height: 60px;
      position: relative;
      margin-bottom: 20px;
      &::after{

      }
      &>div{
        display: inline-block;
        position: absolute;
        line-height: 60px;
        border-radius: 30px;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        border:2px solid #d7d7d7;
      }
      .time{
        left: 20px;
        font-size: 26px;

      }
      .more{
        right: 150px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
        font-size: 26px;
      }
      .add{
        right: 40px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 10px;
        font-size: 26px;
      }
    }
    .healthManager_healthDiary_play{
      display:flex;
      margin-bottom: 20px;
      font-size: 24px;
      .healthManager_healthDiary_play_title{
        width: 30%;
        position: relative;
        span{
          color:#44c660;
          font-size: 26px;
          position: absolute;
          left:30px;
          top: 0;
        }
      }
      .healthManager_healthDiary_play_detail{
        padding-left: 30px;
        .row{
          margin-bottom: 6px;
          span{
            margin-right:15px;
            
          }
        }
      }
    }
    .healthManager_healthDiary_food{
      display: flex;
      font-size: 24px;
      .healthManager_healthDiary_food_title{
        width: 30%;
        position: relative;
        span{
          font-size: 26px;
          color:#44c660;
          position: absolute;
          left:30px;
          top: 0;
        }
      }
      .healthManager_healthDiary_food_detail{
        padding-left: 30px;
        .row{
          margin-bottom: 20px;
        }
        .row_time{
          margin-bottom: 10px;
          span{
            margin-right:20px;
          }
        }
        .row_detail>p{
          // text-indent: 15px;
          padding-left: 15px;
          margin: 0;
          white-space: wrap;
          
        }
      }
    
    }
  }
  // 家庭医生
  .healthManager_homeDoc{
    padding-left:30px;
    padding-right:30px;
    margin-top: 40px;
    padding-bottom: 120px;
    

    h3{
      font-weight: normal;
      font-size: 30px;
    }
    .healthManager_homeDoc_show{
      display: flex;
      .showDoc{
        width:50%;
        text-align: left;
        display: flex;
        position: relative;
        .img{
          width: 180px;
          height: 230px;
          background-color: #44c660;
        }

        .doctor{
          .docName{
            font-size: 26px;
            position: absolute;
            top: 22%;
            padding-left: 30px;
          }
          .consult{
            border: 2px solid #d7d7d7;
            padding: 12px 25px;
            border-radius: 10px;
            position: absolute;
            bottom: 50px;
            margin-left: 15px;
            font-size: 24px;
          }
        }
      }
    }
  }
  // 底部导航
  .healthManager_nav{
    font-size: 26px;
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
      border: solid 1px #000;
      line-height: 100px !important;
    }
    &>div:first-child{
      border-right: none;
    }
  }
}
</style>
