<template>
    <div class="container">
        <div class="header">
            <!-- 头部 -->
            
            <mt-button @click.native='goback' icon="back"></mt-button>
            <span class="title">{{title}}</span>
            <router-link class="testBtn" :to="{path:'/setdata',query:{deviceType:'sphy'}}">
                <mt-button type="primary">手动记录</mt-button>
            </router-link>
            
        </div>
        <!-- 内容区域 -->
        <!-- 请求参数 -->
        <!-- 通过参数来确定 navbar数量以及文本 -->
        <!-- 同时也是确定请求参数 -->
        <div class="content">
            <mt-navbar v-model="selected" v-if='show'>
                <mt-tab-item v-for="(item,index) in tabbarItem" :key="index" :id="item.id">{{item.text}}</mt-tab-item>
            </mt-navbar>
            
            <!-- 折线图 -->
            <!-- 参数 -->
            <div class="linechart">
                <span class="tips" v-if="!chartDate.length">{{tips}}</span>
                <div class="echart_container">
                    <v-chart ref="echart" v-if="hackReset" :options="polar"/>
                </div>
            </div>
            <!-- 按钮 -->
            <!-- 请求参数 -->
            <!-- 这里主要是明确请求的参数，做好按钮的对应 -->
            <div @click='Btnclick' class="btnGroup">
                <button class="btn" id="0">一周</button>
                <button class="btn" id="1">一月</button>
                <button class="btn" id="2">三月</button>
                <!-- <button class="btn" id="3">一年</button> -->
            </div>
           
            <!-- 环形信息 -->
            <!-- 参数 -->
            <!-- 主要设置百分比 -->
            <div class='circle_info'>
                <div class='circle'>
                    <van-circle
                        v-model="currentRate"
                        color="#07c160"
                        fill="#fff"
                        size="150px"
                        layer-color="#d7d7d7"
                        :text="text"
                        :rate="rate"
                        :speed="100"
                        :clockwise="false"
                        :stroke-width="60"
                        />
                </div>
                <div class='info'>
                    <div>
                        <p class="detail">收缩压:  <span class="detail_data">--</span>  mmHg</p>
                        <p class="detail">舒张压:  <span class="detail_data">--</span>  mmHg</p>
                        <p class="detail">心率:  <span class="detail_data">--</span>  bpm</p>
                        <p class="detail">心率:  <span class="detail_data">--</span>  bpm</p>
                        <p class="detail">心率:  <span class="detail_data">--</span>  bpm</p>
                        <p class="detail">心率:  <span class="detail_data">--</span>  bpm</p>
                    </div>
                </div>
            </div>

            <!-- 手环信息 -->
            <div class="handle_info">
                <!-- 手环步数 -->
                <div class="handle_info_stepNum" v-if=0>
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
            <div class="history">
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item title="2019年3月6日 16:20" name="1">
                        <div class="history_info">
                            <p class="history_info_detail">收缩压<span>--</span>mmHg</p>
                            <p class="history_info_detail">舒张压<span>--</span>mmHg</p>
                            <p class="history_info_detail">心率<span>--</span>bpm</p>
                        </div>
                    </van-collapse-item>
                </van-collapse>
            </div>
        </div>
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
export default {
    props: {
        title:{
            type:String,
            default:'血压计'
        },
        show:{
            type:Boolean,
            default:true
        },
        // 导航条数据
        tabbarItem:{
            type:Array,
            default(){
                return [{
                    text:'收缩压',
                    id:'0'
                },{
                    text:'舒张压',
                    id:'1'
                },{
                    text:'心率',
                    id:'2'
                }]
            }
        },
        // 图表数据
        chartDate:{
            type:Array,
            default(){
                return [1]
            }
        }
    },
    data() {
        return {
            // 导航条
            selected:0,
            tips:'暂时未有数据',
            // 请求参数
            url:'',
            // navId
            typeId: 0,
            // 按钮Id
            btnId:0,

            // 折线图配置
            xAxisData:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            seriesData:[820, 932, 901, 934, 1290, 90, 1320,820, 932, 901],
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
                            fontSize:'22'
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
                            fontSize:'24'
                        }
                    },
                },
                series: [{
                    data: [1,4,5,6,3,67,99],
                    type: 'line',
                    itemStyle : {
                        borderWidth:4, 
                        normal: {
                            label : 
                            {
                                show: true,
                                fontSize:22
                            }
                        }
                    }
                }]
            },
            // 环形图信息
            currentRate:80,
            rate:60,
            // info栏,通过请求获取,包含文字以及数据，文字还是通过几个页面判断来显示吧
            textTips:[
                [  //xueya
                    {
                        textbefore:'收缩压',
                        textafter:'mmHg'
                    },
                    {
                        textbefore:'舒张压',
                        textafter:'mmHg'
                    },
                    {
                        textbefore:'舒张压',
                        textafter:'mmHg'
                    }
                    
                ]
            ],
            infoItems:{},
            // 历史记录选中index
            activeName:'1',
            // hackReset  用来更新
            hackReset:true

        }
    },
    mounted() {
        // 初始化
        this.init();
        this.insertStatus();
        this.changeBtnColor();
    },
    watch: {
        // 监听导航条变化
        selected(newval,oldval){
            this.typeId=newval;
            console.log(newval)
            console.log(oldval)
            
            // 挖坑  通过导航条修改请求的
        }
    },
    methods: {
        // 设置按钮字体颜色
        changeBtnColor(){
            document.getElementsByClassName('mint-button-text')[0].style.color="#000 !important";
        },
        // 按钮点击
        Btnclick(event){
            Array.prototype.forEach.call(document.getElementsByClassName('btn'),(item,index)=>{
                item.style.backgroundColor='rgb(204,204,204)';
                // console.log(item)
            })
            event.target.style.backgroundColor='#44c660';

            // 获取按钮id
            this.getBtnId(event.target);

            // 设置折线图宽以及请求参数
            const echart=document.getElementsByClassName("echart_container")[0];
            console.log(echart)
            if(this.btnId==0){
                echart.style.width="100%";
                console.log('000000000')
                //留个坑，放参数
            }else if(this.btnId==1){
                echart.style.width="300%";
                console.log('1111111111')
                //留个坑，放参数
            }else if(this.btnId==2){
                echart.style.width="500%";
                console.log('222222222222')
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
            document.getElementsByClassName('mint-tab-item')[0].dispatchEvent(onclick);

            // 设置日期按钮初始化
            document.getElementsByClassName('btn')[0].dispatchEvent(onclick);

            // 设置折线图适应
            // const self = this;
            // setTimeout(() => {
            // window.onresize = function () {
            //     self.chart = echarts.init(self.$refs.lineChart);
            //     self.chart.resize();
            // };
            // }, 20);

            //折线图自适应
            this.echartUpdata();
            
        },
        
        // 折线图刷新
        echartUpdata(){
            this.hackReset=false;
            this.$nextTick(()=>{
                this.hackReset=true;
            })
        },
        // 回退
        goback(){
          history.back();  
        },
        // 插入一个标签状态
        insertStatus(){
            // 这里应该要加一个判断才对，不然怎么选择插入呢
            let goodStatus="<span class='goodStatus'>正常</span>";
            let badStatus="<span class='badStatus'>异常</span>";
            Array.prototype.forEach.call(document.getElementsByClassName('van-cell__title'),(item,index)=>{
                item.innerHTML=item.innerHTML+badStatus;
            }) 
        },
        // 挖坑 点击按钮后修改图标数据和x轴坐标
        // 请求应该是  设备型号+导航id+时间按钮id
        updataEchart(){
            ajax.get(this.url)
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
        'mt-badge':Badge
    },
    computed: {
        text() {
            if(this.currentRate<50){
                return '正常'
            }else{
                return '异常'
            }
        }
  }
};
</script>

<style lang="scss">
    // tabbar组件下边距
    .mint-navbar{
        // margin-bottom: 15px;
        padding-bottom:15px;
    }
    // tabbar 字体
    .mint-tab-item-label{
        font-size: 26px !important;
        color: #44c660;
    }
    // 修改返回按钮
    .mint-button--normal{
        margin-left: 20px;
        top: 10px;
        width: 60px;
        height: 60px;
        background-color: transparent;
    }
    .mint-button-icon{
        transform: scale(2);
    }
    .mint-button--default{
        box-shadow: none;
    }
    //tabbar底部线条颜色
    .mint-navbar .mint-tab-item.is-selected{
            border-bottom: 3px solid #44c660;
            margin-bottom: -1px !important;
    }
    // 这是修改组件返回按钮点击后得样式
    .mint-button::after{
        background-color: transparent;
    }
</style>
<style lang="scss" >
    .container{
        background-color:#f5f5f5;
        overflow: hidden;
    }
    .header{
        height: 100px;
        // margin-bottom:10px;
        padding-bottom:10px;
        background-color:#ffffff;
    }
    .title{
        position: absolute;
        left:42%;
        font-size:36px;
        line-height:100px;

    }
    .testBtn{
        display:inline-block;
        position: absolute;
        right: 30px;
        top:3px;
    }
    .mint-button--primary{
        background-color:#44c660 !important;
        width:140px;
        height: 50px;
        font-size:24px;
        
    }
    .mint-button-text{
        color:#fff !important;
    }
    .content{
        width: 100%;
    }
    // 折线图样式
    .linechart{
        // width:654px;
        // height: 348px;
        width:100%;
        // height: 400px;
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
<style lang="scss">
    .circle{
        width:50%;
        min-height: 360px;
        box-sizing:border-box;
        padding:30px;
        // padding-left:130px;
        // position: relative;
        display:flex;
        justify-content: center;
        align-items:center;

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

    .circle_info .info:first-child{
        font-size:26px;
        width:100%;
        text-align:center;
        
    }

    .detail{
        position: relative;
        

    }
    .history_info_detail{
        font-size:24px;
        padding-left:40px;
        
    }
    .history_info_detail>span{
        font-size:24px;
    }
    
    .van-circle__text{
        position: relative;
        font-size: 26px;
        color: #44c660;
        
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
</style>
<style lang="scss">
    // 手环数据
    .handle_info{
        background-color:#fff;
        margin-bottom:20px;
        .handle_info_stepNum{
            display:flex;
            
            
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


