<template>
    <div>
      <div class="setData">
        <!-- 头部 -->
        <div class="setData_header">
          <mt-button @click.native='goback' icon="back"></mt-button>
            <span class="title">手动记录</span>
            <!-- <mt-button class="setData_header_save" type="primary">保存</mt-button> -->
            <div 
            class="setData_header_save"
            @click="doHttp"
            >保存</div>
        </div>

        <!-- 测量时间 -->
        <div class="setdate">
          <p>测量时间</p>

          <van-button @click="showTimePicker=true" class="setdate_btn" type="default">{{getDate}} {{getTime}}</van-button>
          <!-- 时间选择器弹出层 -->
          <van-popup v-model="showTimePicker" position="bottom">
            <van-datetime-picker
              v-model="currentDate"
              type="datetime"
              :min-date="minDate"
              :max-date="maxDate"
              @cancel="showTimePicker=false"
              @confirm="TimePickerConfirm"
            />
          </van-popup>
        </div>

        <!-- 测量数据选择 -->
        <div class="setdataBtn" @click="popupShow">
          <!-- 参数 -->
          <!-- 这里传参数来确定数量以及文本 -->
          <p class="deviceTitle">{{preset.title}}</p>

          <!-- 血糖选择时间段 -->
          <div 
          class="timeFrame"
          v-if="preset.show.timeFrame"
          >
            <van-radio-group 
            v-model="radio"
            @change="radioChange"
            >
              <van-radio name="1">早餐前</van-radio>
              <van-radio name="2">早餐后</van-radio>
              <van-radio name="3">午餐前</van-radio>
              <van-radio name="4">午餐后</van-radio>
              <van-radio name="5">晚餐前</van-radio>
              <van-radio name="6">晚餐后</van-radio>
            </van-radio-group>

          </div>

          <!-- 这里是按钮 -->
          <van-button
          round 
          size="large"
          v-for="(item,index) in preset.btnsItem"
          :key="index"
          :type="item.btnType"
          @click="popupArr[item.popupIndex]=true;getIndex(item.popupIndex)"
          v-if="preset.show.btn"
          >{{item.beforeText}}<span v-text="btnText(index)">--</span>{{item.afterText}}</van-button>

          <!-- 这里是尿液手动记录
          <van-button
          round 
          size="large"
          v-for="(item,index) in preset.btnsItem"
          :key="index"
          :type="item.btnType"
          @click="popupArr[item.popupIndex]=true;getIndex(item.popupIndex)"
          v-if="preset.show.btn"
          >{{item.beforeText}}<span v-text="saveData[$route.query.deviceType][index]">--</span>{{item.afterText}}</van-button> -->

         <!-- 填写数据 -->
        <div 
        class="writedata"
        v-if="preset.show.write"
        >
            <div 
            class="row"
            v-for="(item,index) in preset.btnsItem"
            :key="index"
            >
              <span>{{item.beforeText}}</span>
              <input 
              type="number" 
              placeholder="请输入数据"
              @input="oninput($event,index)"
              >
              <span>{{item.afterText}}</span>
            </div>
        </div>
        
        </div>

       

        <!-- 数据选择弹出层 -->
        <div 
        class="setdataPicker"  
        :key="popupdata">

        <!-- 原来的设置 -->
          <!-- <van-popup 
          v-for="(item,index) in popupArr" 
          :key="index" 
          :lazy-render="false"
          v-model="popupArr[index]" position="bottom"> -->

          <van-popup 
          v-for="(item,index) in preset.btnsItem" 
          :key="index" 
          :lazy-render="false"
          v-model="popupArr[index]" 
          position="bottom">
            <keep-alive>
            <van-picker
              show-toolbar
              title="请选择"
              :columns="columnData(index)"
              @cancel="onCancel"
              @confirm="DataConfirm"
            />


            <!-- 之前直接使用 columnsReturn返回数组-->
            </keep-alive>
          </van-popup>
        </div>

        
      </div>
    </div>
</template>

<script>
import { Picker } from 'vant';
import { DatetimePicker } from 'vant';
import { Button } from 'vant';
import { Popup } from 'vant';
// import btnDatas from '../../config/createRecord.js'
import { loadavg } from 'os';
import { RadioGroup, Radio } from 'vant';
import { clearTimeout, setTimeout } from 'timers';
import { Dialog } from 'vant';
import http from '../../api/axios.js';
import { Notify } from 'vant';
// 检测是否登陆
import routerRedirect from '../../api/routerRedirect.js'

export default {
    data() {
        return {
          // 时间选择弹出层
          showTimePicker:false,
          // 时间按钮提示
          getDate:'请选择时间',
          getTime:'',
          // 测量按钮变量
          preset:require('../../config/createRecord.js').default[this.$route.query.deviceType],
          // 定义一个数组作为弹出层状态
          popupArr:new Array(11).fill(false),
          // 时间选择器
          minHour:10,
          maxHour: 20,
          minDate: new Date(2015, 1, 1),
          maxDate: new Date(),
          currentDate: new Date(),


          // 弹出层更新
          popupdata:Math.random(),
          
          // 第几个按钮confirm数据
          btnIndex:'',

          // 获取测量数据
          deviceData:[],

          // 单选框
          radio:0,

          // input事件稀释
          inputTimer:'',

          // 保存设置的数据
          saveData:{
            date:{
              year:'',
              month:'',
              day:'',
              time:''
            },
            // shoudong
            manualEntry:1,
            sphy:{
              // 收缩压
              systolic:'',
              // 舒张
              diastolic:'',
              // xinlv
              heartRate:''

            },
            pulm:{
              // 肺活量
              vitalCapacity:'',
              // fengliusu
              pef:'',
              // pingjunliusu
              af:''
            },
            bodyfat:{
               weight:'',
            },
            gluc:{
              // 血糖
              bloodSugar:'',
              measureType:'',
            },
            // xueyang
            oxim:{
              saturation:'',
              heartRate:''
    
            },
            // xuezhi
            LDX:{
              // zongdanguchun
              TC:'',
              TG:'',
              HDL:'',
              LDL:'',
             
            },
            // 尿酸
            uric:{
              UA:'',
            },
            // niaoye
            urine:{
              // bizhong
              SG:'',
              // ph
              pH:'',
              // putaotang
              GLU:'',
              // danbaizhi
              PRO:'',
              // niaodanyuan
              UBG:'',
              // qianxue
              BLD:'',
              // danhongsu
              BIL:'',
              // yaxiaosuanyan
              NIT:'',
              // baixibao
              LEU:'',
              // tongti
              KET:'',
              // VC
              VC:'',
            },
            // tiwen
            ther:{
              temperature:'',
            }
            
          },
          urineData:[
            //比重
            [
              {
                values:['1.000','1.005','1.010','1.015','1.020','1.025','1.030'],
                defaultIndex:0
              }
            ],
            //PH
            [
              {
                values:['5.0','6.0','6.5','7.0','7.5','8.0','8.5'],
                defaultIndex:0
              }
            ],
            // 葡萄糖
            [
              {
                values:['-','+-','+1','+2','+3','+4'],
                defaultIndex:0
              }
            ],
            // 蛋白质
            [
              {
                values:['-','+-','+1','+2','+3','+4'],
                defaultIndex:0
              }
            ],
            // 尿胆原
            [
              {
                values:['-','+1','+2','+3'],
                defaultIndex:0
              }
            ],
            // 潜血
            [
              {
                values:['-','+1','+2','+3'],
                defaultIndex:0
              }
            ],
            // 胆红素
            [
              {
                values:['-','+1','+2','+3'],
                defaultIndex:0
              }
            ],
            // 亚硝酸盐
            [
              {
                values:['-','+'],
                defaultIndex:0
              }
            ],
            // 白细胞
            [
              {
                values:['-','+-','+1','+2','+3'],
                defaultIndex:0
              }
            ],
            // 酮体
            [
              {
                values:['-','+-','+1','+2','+3','+4'],
                defaultIndex:0
              }
            ],
            // VC维生素c
            [
              {
                values:['-','+-','+1','+2','+3'],
                defaultIndex:0
              }
            ],
          ],
          // apis
          apis:{
            // 血压
            sphy:'addBloodPressure',
            // 肺活
            pulm:'addLunginstrument',
            // 体脂秤
            bodyfat:'addBodyfatscale',
            // 血糖
            gluc:'addGlucometer',
            // 血氧
            oxim:'addOxygen',
            // 血脂仪
            LDX:'addBloodLipid',
            // 尿酸
            uric:'addUa',
            // 尿液
            urine:'addUran',
            // 体温
            ther:'addTemperature'
          }
        };
    },
    methods: {
      goback(){
        history.back();
      },
      // 确定时间
      TimePickerConfirm(value) {
        
        console.log(value.getDate())
       
        let month=value.getMonth()+1;
        this.getDate=value.getFullYear()+'-'+month+'-'+value.getDate();
        this.getTime=value.getHours()+':'+value.getMinutes()+':'+value.getSeconds();

        console.log(this.getDate+' '+this.getTime)
        this.saveData.date=this.getDate+' '+this.getTime;
        this.showTimePicker=false;
        console.log(this.saveData.date)

        


        

        
      },
      // 确定数据1
      DataConfirm(value,index){
        // this.popupArr[this.btnIndex]=false;

        // Object.keys可以把keys顺序与index对应

        // console.log(this.saveData)
        console.log(this.btnIndex)
        console.log(value,index)
        this.$set(this.popupArr,this.btnIndex,false);

        let keys=Object.keys(this.saveData[this.$route.query.deviceType]);
        
        // console.log(keys)
        this.saveData[this.$route.query.deviceType][keys[this.btnIndex]]=value[0];
        // console.log(this.saveData[this.$route.query.deviceType])

      },
      // 获取点击的弹出层index，然后控制popupArr这个数组，就能控制弹出层的开关
      getIndex(index){
        // 这index是btnData的key，需要处理
        this.btnIndex=index;

      },
      // 弹出层取消时
      onCancel() {
        this.$set(this.popupArr,this.btnIndex,false);
        console.log(this.btnIndex)
        console.log("quxiao")
      },
      //填充数组
      fillArr(lengths,precision,initNum){
        let arr=new Array(lengths).fill(1);
        arr.forEach((item,index)=>{
          // arr[index]=index; 整数
          if(precision===0.1){
            arr[index]=(index*precision+initNum).toFixed(1)
          }else{
            arr[index]=(index*precision+initNum)
          }
        })
        return arr;
      },
      // 按钮弹窗显示选择数据
      popupShow(event){
        Array.prototype.forEach.call(document.querySelectorAll(".setdataBtn button"),(item,index)=>{
          if(item===event.target){
            this.popupArr[index]=true;
            this.popupdata=Math.random();
          }
          
        })
      },
      columnsReturn(index){
        // 拿到btnData的keys数组

        // let index=Object.keys(btnDatas.btnData[this.$route.query.deviceType])[btnIndex]

        // if(btnIndex!==btnDatas.btnData[this.$route.query.deviceType][index].popupIndex){
        //   return 
        // }
        
        // 拿到每个按钮参数
        // let cache=btnDatas.btnData[this.$route.query.deviceType][index];
        console.log(index+"--------")
     
        let cache=this.preset.btnsItem[index];

        // let arr=this.fillArr(cache.lengths,cache.precision,cache.initNum);
        // console.log(arr,cache.lengths,cache.precision,cache.initNum)

        let arr=this.fillArr(cache.lengths,cache.precision,cache.initNum);
        // console.log(arr,cache.lengths,cache.precision,cache.initNum)

        // let arr=this.fillArr(201,0.1,0);
        return [
            {
              values:arr, 
              // defaultIndex:100,
              defaultIndex:cache.curIndex,
              className:'datapick'
            }
          ]
      },
      columnData(index){
        if(this.$route.query.deviceType==='urine'){
          return this.urineData[index];
        }else{
          return this.columnsReturn(index)
        }
      },
      // 设置按钮字体颜色
      changeBtnColor(){
        document.getElementsByClassName('mint-button-text')[0].style.color="#000 !important";
      },
      // 单选框
      radioChange(name){
        if(this.preset.show.timeFrame){
          this.saveData[this.$route.query.deviceType].measureType=name;
          console.log(this.saveData[this.$route.query.deviceType].measureType)
        }
        
        
      },
      oninput(event,index){
        let keys;
        clearTimeout(this.inputTimer)
        this.inputTimer=setTimeout(()=>{
          keys=Object.keys(this.saveData[this.$route.query.deviceType]);
          this.saveData[this.$route.query.deviceType][keys[index]]=event.target.value;
        },200)
        console.log(this.saveData[this.$route.query.deviceType])
      },

      // 按钮拿到测量数据
      btnText(index){
        let key=Object.keys(this.saveData[this.$route.query.deviceType]);
        return this.saveData[this.$route.query.deviceType][key[index]]
      },
      // 这里拿到数据了
      doHttp(){
        // 优化，这里可以继续解耦合
        // routerRedirect.redirect(this);
        let userData=window.localStorage.getItem('userData');
        // 拿到uid和token
        
        // 优化，可以把data定义在vue的data里，比较好看
        let data={
          "type":" APP_A",
          data:{
            "userId":userData.userId,
            "token":userData.token,
            "msg":[],
            "size":1
          }
          
        }
        // 先让第一项成为对应的设备对象,这里面已经包含数据
        // 优化，这里和上面可以做一个方法，获取数据以及整合
        data.data.msg[0]=this.saveData[this.$route.query.deviceType];
        // 设置手动记录
        data.data.msg[0].manualEntry=1;
        // 获取测量时间
        data.data.msg[0].measureDate=this.getDate+' '+this.getTime;
        console.log(data.data.msg[0])
        
        // 对数据完整性检验
        // 优化，可以把检验完整性提取出来
        for(let item in data.data.msg[0]){
          console.log(item)
          if(data.data.msg[0][item]===''){
            Notify({
              message: '还有数据没填好哦',
              duration: 1000,
              background: '#ff5000'
            });
            return
          }
          if(data.data.msg[0][item]==='请选择时间 '){
            // 留意这里有个空格
            // 留意这里有个空格
            // 留意这里有个空格
            Notify({
              message: '还有时间没填哦',
              duration: 1000,
              background: '#ff5000'
            });
            return
          }
        }


        console.log(data)
        // 拉起请求
        http.httpMethod('post','/health/'+this.apis[this.$route.query.deviceType],data).then(response=>{
          console.log(response);
          Notify({
            message: '上传成功',
            duration: 1000,
            background: '#44c660'
          });
        }).catch(err=>{
          console.log(err)
           Notify({
            message: '上传失败，请重试',
            duration: 1000,
            background: '#ff5000'
          });
        })
        
      }
    },
    components: {
      Picker,
      DatetimePicker,
      'van-button': Button,
      'van-popup': Popup,
      'van-radio-group': RadioGroup,
      'van-radio': Radio,
      Dialog
    },
    mounted(){
      this.popupArr=new Array(this.preset.btnsItem.length).fill(false);
      // console.log(btnDatas)
      this.changeBtnColor()
    },
    created(){
      console.log(require('../../config/createRecord.js').default[this.$route.query.deviceType])
      // routerRedirect.redirect(this)
      routerRedirect.redirect(this);
    },
    computed:{
      
    }
};
</script>

<style lang="scss" >
.setData .mint-button--normal{
    position: absolute;
    margin-left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background-color: transparent;
    box-shadow: none;
}
.setData .mint-button-icon{
    transform: scale(1.5);
}

.setData .mint-button-text{
  color:#000 !important;
  font-size: 24px;
  width: 100%;
  height: 100%;
  position: relative;
  top: -5px;
}
.setData .mint-button--primary{
  width:140px;
  height: 50px;
  border: 2px solid #d7d7d7;
  border-radius: 10px;
  
}


.setData .van-button{
  height: 80px;
  margin-bottom: 55px;
}
.setData .van-button__text{
  font-size: 24px;
}
.setData .van-button__text>span{
  margin-left: 20px;
  margin-right: 20px;
}
// .van-picker{
//   width:100%;
//   height: 100%;

//   .van-picker__toolbar{
//     height: 100px;
//     line-height: 100px;
    
//     &>div{
//       font-size: 26px;
//     }
//   }
//   .van-picker__columns{
//     height: 650px;
//   }
// }
// .column__item{
//   font-size:22px;
// }

// 埋点
// .van-popup--bottom{
//   height: 50vh;
// }
.setData .van-picker__toolbar{
  height: 100px;
  line-height: 100px;
  &>div{
    font-size: 24px;
    padding-right:20px;
    padding-left:20px;
  }
}
.setData .van-picker__columns{
  // 埋点，其实不用填高度都可以的
  // height: 700px !important;
  .van-picker-column{
    height: 100% !important;
    font-size: 28px;
  }
}
.setData .van-picker-column__item--selected{
  color:#44c660;
  font-size: 36px;
}
.setData .van-radio-group{
  padding-bottom: 20px;
  font-size: 28px;
  display: flex;
  &>.van-radio{
    width: 48% !important;
    // display: inline-block;
    text-align: center;
    margin: 12px 0;

    & .van-radio__input{
      font-size: 24px;
    }
  }
}

// 这个是弹出提示的样式
// 通用样式，放在app那里吧
.van-notify{
  font-size: 28px;
  height: 60px;
  line-height: 58px;
}
</style>
<style lang="scss" scoped>
.setData{
    background-color:#f5f5f5;
    overflow: hidden;
}
.title{
    position: absolute;
    left:50%;
    transform:translateX(-50%);
    font-size:36px;
    line-height:100px;
}
.setData_header{
    height: 100px;
    // margin-bottom:10px;
    padding-bottom:10px;
    background-color:#ffffff;
    position: relative;
}
// 这是采用第三方的样式
// .setData_header_save{
    // background-color: transparent !important;
    // position: absolute;
    // right: 30px;
    // top:20px;
    // padding-top: 12px;
    // padding-bottom:12px;
// }
.setData_header_save{
    background-color: transparent !important;
    position: absolute;
    right: 30px;
    top:20px;
    padding:12px 40px;
    border:2px solid #d7d7d7;
    border-radius:10px;
    font-size:26px;
}
.setdate{
  height:190px;
  background-color:#fff;
  width:100%;
  box-sizing:border-box;
  padding-left:72px;
  padding-right:72px;
  margin:0 auto;
  padding-top:20px;
  
  position: relative;
}
.setdate>p{
  position: relative;
  left: -50px;
  font-size:26px;
  margin-top:10px;
}


.setdate_btn{
  margin-left:30px;
  border:2px solid #d7d7d7;
  padding-left:20px;
  padding-right:20px;
  font-size:26px;
  border-radius:10px;
  height:70px;

}
.setdataBtn{
  width:100%;
  box-sizing:border-box;
  padding-left:72px;
  padding-right:72px;
  margin:0 auto;
  background-color:#fff;
  padding-top:20px;
  // margin-bottom:20px;
  position: relative;
}
.setdataBtn::after{
  content:'';
  display:block;
  width:95%;
  height: 3px;
  position: absolute;
  top:77px;
  background-color:#d7d7d7;
  left:13px;
  

}
.deviceTitle{
  position: relative;
  left: -50px;
  font-size:26px;
  margin-bottom:50px;
  // padding-bottom:50px;
  margin-top:10px;
  
}
// 直接输入样式
.writedata{
  font-size:24px;
  background-color:#fff;
  // text-align:center;
  padding:20px 0;
  &>.row{
    margin:20px 0; 
    vertical-align:middle;
    padding-left: 35px;
    &>span:first-child{
      text-align:right;
      display:inline-block; 
      width:170px;
    }
    &>input{
      padding-left:12px;
      box-sizing:border-box;
      margin:0 12px;
      width:200px;
      border:none;
      border-bottom:2px solid #d7d7d7;
      font-size:22px;
    }
  }
}
</style>

