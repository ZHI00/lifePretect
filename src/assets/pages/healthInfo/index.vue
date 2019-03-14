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
          :should-disable-date="allowedDates"
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
export default {

    data() {
        return {
          // 选中日期
          pickerDate:'',
          // 日期组件显示
          datapickerShow:false
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

    },
    methods: {
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
      allowedDates(date){
        console.log(date)
        return date.getDate() % 2 === 0
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
        
        setTimeout(()=>{
          this.datapickerShow=false;
        },300)
        

      },
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

}
.mu-day-button-bg{
  height: 34px; /* no */
  width:34px; /* no */
}


</style>

