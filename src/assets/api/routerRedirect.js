import { Notify } from 'vant';
// 引入时候的命名，就等于这个对象
// 可以引入这个在页面创建前检测一下用户信息
export default {
  redirect(self){
    let userData=window.localStorage.getItem('userData');
    // 没打算设置过期时间，所以就不检测时间了

    // 要是这个提示框还没显示完就跳转，则可以使用弹出框
    if(!userData){
      Notify({
        message: '你还没有登陆，请登录',
        duration: 1000,
        background: '#ff5000'
      });
      setTimeout(()=>{
        self.$router.push({
          path:'/userLogin'
        })
      },1000)
    }
  }
}