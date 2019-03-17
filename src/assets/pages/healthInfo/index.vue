<template>
    <div 
    class="healthinfo_container"
    @click='hiddenPicker'
    >

      <div class="dateInfo_header">
        <div class="dateInfo_header_top">
          <!-- 返回btn -->
          <!-- <span @click="goback"><</span> -->
          <mt-button 
          @click.native='goback' 
          icon="back"
          ></mt-button>
          <h4>健康数据</h4>
        </div>
        <div 
        class="dateInfo_header_time"
        >
          <div class="time_box"
          @click.stop="showPicker"
          >
            <span class="iconfont icon-shizhong"></span>
            <span>{{dateText}}</span>
          </div>
          </div>
      </div>

      <!-- 时间选择器 -->
      <div 
        class="datapicker_container"
        v-show="datapickerShow"
        @click.stop="clickPicker"
      >
        <keep-alive>
          <mu-date-picker 
          color="#44c660"
          @change="change"
          :date="date"
          :should-disable-date="allowedDatess"
          ></mu-date-picker>
        </keep-alive>
      </div>



      <!-- 内容 -->
      <div class="healthinfo_content">
        <span class="title">健康包数据</span>
        <div class="healthData">
          
          <info-crad 
          class="info-crad"
          title="血压计"
          device="sphy"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="肺活仪"
          device="pulm"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="体脂秤"
          device="bodyfat"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="手环"
          device="bangle"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="血糖仪"
          device="gluc"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="血氧仪"
          device="oxim"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="血脂仪"
          device="LDX"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="尿酸分析仪"
          device="uric"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="尿液分析仪"
          device="urine"
          ></info-crad>

          <info-crad 
          class="info-crad"
          title="体温计"
          device="ther"
          ></info-crad>
        </div>
      </div>
    </div>
</template>

<script>
import { DatePicker } from 'muse-ui/lib/Picker';
import infoCrad from '../../components/infoCrad/index.vue';
import { setTimeout } from 'timers';
import http from '../../api/axios.js';
import { Promise, when } from 'q';
// import { resolve } from 'dns';
export default {
    // 逻辑
    // 一进来先获取今天的数据，dohttp
    // 点击日期后获取这个第一天【getMonthFirstDay】，利用这个每月第一天来获取这个月有数据的日子【queryDatesWithData】
    // 没有数据的日子设置为禁用，有数据的显示红点
    data() {
        return {
          // 选中日期
          pickerDate:'',
          // 日期组件显示
          datapickerShow:false,
          // 每个月第一天
          queryDate:'',
          // 指定有红点的数据
          assignDate:'',
          // 浏览器里的系统数据
          userData:window.localStorage.getItem('userData'),
          // 全部设备数据
          getData:'',

          
          // 是否改变月份标志位
          // 改变了就是真
          changeMonth:false,
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
      console.log(new Date())
    },
    watch: {
      queryDate(newVal,oldVal){
        this.changeMonth=true;
      },
      pickerDate(newVal,oldVal){
        this.doHttp();
      }
    },
    methods: {
      // allowedDatess
      allowedDatess(date){
        console.log(date)
      },
      goback(){
        history.back();
      },
      hiddenPicker(event){
        console.log(event.target)
        if(this.datapickerShow===true){
          this.datapickerShow=false;
        }
        
      },
      showPicker(){
        if(this.datapickerShow===false){
          this.datapickerShow=true;
        }else{
          this.datapickerShow=false;
        }
        
      },
      clickPicker(){},
      //判断是否可用日期
      async allowedDates(date){
        // 拿到日期年月日
        let dateArr_=[date.getFullYear(),date.getMonth()+1,date.getData()];

        // 等到
        try{
          // 拿到每月第一天，要是这里失败就直接到catch这里了
          await this.getMonthFirstDay(date);
          // 发起请求，看看这个月有没有有数据的日期
          this.assignDate=await this.queryDatesWithData();
          // 检测是否更新日期的标志位，更新完设置标志位为false
          this.changeMonth=false;
        }catch(err){
          console.log(err)
          console.log("不用更新")
        }

        // 返回函数
        if(this.assignDate!=null && !this.changeMonth){
          return this.assignDate.data.every((item,index)=>{
            let dateArr=item.day.split('-');
            // 有一点不等，那就返回true
            // 等全部都不等，那么这个日期就是不可用的
            if(dateArr[0]!=dateArr_[0] || dateArr[1]!=dateArr_[1] || dateArr[2]!=dateArr_[2]){
              return true;
            }
          })
        }
        

      },
      getMonthFirstDay(date){
        return new Promise((resolve,reject)=>{
          if(!this.queryDate || date.getMonth()+1!=this.queryDate.split('-')[1]){
            this.queryDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+'01';
            console.log(this.queryDate);
            resolve();
            return
          }else{
            reject()
          }
        })
      },
      change(date){
        let day;
        let month;
        if(date.getMonth()+1<10){
          month='0'+(date.getMonth()+1);
        }else{
          month=date.getMonth()+1;
        }
        if(date.getDate()<10){
          day='0'+date.getDate();
        }else{
          day=date.getDate();
        }
        this.pickerDate=date.getFullYear()+'-'+month+'-'+day;

        console.log('1111111111111111111111111111')

        setTimeout(()=>{
          this.datapickerShow=false;
        },300)
        

      },
      // 查找存在数据的日期
      queryDatesWithData(){
        let data={
          "type":"",
          "size":"1",
          "data":{
            "msg":[
              {
                "queryType":"1",
                "queryDate":this.queryDate,
                "userId":""
              }
            ],
            "userId":"",
            "token":""
          }
        }
        return new Promise((resolve,reject)=>{
          http.httpMethod('post','/record/queryDatesWithData',data).then(response=>{
            console.log(response)
            resolve(response);
          }).catch(err=>{
            console.log(err)
            reject(err)
          })

        })
      },
      doHttp(){
        let data={
          "type":"APP_A",
          "data":{
            "userId":"this.userData.userId",
            "token":"this.userData.token",
            "msg":[
              {
                "withDate":"this.pickerDate",
                "terminalType":"1",

              }
            ],
            "size":"1"
          }
        }
        http.httpMethod('post','/health/getAllData',data).then(response=>{
          this.getData=response;
          console.log(response)
        }).catch(err=>{
          console.log(err)
        });
      }
    },
    computed:{
      dateText(){
        if(!this.pickerDate){
          let date=new Date();
          let day;
          let month;
          if(date.getMonth()+1<10){
            month='0'+(date.getMonth()+1);
          }else{
            month=date.getMonth()+1;
          }
          console.log(date.getDate())
          if(date.getDate()<10){
            day='0'+date.getDate();
          }else{
            day=date.getDate();
          }
          return date.getFullYear()+'-'+month+'-'+day;
        }else{
          return this.pickerDate;
        }
      },
      // 保留点击的时间
      date(){
        if(this.pickerDate){
          let dateArr=this.pickerDate.split('-');
          return new Date(dateArr[0],dateArr[1]-1,dateArr[2]);
        }else{
          return new Date();
        }
      }
      
    },
    components: {
      'mu-date-picker':DatePicker,
      'info-crad':infoCrad
    },
};
</script>

<style lang="scss" scoped>
.healthinfo_container{
  position: relative;
  height: 100%;
  .datapicker_container{
    z-index: 999;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .dateInfo_header{
    background-color: #44c660;
    color: #fff;
    .dateInfo_header_top{
      height: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      h4{
        font-size: 36px;
        font-weight: normal;
      }
      span{
        font-size: 36px;
        display: inline-block;
        padding: 20px 30px;
        position: absolute;
        left: 20px;
      }
    }
    .dateInfo_header_time{
      height: 110px;
      width:100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .time_box{
        position: absolute;
        padding: 0 20px;
        margin-left: 10px;
        font-size: 28px;
        height: 110px;
        line-height: 110px;
        span:first-child{
          font-size: 36px;
        }
      }
    }
  }
  .healthinfo_content{
    .title{
      display:inline-block;
      font-size: 30px;
      padding: 0 30px;
      height: 60px;
      line-height: 60px;
      border: 2px solid #d7d7d7;
      color: #44c660;
      border-radius: 30px;
      margin-top: 20px;
      margin-left: 30px;
      margin-bottom: 20px;
    }
    .info-crad{
      margin-bottom: 30px;
    }
  }
}

</style>
<style lang="scss">
html,body,#app{
  height: 100vh;
}
.mu-day-button-bg{
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  margin:auto;
}
.mu-datepicker{
  width: 100%;
}

.healthinfo_container .mint-button--normal{
  position: absolute;
  left: 30px;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  background-color:transparent;
  color:#fff;
  box-shadow:none;
  .mint-button-icon{
    transform:scale(1.5);
  }
}
// 设置是否禁用
.mu-day-button .mu-day-button-text{
  color:#ff5000;
  font-weight:bold;
  // color:rgba(68,198,96,1);
}
.mu-datepicker-week{
  opacity: 1;
}
.mu-datepicker-monthday{
  opacity: 1 !important;
}
.disabled .mu-day-button-text{
  color:#000;
  font-weight:normal;

}
.mu-day-button-bg{
  height: 34px; /* no */
  width:34px; /* no */
}


</style>

