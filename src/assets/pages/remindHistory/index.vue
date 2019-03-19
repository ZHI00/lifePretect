<template>
    <div class="remindHistory">
        <section class="globalRemind">
            <div class="Remind_title">
                <h3>全局提醒</h3>
                <div class="iconBox">
                    <span class="iconfont icon-icon"></span>
                </div>
            </div>
            <div class="Remind_content">
                <!-- 第一项 -->
                <div class="Remind_content_item">
                    <!-- 第一行 -->
                    <div class="row_probably">
                        <span>全局</span>
                        <span class="disease_type">限糖尿病</span>
                        <span>2019-03-03 12:12</span>
                    </div>
                    <!-- 第二行 -->
                    <div class="row_detail">
                        <!-- <span>周一,三,五</span> -->
                        <!-- 逗号可以通过判断是否最后一个来决定是否显示 -->
                        <!-- 注意这里的逗号用英文的 -->
                        <!-- 可以这样来设置，全、一、二、三之类的数字可以通过映射决定是否显示 -->
                        <span class="row_detail_time">
                            <span>周一,三</span>
                            
                            
                        </span>
                        <span class="row_detail_content">xxx亲切提醒，您的xxxxxxxxxxxxxxx</span>
                    </div>
                    <!-- 第三行 -->
                    <div class="row_edit" v-if="false">
                        <span>编辑</span>
                        <span>删除</span>
                    </div>
                </div>

                <!-- 第二项 -->
                <div class="Remind_content_item">
                    <!-- 第一行 -->
                    <div class="row_probably">
                        <span>全局</span>
                        <span class="disease_type">不限病种</span>
                        <span>2019-03-03 12:12</span>
                    </div>
                    <!-- 第二行 -->
                    <div class="row_detail">
                        <!-- <span>周一,三,五</span> -->
                        <!-- 逗号可以通过判断是否最后一个来决定是否显示 -->
                        <!-- 注意这里的逗号用英文的 -->
                        <!-- 可以这样来设置，全、一、二、三之类的数字可以通过映射决定是否显示 -->
                        <span class="row_detail_time">
                            <span>全周</span>
                        </span>
                        <span class="row_detail_content">xxx亲切提醒，您的xxxxxxxxxxxxxxx</span>
                    </div>
                    <!-- 第三行 -->
                    <div class="row_edit" v-if="false">
                        <span>编辑</span>
                        <span>删除</span>
                    </div>
                </div>

                <!-- 第三项 -->
                <div class="Remind_content_item">
                    <!-- 第一行 -->
                    <div class="row_probably">
                        <span>心血管科(陈医生)</span>
                        <span class="disease_type">不限病种</span>
                        <span>2019-03-03 12:12</span>
                    </div>
                    <!-- 第二行 -->
                    <div class="row_detail">
                        <!-- <span>周一,三,五</span> -->
                        <!-- 逗号可以通过判断是否最后一个来决定是否显示 -->
                        <!-- 注意这里的逗号用英文的 -->
                        <!-- 可以这样来设置，全、一、二、三之类的数字可以通过映射决定是否显示 -->
                        <span class="row_detail_time">
                            <span>全周</span>
                        </span>
                        <span class="row_detail_content">xxx亲切提醒，您的xxxxxxxxxxxxxxx</span>
                    </div>
                    <!-- 第三行 -->
                    <div class="row_edit">
                        <span>编辑</span>
                        <span>删除</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="personalRemind">
            <div class="Remind_title">
                <h3>个人提醒</h3>
            </div>
            <div class="Remind_content">
                <!-- 第一项 -->
                <div class="Remind_content_item">
                    <!-- 第一行 -->
                    <div class="row_probably">
                        <span>张三</span>
                        <span>2019-03-03 12:12</span>
                    </div>
                    <!-- 第二行 -->
                    <div class="row_detail">
                        <!-- <span>周一,三,五</span> -->
                        <!-- 逗号可以通过判断是否最后一个来决定是否显示 -->
                        <!-- 注意这里的逗号用英文的 -->
                        <!-- 可以这样来设置，全、一、二、三之类的数字可以通过映射决定是否显示 -->
                        <span class="row_detail_time">
                            <span>全周</span>
                        </span>
                        <span class="row_detail_content">xxx亲切提醒，您的xxxxxxxxxxxxxxx</span>
                    </div>
                    <!-- 第三行 -->
                    <div class="row_edit">
                        <span>编辑</span>
                        <span>删除</span>
                    </div>
                </div>

                <!-- 第二项 -->
                <div class="Remind_content_item">
                    <!-- 第一行 -->
                    <div class="row_probably">
                        <span>莉莉</span>
                        <span>2019-03-03 12:12</span>
                    </div>
                    <!-- 第二行 -->
                    <div class="row_detail">
                        <!-- <span>周一,三,五</span> -->
                        <!-- 逗号可以通过判断是否最后一个来决定是否显示 -->
                        <!-- 注意这里的逗号用英文的 -->
                        <!-- 可以这样来设置，全、一、二、三之类的数字可以通过映射决定是否显示 -->
                        <span class="row_detail_time">
                            <span>周二,四,六</span>
                        </span>
                        <span class="row_detail_content">xxx亲切提醒，您的xxxxxxxxxxxxxxx</span>
                    </div>
                    <!-- 第三行 -->
                    <div class="row_edit">
                        <span>编辑</span>
                        <span>删除</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
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

    },
};
</script>

<style lang="scss" scoped>
.iconfont{
    font-size: 28px;
    color: #fff;
    line-height: 35px;
}

.remindHistory{
    margin: 30px;
    .Remind_title{
        // height: 60px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        h3{
            font-size: 30px;
            // line-height: 60px;
        }
        .iconBox{
            height: 35px;
            width: 55px;
            background-color: rgb(104, 104, 114);
            text-align: center;
            border-radius: 10px;
        }
    }
    .Remind_content{
        font-size: 26px;
        padding-left: 20px;
        .Remind_content_item{
            margin-bottom: 30px;
            // 第一行
            .row_probably{
                display: flex;
                justify-content: space-between;
                position: relative;
                .disease_type{
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            // 第二行
            .row_detail{
                display: flex;
                justify-content: space-between;
                .row_detail_content{
                    width: 340px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
            // 第三行
            .row_edit{
                display: flex;
                justify-content: flex-end;
                text-decoration: underline;
                &>span:last-child{
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>
<style lang="scss">

</style>
