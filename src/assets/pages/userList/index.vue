<template>
<!-- 这里得有一个默认头像才行 -->
    <div class="userList">
      <!-- 一项对话 -->
      <router-link :to="{path:'userInfo'}">

        <div class="user_item">
          <div class="left">
            <div class="user_via">
              <!-- 到时候这个路径就是获取返回回来的src -->
              <img 
              v-if="false"
              src="../../img/via.jpg"
              alt="头像">
              <span
              v-else 
              class="iconfont icon-home"></span>
            </div>
            <div class="user_content">
              <!-- 第一行 -->
              <p class="row_one">
                <span class="user_name">张三</span>
                <span class="disease_type">糖尿病</span>
              </p>
              <!-- 第二行 -->
              <p class="row_two">
                <span class="msg_time">
                  <span class="msg_status"></span>
                  <span>2019-03-03 15:55</span>  
                </span>
                <span class="msg">测量了血压，血氧血压，血氧血血氧血氧血氧</span>
              </p>
            </div>
          </div>
          <span class="right">></span>
        </div>
      </router-link>

      <foooter class="footer"></foooter>
    </div>
</template>

<script>
import footer from '../../components/footer/index'
export default {
    props: {

    },
    data() {
        return {

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

    },
    components: {
      'foooter':footer
    },
};
</script>

<style lang="scss" scoped>
.iconfont{
  font-size: 55px;
  // margin: 0 auto;
  color: #fff;
}
.userList{
  a{
    color: #000;
  }
  .user_item{
    position: relative;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    margin-top: 40px;
    padding-left: 30px;
    .left{
      flex: 1;
      display: flex;
      .user_via{
        height: 80px;
        width: 80px;
        background-color: rgb(69, 194, 153);
        align-self: center;
        border-radius: 50%;
        margin-right:15px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user_content{
        flex:1;
        p{
          position: relative;
          margin: 0;
          margin: 10px 0;
        }
        .row_one{
          .user_name{
            font-weight: bold;
            font-size: 28px;
          }
          .disease_type{
            color: #aaa;
            position: absolute;
            line-height: 41px;
            left: 30%;
            transform: translateX(-50%);

          }
        }
        .row_two{
          display:flex;
          justify-content: flex-start;
          .msg{
            position: relative;
            margin-left: 50px;
            width: 320px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

          }
          .msg_time{
            position: relative;
            // padding-left: 15px;
            &>span:last-child{
              padding-left: 18px;
            }
            .msg_status{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              display: inline-block;
              width: 13px;
              height: 13px;
              border-radius: 50%;
              background-color: #ff5000;
            }
          }
        }
      }
    }
    .right{
      position: absolute;
      font-size: 36px;
      right: 20px;
    }
  }
  .footer{
    position: fixed;
    bottom: 0;
  }
}
</style>
