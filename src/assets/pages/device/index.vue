<template>
    <div class="his_container">
    <mt-loadmore 
    :bottom-method="loadBottom" 
    :bottom-all-loaded="allLoaded"
    :autoFill="autofill"
    ref="loadmore">
        <div class="header">
            <!-- 头部 -->
            
            <mt-button @click.native='goback' icon="back"></mt-button>
            <span class="title">{{preset.title}}</span>
            <router-link 
            class="testBtn" 
            :to="{path:'/setdata',query:{deviceType:$route.query.deviceType}}"
            v-if="preset.show.setdata"
            >
                <div>手动记录</div>
            </router-link>
            
        </div>


        <!-- 内容区域 -->
        <!-- 请求参数 -->
        <!-- 通过参数来确定 navbar数量以及文本 -->
        <!-- 同时也是确定请求参数 -->

        <div class="content">
            <!-- 这里是navbar -->
            <!-- 插眼 -->
            <!-- <mt-navbar v-model="selected" v-if="show('tabbar')">
                <mt-tab-item v-for="(item,index) in tabbarItem" :key="index" :id="item.id">{{item.text}}</mt-tab-item>
            </mt-navbar> -->

            <mt-navbar 
            v-model="selected" 
            v-if="show('tabbar')"
            :key="tabbarKey"
            @click.native="getNavBarIndexAndUpdata"
            >
                <mt-tab-item 
                v-for="(item,index) in preset.tabbarItem" :key="index" 
                :id="item.id"
                :index="item.index">{{item.text}}</mt-tab-item>
            </mt-navbar>
            
            <!-- 血糖仪时间段 -->
            <div 
            class="timeFrame" 
            v-if="show('timeFrame')">
                <div class="above">
                    <div class="breakfast">早餐</div>
                    <div class="lunch">午餐</div>
                    <div class="dinner">晚餐</div>
                </div>
                <div class="under" @click="clickUnderBtn">
                    <!-- config要设置每个按钮的请求参数，也就是id -->
                    <button 
                    class="before" 
                    index=0
                    >前</button>
                    <button 
                    class="after" 
                    index=1
                    >后</button>
                    <button 
                    class="before" 
                    index=2
                    >前</button>
                    <button 
                    class="after"
                    index=3
                    >后</button>
                    <button 
                    class="before"
                    index=4
                    >前</button>
                    <button 
                    class="after"
                    index=5
                    >后</button>
                </div>
            </div>

            <!-- 折线图 -->
            <!-- 参数 -->
            <div class="linechart" v-if="show('chart')">
                <span 
                class="tips" 
                v-if="!show('chart') && polar.series[0].data.length!=0"
                >{{tips}}</span>
                <div class="echart_container">
                    <v-chart 
                    ref="echart" 
                    v-if="echartReset" 
                    :options="polar"/>
                </div>
            </div>
            <!-- 按钮 -->
            <!-- 请求参数 -->
            <!-- 这里主要是明确请求的参数，做好按钮的对应 -->
            <div 
            @click='Btnclick' 
            class="btnGroup"
            v-if="show('btnGroup')"
            >
                <button 
                class="btn" 
                :id="preset.btns.week.id">一周</button>
                <button 
                class="btn" 
                :id="preset.btns.month.id">一月</button>
                <button 
                class="btn" 
                :id="preset.btns.trimester.id">三月</button>
                <!-- <button class="btn" id="3">一年</button> -->
            </div>
           
            <!-- 环形信息 -->
            <!-- 参数 -->
            <!-- 主要设置百分比 -->
            <div 
            class='circle_info' 
            v-if="show('circle_info') && infoReset && whenHeadle">
            <!-- 圆环html代码 不要删除 -->
                <!-- <div class='circle' v-if="updataCircle">
                    <van-circle
                        v-model="currentRate"
                        color="#07c160"
                        fill="#fff"
                        :size="circleSize"
                        layer-color="#d7d7d7"
                        :text="text"
                        :rate="rate"
                        :speed="100"
                        :clockwise="false"
                        :stroke-width="60"
                        />
                </div> -->
                <div 
                class="circle"  
                v-if="show('circle')">
                    <div class="rate statusTips">
                        <!-- {{currentRate}}% -->
                        目前状态为
                    </div>
                    <div class="status" v-text="text">
                    </div>
                </div>
                <div 
                class='info' 
                v-if="show('info')"
                >
                    <div>
                        <p 
                        class="detail"
                        v-for="(item,index) in preset.items[selected]"
                        :key="index"
                        >{{item.textbefore}}<span class="detail_data"> 参数 </span>  {{item.textafter}}</p>
                    </div>
                </div>
            </div>

            <!-- 手环信息 -->
            <!-- 手环这里直接绑定就好 -->
            <div 
            class="handle_info"
            v-if="show('stepNum') && selected===0">
                <!-- 手环步数 -->
                <div class="handle_info_stepNum">
                    <div class="handle_info_detail">
                        <p>步数</p>
                        <p><span class="handle_info_detail_data">--</span>步</p>
                    </div>
                    <div class="handle_info_detail">
                        <p>卡路里</p>
                        <p><span class="handle_info_detail_data">--</span>千卡</p>
                    </div>
                    <div class="handle_info_detail">
                        <p>里程</p>
                        <p> <span class="handle_info_detail_data">--</span>公里</p>
                    </div>
                </div>
            </div>

            <!-- 历史记录 -->
            <div 
            class="history"
            v-if="show('moreHistroy') && historyReset"
            >
                <van-collapse v-model="activeName" accordion>
                        <van-collapse-item title="2019年3月6日 16:20" 
                        :value="statusLabel"
                        :value-class="statusLabelClass"
                        name="1">
                            <!-- <span :class="statusLabel">{{statusText}}</span> -->
                            <div class="history_info">
                                <!-- 即将修改这里 -->
                                    <div class="history_info_detail"
                                    v-for="(item,index) in preset.history"
                                    :key="index"
                                    >{{item.textbefore}}<span class="history_info_detail_num"> 参数</span>  {{item.textafter}}</div>    
                                

                                <!-- <div class="history_info_detail"
                                v-for="(item,index) in preset.items[navbarIndex]"
                                :key="index"
                                >{{item.textbefore}}<span class="history_info_detail_num"> 参数</span>  {{item.textafter}}</div> -->


                                <!-- <p class="history_info_detail">舒张压<span>--</span>mmHg</p>
                                <p class="history_info_detail">心率<span>--</span>bpm</p> -->



                            </div>
                        </van-collapse-item>

                        <van-collapse-item title="2019年3月6日 16:20" 
                        :value="statusLabel"
                        :value-class="statusLabelClass"
                        name="2">
                            <!-- <span :class="statusLabel">{{statusText}}</span> -->
                            <div class="history_info">
                                <p class="history_info_detail"
                                v-for="(item,index) in preset.history"
                                :key="index"
                                >{{item.textbefore}}<span class="history_info_detail_num"> 参数</span>  {{item.textafter}}</p>
                            </div>
                        </van-collapse-item>
                    
                </van-collapse>
            </div>
            
            
        </div>
    </mt-loadmore>
    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { constants } from 'fs';
import echarts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legendScroll'
import { Circle } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Badge } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import http from  '../../api/axios.js';


export default {
    data() {
        return {
            autofill:false,
            // 定义navbarIndex
            navbarIndex:0,
            // 定义一下圆环的大小
            // circleSize:'170px',
            // 圆环更新参数
            updataCircle:true,
            //缓存一下对应配置数据
            // perset:{},
            preset:require('../../config/historyRecord.js').default[this.$route.query.deviceType],
            // 导航条index,初始为0
            selected:0,
            tips:'暂时未有数据',
            // 按钮Id
            btnId:2,

            // 圆环信息status
            statusText:'异常',

            // 折线图配置
            xAxis_data_week:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            xAxis_data_month:['00','01','02','03','04','05','06','07','08','09','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
            xAxis_data_trimester:['00','01','02','03','04','05','06','07','08','09','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','00','01','02','03','04','05','06','07','08','09','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','00','01','02','03','04','05','06','07','08','09','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
            polar:{
                axisPointer: {
                    snap: true,
                    lineStyle: {
                        color: '#44c660',
                        opacity: 0.5,
                        width: 2
                    },
                    label: {
                        show: true,
                        // formatter: (params)=> {
                        //     return params.value;
                        // },
                        backgroundColor: '#004E52'
                    },
                    handle: {
                        show: false,
                        color: '#004E52'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    axisLabel: {        
                        show: true,
                        interval:0,
                        textStyle: {
                            color: '#44c660',
                            fontSize:'12'
                        }
                    },
                },
                dataZoom: [{
                    type: 'slider',
                    id: 'dataZoomX',
                    show: true,
                    xAxisIndex: [0],
                    start: 10,
                    end: 90, //初始化滚动条
                    backgroundColor:'rgba(47,69,84,0)'
                }],
                yAxis: {
                    type: 'value',
                    axisLabel: {        
                        show: true,
                        textStyle: {
                            color: '#44c660',
                            fontSize:12
                        }
                    },
                },
                series: [{
                    data: [0,1,2,9,24],
                    type: 'line',
                    itemStyle : {
                        borderWidth:2, 
                        normal: {
                            label : 
                            {
                                show: true,
                                fontSize:12
                            }
                        }
                    }
                }]
            },
            // 环形图信息
            currentRate:20,
            rate:60,
            // 历史记录选中index
            activeName:'1',
            // echartReset  用来更新
            echartReset:true,
            // tabbarKey
            tabbarKey:Math.random(),
            // 更新info栏目
            infoReset:true,
            // 更新history
            historyReset:true,
            // historytext
            historyStatusText:'异常',
            timeFrameIndex:0,
            // 返回的数据
            returnData:[
                {
                    measureDate:'',
                    status:'正常_0',
                    heartRate:''
                }
            ],
            //上拉加载更多
            allLoaded:false,
            apis:{
                sphy:'getBloodPressure',
                pulm:'getLunginstrument',
                bodyfat:'getBodyfatscale',
                bangle:'getBand',
                gluc:'getGlucometer',
                oxim:'getOxygen',
                LDX:'getBloodLipid',
                uric:'getUa',
                urine:'getUran',
                ther:'getTemperature',
                elec:'getEcg'
            }
        }
    },
    mounted() {
        // 初始化
        this.init();
        // 插入一个状态小标签
        // this.insertStatus();
        // 改变下面按钮颜色
        this.changeBtnColor();
        // 改变圆环字体颜色
        this.status();

        this.doHttp();
        

    },
    watch: {
        // 监听导航条变化
        selected(newval,oldval){
            // this.typeId=newval;
            console.log(newval)
            console.log(oldval)
            // 挖坑  通过导航条修改请求的
        },
    },
    methods: {
        // 获取navbar的index
        getNavBarIndexAndUpdata(event){
            console.log(event.target)
            if(event.target.tagName==='A'){
                this.navbarIndex=event.target.getAttribute('index');
                
                
            }else if(event.target.tagName==='DIV'){
                this.navbarIndex=event.target.parentElement.getAttribute('index')
            }
            
            this.updataInfo_echart_history();
            this.status();
            
        },
        // 设置按钮字体颜色
        changeBtnColor(){
            document.getElementsByClassName('mint-button-text')[0].style.color="#FFF !important";
        },
        // 按钮点击
        Btnclick(event){
            if(event.target.tagName!=='BUTTON'){
                return;
            }
            Array.prototype.forEach.call(document.getElementsByClassName('btn'),(item,index)=>{
                item.style.backgroundColor='rgb(204,204,204)';
            })
            event.target.style.backgroundColor='#44c660';

            // 获取按钮id
            this.getBtnId(event.target);

            // 设置折线图宽以及请求参数
            const echart=document.getElementsByClassName("echart_container")[0];
            console.log(echart)
            if(this.btnId==2){
                echart.style.width="100%";
                this.polar.xAxis.data=this.xAxis_data_week;
                console.log('btnId'+this.btnId)
                //留个坑，放参数
            }else if(this.btnId==3){
                echart.style.width="300%";
                this.polar.xAxis.data=this.xAxis_data_month;
                console.log('btnId'+this.btnId)
                //留个坑，放参数
            }else if(this.btnId==4){
                echart.style.width="700%";
                this.polar.xAxis.data=this.xAxis_data_trimester;
                console.log('btnId'+this.btnId)
                //留个坑，放参数
            }
            this.echartUpdata();
        },
        // 获取按钮id
        getBtnId(dom){
            // 获取btnid
            this.btnId=dom.getAttribute('id');
            console.log(typeof this.btnId);
        },
        // 初始化
        init(){
            // 设置导航条初始化
            var onclick = new Event('click',{"bubbles":true});
           
            document.getElementsByClassName('mint-tab-item')[this.selected] &&document.getElementsByClassName('mint-tab-item')[this.selected].dispatchEvent(onclick);

            // 设置日期按钮初始化
            document.getElementsByClassName('btn')[0] &&document.getElementsByClassName('btn')[0].dispatchEvent(onclick);

            // 设置时间段按钮初始化
            document.getElementsByClassName("before")[0] &&document.getElementsByClassName("before")[0].dispatchEvent(onclick);

            //折线图自适应
            this.echartUpdata();



            // 配置一下圆环的大小
            if(document.getElementsByClassName("circle")[0]){

                this.circleSize=document.getElementsByClassName("circle")[0].getBoundingClientRect().height*0.6+'px';
                this.updataCircleMethod();
            }

            
            
        },
        
        // 折线图刷新
        echartUpdata(){
            this.updataEle('echartReset')
        },
        // 更新状态info
        infoUpdata(){
           
            this.updataEle('infoRest');
            // 重新判断一下字体颜色
            this.status();

        },
        // 更新history
        historyUpdata(){
            this.updataEle('historyReset');
        },
        updataEle(key,callback){
            this[key]=false;
            this.$nextTick(()=>{
                this[key]=true; 
                callback && callback();
            })
        },
        // 回退
        goback(){
          history.back();  
        },
        // 插入一个标签状态
        insertStatus(){
            // 这里应该要加一个判断才对，不然怎么选择插入呢
            console.log('777')
            
            let goodStatus="<span class='goodStatus'>正常</span>";
            let badStatus="<span class='badStatus'>异常</span>";
            Array.prototype.forEach.call(document.getElementsByClassName('van-cell__title'),(item,index)=>{
                item.innerHTML=item.innerHTML+badStatus;
            }) 

        },
        // 挖坑 点击按钮后修改图标数据和x轴坐标

        // 点击时间段按钮，请求参数还没配置呢
        clickUnderBtn(event){
            if(event.target.tagName==='BUTTON'){
                // console.log(document.getElementsByClassName('under')[0].children)
                Array.prototype.forEach.call(document.getElementsByClassName('under')[0].children,(item,index)=>{
                    item.style.backgroundColor="#d7d7d7";
                    item.style.color="#000";
                    event.target.style.backgroundColor="#44c660";
                    event.target.style.color="#fff";
                })
                
                // 获取按钮index
                this.timeFrameIndex=event.target.getAttribute('index');
                console.log(this.timeFrameIndex)
            }
        },


        // 圆环更新
        updataCircleMethod(){
            this.updataCircle=false;
            this.$nextTick(()=>{
                this.updataCircle=true;
            })
        },

        // 通用显示隐藏
        show(key){
            return this.preset.show[key];
        },

        // // 健康状态字体样式
        // status(){
        //     let status=document.querySelector('.status').innerHTML
        //     if(!status){
        //         return
        //     }
        //     if(status==='正常'){
        //         document.querySelector('.circle').style.color='#44c660';

        //     }else if(status==='异常'){
        //         document.querySelector('.circle').style.color='#ff5000';
        //     }
        // },


          // 健康状态字体样式
        status(){
            // console.log(document.querySelector('.status'))
            let dom=document.querySelector('.status')
            if(!dom){
                return
            }
            if(dom.innerHTML==='正常'){
                document.querySelector('.circle').style.color='#44c660';

            }else if(dom.innerHTML==='异常'){
                document.querySelector('.circle').style.color='#ff5000';
            }
        },
        updataInfo_echart_history(){
            // 只需要echart更新就行
            this.echartUpdata();
            // this.infoUpdata();
            //history应该不用更新，因为数据会更新
            // this.historyUpdata();
            
        },
        // 获取请求参数
        doHttp(){
            // let props_1;
            let data={
                "userId":"123",
                "token":"token",
                "msg":[
                    {
                        "pageIndex":"1",
                        "pageSize":"20",
                        "terminalType":"1"
                    }
                ],
                "size":1

            };

            
            // if(this.preset.show.tabbar){
            //     props_1=this.preset.tabbarItem[this.selected].id;
            // }

            // 添加withDate
            if(this.preset.show.btnGroup){
                data.msg[0].withDate=this.btnId;
            }

            
            if(this.preset.show.timeFrame){
                console.log(this.timeFrameIndex)
                data.msg[0].measureType=this.preset.timeFrame[this.timeFrameIndex];
            }
            
            console.log(data)
            // return allProps;
            let url=this.apis[this.$route.query.deviceType];
            console.log(url)
            http.httpMethod('post',url,data).then(response=>{
                console.log(response);
            }).catch(err=>{
                console.log(err)
            })

        },
        loadBottom(){
            console.log('下拉更新了')
            this.$refs.loadmore.onBottomLoaded();
        },
        loadTop(){
            this.$refs.loadmore.onTopLoaded();
        }
    },
    components: {
        Navbar, 
        TabItem,
        mtButton :Button,
        'v-chart': echarts,
        'van-circle': Circle,
        'van-collapse': Collapse,
        'van-collapse-item':CollapseItem,
        'mt-badge':Badge,
        'mt-loadmore': Loadmore
    },
    computed: {
        text() {
            //正常还是异常，应该是服务器的反馈 
            // 根据返回的数据设置状态
            if(this.statusText==='正常'){
                return '正常'
            }else if(this.statusText==='异常'){
                return '异常'
            }

            // if(this.returnData[0].status.indexOf('0')!==-1){
            //     return '正常'
            // }else{
            //     return '异常'
            // }
        },
        statusLabelClass(){
            // 这里应该要获取一下index
            if(this.historyStatusText==='正常'){
                return 'good_Status';
            }else if(this.historyStatusText==='异常'){
                return 'bad_Status';
            }
        },
        statusLabel(){
            if(this.historyStatusText==='正常'){
                return '正常';
            }else if(this.historyStatusText==='异常'){
                return '异常';
            }
        },
        whenHeadle(){
            if(this.$route.query.deviceType!=='bangle'){
                return true;
            }else if(this.$route.query.deviceType==='bangle'){
                if(this.selected!==0){
                    return true;
                }else{
                    return false;
                }
            }
        },
        // doHttp(){
        //     let btnKey=Object.keys(this.preset.btns)[this.btnId];
        //     let props_1;
        //     let data={
        //         "userId":"123",
        //         "token":"token",
        //         "msg":[
        //             {
        //                 "withDate":"2",
        //                 "pageIndex":"1",
        //                 "pageSize":"20",
        //                 "terminalType":"1"
        //             }
        //         ],
        //         "size":1

        //     };

        //     // 这里是用来拼凑接口api地址的
        //     if(this.preset.show.tabbar){
        //         props_1=this.preset.tabbarItem[selected].id;
        //     }
        //     if(this.preset.show.btnGroup){
        //         data.msg.withDate=this.preset.btns[btnKey].id;
        //     }
        //     if(this.preset.show.timeFrame){
        //         console.log(this.timeFrameIndex)
        //         data.measureType=this.preset.timeFrame[this.timeFrameIndex];
        //     }
            
        //     console.log(data)
        //     // return allProps;
        // }

    },
    
};
</script>

<style lang="scss">
    // tabbar组件下边距
    .his_container .mint-navbar{
        // margin-bottom: 15px;
        padding-bottom:15px;
    }
    // tabbar 字体
    .his_container .mint-tab-item-label{
        font-size: 26px !important;
        color: #44c660;
    }
    // 修改返回按钮
    .his_container .mint-button--normal{
        position: absolute;
        margin-left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
        height: 60px;
        background-color: transparent;
    }
    .his_container .mint-button-icon{
        transform: scale(1.5);
    }
    .his_container .mint-button--default{
        box-shadow: none;
    }
    //tabbar底部线条颜色
    .his_container .mint-navbar .mint-tab-item.is-selected{
            border-bottom: 3px solid #44c660;
            margin-bottom: -1px !important;
    }
    // 这是修改组件返回按钮点击后得样式
    .his_container .mint-button::after{
        background-color: transparent;
    }

    .his_container .mint-button--primary{
        background-color:#44c660 !important;
        width:140px;
        height: 50px;
        font-size:24px;
        
    }
    .his_container .mint-button-text{
        color:#fff !important;
    }
    .his_container .mint-loadmore-text{
        font-size: 28px;
    }
</style>
<style lang="scss" scoped>
    .his_container{
        background-color:#f5f5f5;
        overflow: scroll;
        height: 100vh;
    }
    .mint-loadmore{
        // overflow:scroll;
    }
    .header{
        height: 100px;
        // margin-bottom:10px;
        padding-bottom:10px;
        background-color:#ffffff;
        position: relative;
    }
    .title{
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        font-size:36px;
        line-height:100px;

    }
    .testBtn{
        display:inline-block;
        position: absolute;
        right: 30px;
        top:50%;
        transform:translateY(-50%);
        font-size:26px;
        padding:12px;
        border-radius:10px;
        border:2px solid #d7d7d7;
        color:#000;
        
    }
    .timeFrame{
        background-color:#fff;
        text-align:center;
        &>div{
            display:flex;
            width:100%;
            height: 60px;
            font-size:24px;
            line-height:60px;
        }
        .above{
            &>div{
                background-color:#f5f5f5;
                flex:1;
            }
        }
        .under{

            &>button{
                display:block;
                width:16.6%;
                flex:1;
                background-color:#d7d7d7;
                box-sizing:border-box;
                border-radius:10px;
                margin-left:3px;
                margin-right:3px;
                box-shadow:none;
                line-height:60px;   
            }
        }

    }
    .content{
        width: 100%;
    }
    // 折线图样式
    .linechart{
        width:100%;
        padding-left:25px;
        padding-right:25px;  
        padding-bottom:20px;
        box-sizing:border-box;
        background-color:#ffffff;
        overflow-x: scroll;
        margin:0 auto;
    }
    // 按钮样式
    .btnGroup{
        display:flex;
        // justify-content: space-around;
        justify-content:space-around;
        // margin-top: 20px;
        background-color:#ffffff;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
    .btn{
        width:126px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(204,204,204);
        font-size: 24px;
        box-shadow: none;
        color: #ffffff;
    }
    // 按钮活跃颜色
    .active{
        background-color:#44c660;
    }
    .tips{
        display:block;
        text-align:center;
        position: relative;
        top:45%;
        font-size:22px;
        color:rgb(246,196,62);
    }

    
    // .echarts {
    //     height: 100%;
    //     // 埋点 设置折线图x轴方向尺寸
    //     width:100% !important;
       
    // }
    // .echart_container{
    //     width:300%;
    // }

    // .echarts>div{
    //     width:100% !important;
    //     height: 100% !important;
    // }
    // .echarts>div>canvas{
    //     width:100% !important;
    //     height: 100% !important;
        
    // }
</style>
<style lang="scss">
// 这是环形的样式
    // .circle{
    //     width:50%;
    //     min-height: 360px;
    //     box-sizing:border-box;
    //     padding:30px;
    //     // padding-left:130px;
    //     // position: relative;
    //     display:flex;
    //     justify-content: center;
    //     align-items:center;
    // }


// 这个是改用直接显示的样式
    .circle{
        width:35%;
        // min-height: 360px;
        box-sizing:border-box;
        padding:30px;
        display:flex;
        justify-content: center;
        align-items:center;
        flex-direction:column;
        color:#44c660;
        &>div{
            font-size:34px;

        }
        &>div:first-child{
            margin-bottom:20px;
        }
    }
    .normal{
        color:#44c660;
    }
    .anomaly{
        color:#ff5000;
    }



    .circle_info{
        display:flex;
        background-color:#fff;
        margin-bottom: 20px;
    }
    .circle ~ .info{
        font-size:26px !important;
        padding-left:20px !important;
        position: relative !important;

    }
    
    .circle ~ .info>div{
        margin-top:60px;
        margin-bottom:60px;
    }
    .statusTips{
        font-size:20px !important;
        text-indent:-100px;
    }
    .circle_info .info:first-child{
        font-size:26px;
        width:100%;
        text-align:center;
        
    }

    .detail{
        position: relative;
        margin:14px 0;

    }
    .history_info{
        display:flex;
        flex-wrap: wrap;
    }
    .history_info_detail{
        width:45%;
        margin:10px 0;
        font-size:24px;
        padding-left:40px;
    }
    .history_info_detail>span{
        font-size:24px;
    }
    
    
    .goodStatus{
        margin-left:30px;
        font-size:20px;
        line-height:56px;
        background-color:#44c660;
        padding:3px;
        border-radius:5px;
        color:#fff;
    }
    .badStatus{
        margin-left:30px;
        font-size:20px;
        line-height:56px;
        background-color:#ff5000;
        padding:3px;
        border-radius:5px;
        color:#fff;
    }

    .good_Status{
        margin-left:30px;
        font-size:20px;
        background-color:#44c660;
        padding:5px;
        border-radius:5px;
        color:#fff;
        position: absolute;
        top:19px;
        left: 40%;
        z-index:999;
        display:inline-block !important;
    }
    .bad_Status{
        margin-left:30px;
        font-size:20px;
        background-color:#ff5000;
        padding:5px;
        border-radius:5px;
        color:#fff;
        position: absolute;
        top:19px;
        left: 40%;
        z-index:999;
        display:inline-block !important;
    }
</style>
<style lang="scss">
    .van-cell__title{
        font-size:30px;
        height:50px;
        line-height:50px;
    }
    .van-cell__right-icon{
        width:10px !important;
        height:10px !important;
    }
    .van-cell__right-icon::before{
        width:13px !important;
        height:13px !important;
        position: relative;
        top:15px;
    }
    .van-circle__text{
        position: relative;
        font-size: 26px;
        color: #44c660;
        
    }

    .echarts {
        height: 100%;
        // 埋点 设置折线图x轴方向尺寸
        width:100% !important;
       
    }
    .echart_container{
        width:300%;
    }

    .echarts>div{
        width:100% !important;
        height: 100% !important;
    }
    .echarts>div>canvas{
        width:100% !important;
        height: 100% !important;
        
    }
</style>
<style lang="scss" scoped>
    // 手环数据
    .handle_info{
        background-color:#fff;
        margin-bottom:20px;
        .handle_info_stepNum{
            display:flex;
            color:#000 !important;
        }
    }
    .handle_info_detail{
        font-size:24px;
        text-align:center;
        width:33.333%;
        position: relative;
    }
    .handle_info_detail:nth-child(n+2)::after{
        content: '';
        display: block;
        height: 80%;
        width: 3px;
        position: absolute;
        left: 0;
        background-color: #d7d7d7;
        top: 13px;
    }
</style>


