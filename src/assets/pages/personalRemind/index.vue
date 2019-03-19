<template>
    <div class="personanRemind">
      <!-- 提醒对象 -->
      <div class="user">
        <span class="remindTips">提醒对象：</span>
        <span>张三</span>
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
import { Notify } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
export default {
  // 提醒对象应该跳转进来的时候可获取到
    data() {
        return {
          checkboxList:['一','二','三','四','五','六','日'],
          checkboxResult:[],  //这个就是选择日期后的结果，可以用来发给服务器
          checkboxData:['0','1','2','3','4','5','6'],    //这个用来设置每一项的日期参数，暂时没用上【替换选择框name那里】
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
      }
    },
    components: {
      'van-checkbox':Checkbox,
      'van-checkbox-group':CheckboxGroup
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
    &>span:last-child{
      margin-left: 25px;
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
