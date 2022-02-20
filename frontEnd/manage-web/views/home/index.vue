<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
             <el-card shadow="hover" style="height: 280px">
                 <div class="user">
                     <img class="userImg" :src="userImg"/>
                     <div class="userInfo">
                         <p class="name">Admin</p>
                         <p class="access">Super User</p>
                     </div>
                     <!-- <div style="width: 80%; border-top: dashed #ACC0D8 2px;"></div> -->
                     <div class="login-info">
                         <p>上次登录时间: <span>2021-7-19</span></p>
                         <p>上次登录地点: <span>广州</span></p>
                     </div>
                 </div>
             </el-card>
             <el-card style="margin-top: 20px; height: 385px" shadow="hover">
                 <el-table :data="tableData">
                     <el-table-column
                     v-for="(val, key) in tableLabel"
                     :key="key"
                     :prop="key"
                     :label="val"
                     >
                     </el-table-column>
                 </el-table>
             </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px">
            <div class="num">
                <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color }"></i>
                    <div class="detail">
                        <p class="number">￥{{item.value}}</p>
                        <p class="txt">{{item.name}}</p> 
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover" style="height: 280px; margin-top: 5px;">
                <!-- <div style="height: 280px; margin-top: 20px" ref="echarts"> </div> -->
                <e-chart :chartData="echartData.order" style="height: 280px;"></e-chart>
            </el-card>
            <div class="graph">
                <el-card shadow="hover" class="left" style="height: 250px; width: 390px; margin-top: 5px; float: left;">
                    <!-- <div style="height: 240px;" ref="userEcharts"></div> -->
                    <e-chart :chartData="echartData.user" style="height: 240px;"></e-chart>
                </el-card>
                <el-card shadow="hover" class="right" style="height: 250px; width: 390px; margin-top: 5px; float: right;">
                    <!-- <div style="height: 240px" ref="videoEcharts"></div> -->
                    <e-chart :chartData="echartData.video" :isAxisChart="false" style="height: 240px;"></e-chart>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>

import { getData } from '../../api/data.js'
import EChart from '../../src/components/ECharts.vue'

export default {
    name: 'HomePage',
    components: {
        EChart
    },
    data() {
        return {
            userImg: require('../../src/assets/img.png'),
            tableData: [],
            tableLabel: {
                name: 'Phone',
                todayBuy: 'Today\'s',
                monthBuy: 'Month\'s',
                totalBuy: 'Total'
            },
            countData: [
                {
                    name: '今日支付',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日收藏',
                    value: 1234,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: '今日预购',
                    value: 210,
                    icon: "s-goods",
                    color: "#5ab1ef"
                },
                {
                    name: '昨日支付',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '昨日收藏',
                    value: 1234,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: '还有一个',
                    value: 210,
                    icon: "s-goods",
                    color: "#5ab1ef"
                }
            ],
            echartData: {
                order: {
                    xData: [],
                    series: []
                },
                user: {
                    xData: [],
                    series: []
                },
                video: {
                    series: []
                }
            }
        }
    },
    mounted() {
        getData().then(res => {
            const { code, data } = res.data
            if(code === 20000 ){
                this.tableData = data.tableData
                const order = data.orderData
                const xData = order.date
                const keyArray = Object.keys(order.data[0])
                const series = []
                keyArray.forEach(key => {
                    series.push({
                        name: key,
                        data: order.data.map(item => item[key]),
                        type: 'line'
                    })
                })

                // const option = {
                //     xAxis: {
                //         data: xData
                //     },
                //     yAxis: {

                //     },
                //     legend: {
                //         data: keyArray
                //     },
                //     series
                // }

                this.echartData.order.xData = xData
                this.echartData.order.series = series
                // const E = echarts.init(this.$refs.echarts)
                // E.setOption(option)

                // const userOption = {
                //     legend: {
                //         textStyle: {
                //             color: "#333",
                //         }
                //     },
                //     grid: {
                //         left: "20%"
                //     },
                //     tooltip: {
                //         trigger: "axis"
                //     },
                //     xAxis: {
                //         type: "category",
                //         data: data.userData.map(item => item.date),
                //         axisLine: {
                //             lineStyle: {
                //                 color: "#17b3a3"
                //             }
                //         },
                //         axisLabel: {
                //             interval: 0,
                //             color: "#333"
                //         }
                //     },
                //     yAxis: [
                //         {
                //             type: "value",
                //             axisLine: {
                //                 lineStyle: {
                //                     color: "#17b3a3"
                //                 }
                //             }
                //         }
                //     ],
                //     color: ["#2ec7c9", "#b6a2de"],
                //     series: [
                //         {
                //             name: '新增用户',
                //             data: data.userData.map(item => item.new),
                //             type: 'bar'
                //         },
                //         {
                //             name: '活跃用户',
                //             data: data.userData.map(item => item.active),
                //             type: 'bar'
                //         }
                //     ]
                // }
                this.echartData.user.xData = data.userData.map(item => item.date)
                this.echartData.user.series = [
                        {
                            name: '新增用户',
                            data: data.userData.map(item => item.new),
                            type: 'bar'
                        },
                        {
                            name: '活跃用户',
                            data: data.userData.map(item => item.active),
                            type: 'bar'
                        }
                    ]
                // const U = echarts.init(this.$refs.userEcharts)
                // U.setOption(userOption)

                // const videoOption = {
                //     tooltip: {
                //         trigger: "item"
                //     },
                //     color: [
                //         "#0f78f4",
                //         "#dd536b",
                //         "#9462e5",
                //         "#a6a6a6",
                //         "#e1bb22",
                //         "#39c362",
                //         "#3ed1cf"
                //     ],
                //     series: [
                //         {
                //             data: data.videoData,
                //             type: 'pie'
                //         }
                //     ]
                // }
                this.echartData.video.series = [
                        {
                            data: data.videoData,
                            type: 'pie'
                        }
                    ]
                // const V = echarts.init(this.$refs.videoEcharts)
                // V.setOption(videoOption)
            }
        })
    }
}
</script>

<style lang="less" scoped>

.home {
    .user {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        .userImg {
            width: 50%;
            height: 50%;
            border: 1px solid red;
            border-radius: 50%;
            margin: 5 auto auto 5;
        }
        .userInfo {
            .name {
                width: 200%;
                margin-top: 90%;
                margin-left: 1vh;
                font-size: 250%;
                font-weight: bold;
                color: chocolate;
                // font-style: italic;
                line-height: 1%;
            }
            .access {
                width: 200%;
                font-size: 100%;
                font-style: italic;
                line-height: 1%;
                // text-align: right;
            }
        }
        .loginInfo {
        }
    }
    .num {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        .icon {
            width: 70px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-content: center;
            line-height: 70px;
        }
        .detail {
            width: 180px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            .number {
                height: 0;
                font-size: 180%;
                font-style: italic;
            }
            .txt {
                font-size: 90%;
                text-align: left;
            }
        }
    }
}



</style>