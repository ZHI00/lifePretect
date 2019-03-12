<template>
    <div>
      <div class="setData">
        <!-- 头部 -->
        <div class="setData_header">
          <mt-button @click.native='goback' icon="back"></mt-button>
            <span class="title">手动记录</span>
            <!-- <mt-button class="setData_header_save" type="primary">保存</mt-button> -->
            <div class="setData_header_save">保存</div>
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
          <p class="deviceTitle">{{deviceTitle}}</p>

          <!-- 血糖选择时间段 -->
          <div class="timeFrame">
            <van-radio-group 
            v-model="radio"
            @change="radioChange"
            >
              <van-radio name="id1">早餐前</van-radio>
              <van-radio name="id2">早餐后</van-radio>
              <van-radio name="id3">午餐前</van-radio>
              <van-radio name="id4">午餐后</van-radio>
              <van-radio name="id5">晚餐前</van-radio>
              <van-radio name="id6">晚餐后</van-radio>
            </van-radio-group>

          </div>

          <!-- 这里是按钮 -->
          <van-button
          round 
          size="large"
          v-for="(item,index) in btnData"
          :key="index"
          :type="item.btnType"
          @click="popupArr[item.popupIndex]=true;getIndex(item.popupIndex)"
          v-if="item.inputType"
          >{{item.beforeText}}<span>{{item.num}}</span>{{item.afterText}}</van-button>


         <!-- 填写数据 -->
        <div class="writedata">
            <div 
            class="row"
            v-for="(item,index) in btnData"
            :key="index"
            >
              <span>{{item.beforeText}}</span>
              <input type="number" placeholder="请输入数字">
              <span>{{item.afterText}}</span>
            </div>
        </div>
        
        </div>

       

        <!-- 数据选择弹出层 -->
        <div class="setdataPicker"  :key="popupdata">
          <van-popup 
          v-for="(item,index_) in popupArr" 
          :key="index_" 
          :lazy-render="false"
          v-model="popupArr[index_]" position="bottom">
            <keep-alive>
            <van-picker
              show-toolbar
              title="请选择"
              :columns="columnsReturn(index_)"
              @cancel="onCancel"
              @confirm="DataConfirm"
            />
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
import btnDatas from '../../config/createRecord.js'
import { loadavg } from 'os';
import { RadioGroup, Radio } from 'vant';

export default {
    data() {
        return {
          // 时间选择弹出层
          showTimePicker:false,
          // 时间按钮提示
          getDate:'请选择时间',
          getTime:'',
          // 数据选择弹出层
          showDataPicker_0:false,
          showDataPicker_1:false,
          showDataPicker_2:false,
          // 测量按钮变量
          btnData:btnDatas.btnData[this.$route.query.deviceType],
          // 定义一个数组作为弹出层状态
          popupArr:new Array(Object.keys(btnDatas.btnData[this.$route.query.deviceType]).length).fill(false),
          // 测量按钮前的标题
          deviceTitle:btnDatas.deviceTitle[this.$route.query.deviceType],
          // 选择器
          columns: [
            {
              values:this.fillArr(),
              defaultIndex:Math.floor(this.fillArr().length/2),
              className:'datapick'
            }
          ],

          // 时间选择器
          minHour: 10,
          maxHour: 20,
          minDate: new Date(2015, 1, 1),
          maxDate: new Date(),
          currentDate: new Date(),


          // 弹出层更新
          popupdata:Math.random(),
          
          // 第几个按钮confirm数据
          index_:'',

          // 获取测量数据
          deviceData:[],

          // 单选框
          radio:0
        };
    },
    methods: {
      goback(){
        history.back();
      },
      // 确定时间
      TimePickerConfirm(value) {
        
        console.log(value)
        const yearReg=/20[0-9]{2}/ig;
        const dayReg=/[0-9]{2}/ig;
        const timeReg=/[0-2][0-9]:[0-5][0-9]/ig;
        const month=()=>{
          var m=/[a-z]{3}\s([a-z]{3})/ig;
          switch(m.exec(value)[1]){
            case 'Jan':
              return '01';
            case 'Feb':
              return '02';
            case 'Mar':
              return '03';
            case 'Apr':
              return '04';
            case 'May':
              return '05';
            case 'Jun':
              return '06';
            case 'Jul':
              return '07';
            case 'Aug':
              return '08';
            case 'Sep':
              return '09';
            case 'Oct':
              return '10';
            case 'Nov':
              return '11';
            case 'Dec':
              return '12';
          }
        }
      
        console.log(month());

        this.getDate=yearReg.exec(value)[0]+"-"+month()+"-"+dayReg.exec(value)[0];

        this.getTime=timeReg.exec(value)[0];

        this.showTimePicker=false;
      },
      // 确定数据1
      DataConfirm(value,index){
        // this.popupArr[this.index_]=false;
        this.$set(this.popupArr,this.index_,false);
        this.btnData[Object.keys(this.btnData)[this.index_]].num=value[0];
        console.log(value)
      },
      // 获取点击的弹出层index，然后控制popupArr这个数组，就能控制弹出层的开关
      getIndex(index){
        // 这index是btnData的key，需要处理
        this.index_=index;

      },
      // 弹出层取消时
      onCancel() {
        this.$set(this.popupArr,this.index_,false);
        console.log(this.index_)
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
      columnsReturn(index_){
        // 拿到btnData的keys数组
        console.log(index_)
        let index=Object.keys(btnDatas.btnData[this.$route.query.deviceType])[index_]

        // if(index_!==btnDatas.btnData[this.$route.query.deviceType][index].popupIndex){
        //   return 
        // }
        
        // 拿到每个按钮参数
        let cache=btnDatas.btnData[this.$route.query.deviceType][index];
        // console.log(btnDatas.btnData[this.$route.query.deviceType][index])

        let arr=this.fillArr(cache.lengths,cache.precision,cache.initNum);
        console.log(arr,cache.lengths,cache.precision,cache.initNum)

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
      btnShow(){
        
      },
      // 设置按钮字体颜色
      changeBtnColor(){
        document.getElementsByClassName('mint-button-text')[0].style.color="#000 !important";
      },
      // 单选框
      radioChange(name){
        console.log(name)
      }
    },
    components: {
      Picker,
      DatetimePicker,
      'van-button': Button,
      'van-popup': Popup,
      'van-radio-group': RadioGroup,
      'van-radio': Radio
    },
    mounted(){
      this.popupArr=new Array(this.btnData.length).fill(false);
      console.log(btnDatas)
      this.changeBtnColor()
    }
};
</script>

<style lang="scss" >
.mint-button--normal{
    margin-left: 20px;
    top: 4px;
    width: 60px;
    height: 60px;
    background-color: transparent;
    box-shadow: none;
}
.mint-button-icon{
    transform: scale(1.5);
}

.mint-button-text{
  color:#000 !important;
  font-size: 24px;
  width: 100%;
  height: 100%;
  position: relative;
  top: -5px;
}
.mint-button--primary{
  width:140px;
  height: 50px;
  border: 2px solid #d7d7d7;
  border-radius: 10px;
  
}


.van-button{
  height: 80px;
  margin-bottom: 55px;
}
.van-button__text{
  font-size: 24px;
}
.van-button__text>span{
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
.van-picker__toolbar{
  height: 100px;
  line-height: 100px;
  &>div{
    font-size: 24px;
    padding-right:20px;
    padding-left:20px;
  }
}
.van-picker__columns{
  height: 700px !important;
  .van-picker-column{
    height: 100% !important;
    font-size: 28px;
  }
}
.van-picker-column__item--selected{
  color:#44c660;
  font-size: 36px;
}
.van-radio-group{
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
</style>
<style lang="scss" scoped>
.setData{
    background-color:#f5f5f5;
    overflow: hidden;
}
.title{
    position: absolute;
    left:40%;
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
  text-align:center;
  padding:20px 0;
  &>.row{
    margin:20px 0; 
    vertical-align:middle;
    &>input{
      padding-left:12px;
      box-sizing:border-box;
      margin:0 12px;
      width:200px;
      border:none;
      border-bottom:1px solid #d7d7d7;
      font-size:22px;
    }
  }
}
</style>

