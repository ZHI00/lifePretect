import Vue from 'vue'
import App from './App'
import router from './router'
import vueTouch from 'vue-plugin-touch';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css';
import '../src/assets/iconfont/iconfont.js'
import Vant from 'vant';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// import historyRecord from '../../config/historyRecord.js';

Vue.use(Vant);
Vue.use(Mint);
Vue.use(MuseUI)
Vue.use(vueTouch);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
