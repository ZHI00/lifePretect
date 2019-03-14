<template>
    <div class="panel">
      <div class="panel_header">
        <!-- 埋点 设备title -->
        <div class="title">{{title}}</div>
        <!-- 埋点 测量时间 -->
        <div 
        v-if="msg.measureTime"
        >{{msg.measureTime}}</div>
      </div>
      <div class="panel_content">
        <div class="iconbox">
          <!-- <span class="iconfont icon-dianshi"></span> -->
          <!-- 插入icon -->
          <slot></slot>
        </div>
        <div class="databox">
          <!-- 埋点 -->
          <div 
          class="data_detail"
          v-for="(item,index) in preset[device].item"
          :key="index"
          >
            <div>
              <!-- 埋点 数据数字 -->
              <!-- msg是数据对象 -->
              <span 
              class="num"
              v-if="msg[preset[device].prop[index]]"
              v-text="msg[preset[device].prop[index]]"
              >&nbsp;</span>

              <span class="unit">{{preset[device].unit[index] || '&nbsp;'}}</span>  
            </div>
            <div class="item">{{item}}</div>
          </div>
        </div>
      </div> 
    </div>
</template>

<script>
export default {
    props: {
      // 传进来的参数
      title:{
        type:String,
        default:'尿液分析仪'
      },
      device:{
        type:String,
        default:'sphy'
      },
      deviceData:{
        type:Object,
        default(){
          return {
            "deviceName":"血压计",
            "status":"正常",
            "measureTime":"2019-03-12 18:12",
            "param":[
              {
                "paramName":"diastolic",
                "paramValue":"132"
              },
              {
                "paramName":"systolic",
                "paramValue":"122"
              },
              {
                "paramName":"heartRate",
                "paramValue":"100"
              }
            ]
          }
        }
      }
    },

    // 数据处理问题，对于msg，遍历param，把key=value。最后把time加上去
    // 数据处理成功
    
    data() {
        return {
          preset:{
            // 血压
            sphy:{
              item:['收缩压','舒张压','心率'],
              unit:['mmHg','mmHg','bpm'],
              prop:['diastolic','systolic','heartRate']
            },
            // 体脂称
            bodyfat:{
              item:['体重','BMI','脂肪率','身体年龄','腰臀比','人体水分','人体肌肉','骨骼重量','基础代谢','内脏脂肪',],

              unit:['kg','','%','岁','','%','%','kg','Kcal',''],

              prop:['weight','BMI','axungeRatio','bodyage','WHR','moisture','muscle','boneWeight','baseMetabolism','visceralFat']
            },
            // 肺活
            pulm:{
              item:['肺活量','峰流速','平均流速'],
              unit:['ml','L/min','L/min'],
              prop:['vitalCapacity','pef','af']
            },
            // xuetang 
            gluc:{
              item:[''],
              unit:['mmol/L'],
              prop:['bloodSugar']
            },
            // 手环
            bangle:{
              item:['步数','卡路里','里程','心率','睡眠时长','深睡','浅睡','苏醒'],
              unit:['步','千卡','公里','bpm','小时','分钟','分钟','分钟'],
              prop:['steps','kcal','mileage','heartRate','sleepDuration','deepDuration','shallowDuration','wakeupDuration']
            },
            // xueyang
            oxim:{
              item:['血氧饱和度','心率'],
              unit:['%','bpm'],
              prop:['saturation','heartRate']
            },
            // xuezhi
            LDX:{
              item:['卒中风险','总胆固醇','甘油三酯','高密度脂蛋白胆固醇','低密度脂蛋白胆固醇'],
              unit:['','mmol/L','mmol/L','mmol/L','mmol/L'],
              prop:['lapidRatio','TC','TG','HDL','LDL']
            },
            // niaosuan
            uric:{
              item:['尿酸'],
              unit:['mmol/L'],
              prop:['UA']
            },
            // niaoye
            urine:{
              item:['比重','PH','葡萄糖','蛋白质','尿胆原','潜血','胆红素','亚硝酸盐','白细胞','酮体','VC维生素C',],
              unit:['','','','','','','','','','',''],
              prop:['SG','pH','GLU','PRO','UBG','BLD','BIL','NIT','LEU','KET','VC']
            },
            // 体温计
            ther:{
              item:['摄氏度'],
              unit:['℃'],
              prop:['temperature']
            },
          },
          msg:{}
        };
    },
    computed: {
      // 拿到数字index
      getIndex(key){
        let index_=Object.keys(this.msg).findIndex((item,index)=>{
          if(item===key){
            return true;
          }
        })
        console.log(index_)
        return index_;
      },
      
    },
    methods:{
      changeProps(){
        // let msg={};
        this.deviceData.param.forEach((item,index) => {
          this.msg[item.paramName]=item.paramValue;
        });
        this.msg.measureTime=this.deviceData.measureTime;
        console.log(this.msg)
        // return msg;
      }
    },
    mounted(){
      
    },
    created(){
      this.changeProps();
    }
};
</script>

<style lang="scss" scoped>
.iconfont{
  font-size: 70px;
  position: absolute;
  top:16px;
  left:50%;
  transform: translateX(-50%);
}
.panel{
  // padding-left:30px;
  // padding-right:30px; 
  margin-left: 60px;
  margin-right: 30px;
  border: 2px solid #d7d7d7;
  border-radius: 10px;
  .panel_header{
    position: relative;
    
    // margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    border-bottom: 2px solid #d7d7d7;
    // overflow: hidden;
    .title{
      color:#000 !important;
    }
    &>div:first-child{
      padding-left: 20px;
      font-size: 26px;
    }
    &>div:last-child{
      padding-right: 20px;
      font-size: 22px;
      color:#aaa;
    }
  }
  .panel_content{
    display: flex;
    min-height: 130px;
    
    .iconbox{
      width:25%;
      text-align: center;
      position: relative;
      
    }
    .databox{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin-top:20px;
      margin-bottom: 20px;
      .data_detail{
        width: 33.333%;
        text-align: center;
        &>div:first-child{
          
          .num{
            font-size: 28px;
            color: #aaa;
          }
          .num+.unit{
            font-size:20px;
            position: static !important;
            left: 0px !important;
          }
          .unit{
            font-size:20px;
            position: relative;
            left: 30px;
            
          }
        }
        .item{
          font-size: 28px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
