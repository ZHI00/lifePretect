<template>
    <div class="personanRemind">
      <!-- 提醒对象 -->
      <div class="user">
        <span class="remindTips">提醒范围：</span>
        <van-radio-group v-model="radio">
          <van-radio 
            name="1" 
            checked-color="rgb(69, 194, 153)">我管理的所有人</van-radio>
          <van-radio 
            @click="onclickDisease"
            name="2" 
            checked-color="rgb(69, 194, 153)"><span class="disease">限病种</span>

          <!-- 这里是选择框 -->
          <mu-select 
          multiple 
          separator="，"
          v-model="pickerDisease"
          ref="muSelect">
             <mu-option v-for="(disease,index) in diseases" :key="index" :label="disease" :value="disease"></mu-option>
          </mu-select> 
          </van-radio>
        </van-radio-group>
      </div>

      <!-- 提醒周期 -->
      <div 
      class="remindTime" 
      @click="onclick">
        <span class="remindTips">提醒周期：</span>
        <van-checkbox-group v-model="checkboxResult">
          <van-checkbox
            v-for="(item, index) in checkboxList"
            :key="index"
            :name="item"
            checked-color="rgb(69, 194, 153)"
          >
            星期{{ item }}
          </van-checkbox>
        </van-checkbox-group>
      </div>

      <!-- 提醒内容 -->
      <div class="remindContent">
        <span class="remindTips">提醒内容</span>
        <textarea v-model="textareaValue"></textarea>
      </div>
        
      <!-- 提交 -->
      <div 
      class="submit"
      @click="dohttp"><span>确定</span></div>
    </div>
</template>

<script>
import { Select,Option } from 'muse-ui/lib/Select'
import { Notify } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
export default {
    data() {
        return {
          // 单选框数据
          radio:'1',
          // radioData:'test',

          //下拉框数据
          diseases:['一','二','三','四','五','六','日','一1','二1','三1','四1','五1','六1','日1','一2','二2','三2','四2','五2','六2','日2'],  //病种
          pickerDisease:[],    //选择到的病种


          // 复选框数据
          checkboxList:['一','二','三','四','五','六','日'],
          checkboxResult:[],
          checkboxData:['0','1','2','3','4','5','6'],

          // 文本框内容
          textareaValue:''
        };
    },
    computed: {
      
    },
    created() {

    },
    mounted() {
      
    },
    watch: {

    },
    methods: {
      onclick(){
        console.log(this.checkboxResult);
      },
      dohttp(){
        // 这里根据axios结果显示notify内容和颜色
        Notify({
          message: '提交成功或者失败',
          duration: 1000,
          background: '#1989fa'
        });
        console.log(this.pickerDisease)
        console.log(this.textareaValue)
        console.log(this.radio)
      },
      test(){
        return 1
      },
      onclickDisease(){
        console.log(12)
        this.$refs.muSelect.$emit('click');
      }

    },
    components: {
      'van-checkbox':Checkbox,
      'van-checkbox-group':CheckboxGroup,
      'van-radio-group':RadioGroup,
      'van-radio':Radio,
      'mu-select':Select,
      'mu-option':Option

    },
};
</script>

<style lang="scss" scoped>
.personanRemind{
  padding: 50px 60px;
  margin-left: 30px;
  font-size: 30px;
  &>div{
    margin-bottom: 30px;
  }
  .van-checkbox-group{
    display: flex;
    flex-wrap: wrap;
    .van-checkbox{
      width: 50%;
      box-sizing: border-box;
      padding-left: 15px;
      margin: 15px 0;
    }
  }
  .remindTips{
    font-weight: bold;
  }
  .user{
    // 单选框群组
    .van-radio-group{
      padding-left: 15px;
      .van-radio{
        display:flex;
        align-items: center;
        min-height: 80px;
        position: relative;
        .disease{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          // position: relative;
          // top: 10px;
        }
        .van-radio__label{
          line-height: 60px;
        }
      }
      
    }
    // 下拉选择框
    // 关键是这个组件不能脱离文档流，不然文本过长就上面撑开
    .mu-input {
      width: 80%;
      min-height: 80px;
      margin-left: 100px;
      padding: 0;
      position: relative;
      top: 15px;
      

      
    }
  } 
  .remindContent{
    textArea{
      display: block;
      width: 95%;
      margin-top: 15px;
      min-height: 300px;
      left: 16px;
      position: relative;
      border: 2px solid #d7d7d7;
    }
  }
  .submit{
    text-align: center;
    margin-top: 90px;
    span{
      display:inline-block;
      border:2px solid #d7d7d7;
      border-radius: 10px;
      padding: 8px 50px;
    }
  }
}
</style>
<style lang="scss">
.mu-select-content{
  padding-left: 20px;
  height: 100%;
}
.mu-selection-text{
  font-size: 28px;
  height: 30px;
  line-height:30px;
}
.mu-list-dense .mu-item-title{
  font-size: 28px;
}
.mu-select-input{
  height: 0px;
}
.mu-option.is-selected .mu-item{
  color: rgb(69, 194, 153);
}
.mu-secondary-text-color{
  color: rgb(69, 194, 153);
}
</style>

