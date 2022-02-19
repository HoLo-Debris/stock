import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for(let i = 0; i < 7; i++){
            List.push(
                Mock.mock({
                    Apple: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    Meizu: Mock.Random.float(100, 8000, 0, 0),
                    Samsung: Mock.Random.float(100, 8000, 0, 0),
                    Huawei: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: 'Huawei',
                        value: 4999
                    },
                    {
                        name: 'Apple',
                        value: 6799
                    },{
                        name: 'vivo',
                        value: 2999
                    },{
                        name: 'oppo',
                        value: 1999
                    },{
                        name: 'Meizu',
                        value: 2200
                    },{
                        name: 'Samsung',
                        value: 3499
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 65,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 770
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 170
                    }
                ],
                // 折线图
                orderData: {
                    date: ['20191001', '20191002','20191003','20191004','20191005','20191006','20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 24000
                    },
                    {
                        name: 'Apple',
                        todayBuy: 800,
                        monthBuy: 4500,
                        totalBuy: 65000
                    },
                    {
                        name: 'xiaomi',
                        todayBuy: 1200,
                        monthBuy: 6500,
                        totalBuy: 45000
                    },
                    {
                        name: 'Samsung',
                        todayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 34000
                    },{
                        name: 'Meizu',
                        todayBuy: 350,
                        monthBuy: 3000,
                        totalBuy: 22000
                    }
                ],
            }
        }
    }
}