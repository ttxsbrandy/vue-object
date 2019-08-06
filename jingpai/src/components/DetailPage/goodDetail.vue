<template>
    <div>
        <div id="hotlist">
            <h2>商品排行榜<span>与爱同行，乐在分享</span></h2>
            <div id="rexiao">热销榜单</div>
            <div id="list" v-for="h in hotlist">
                <div id="list-left" class="fl">
                    <img :src="h.img" alt="">
                </div>
                <div id="list-right" class="fl">
                    <p class="p1" v-text="h.title">标题</p>
                    <p class="p2">￥<span v-text="h.price"></span></p>
                    <p class="p3">已售出<span v-text="h.saleNum"></span>笔</p>
                </div>
            </div>
        </div>
        <div id="gooddetail">
            <ul id="xuanxiang">
                <li v-for="(t,index) in titlelist" v-text="t.content" :key="index"
                    @click="change(index);navTo(t.router)" :class="{active:num==index}">
                </li>
            </ul>
            <div id="card">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                hotlist: [{
                        img: 'http://www.jingpai.com/public/images/37/63/e7/76e36cb59db133410a849b86db1d8f3bf8853357.jpg?1557976758#h',
                        title: '劲牌原麦型苦荞茶6g*20',
                        price: '28.00',
                        saleNum: 6628
                    },
                    {
                        img: 'http://www.jingpai.com/public/images/23/96/60/3e0e9dd528fabe4da0cc1ca31031a79f1e393e5d.jpg?1555053841#h',
                        title: '经典口味  35度 劲牌劲酒 520mL 单瓶',
                        price: '374.00',
                        saleNum: 6547
                    },
                    {
                        img: 'http://www.jingpai.com/public/images/ef/10/1b/60f4472ade4efe439134492c5ef5a8686b8562f1.jpg?1555383414#h',
                        title: '经典口味  35度 劲牌劲酒 520mL 单瓶',
                        price: '98.00',
                        saleNum: 5623,

                    },
                    {
                        img: 'http://www.jingpai.com/public/images/23/96/60/3e0e9dd528fabe4da0cc1ca31031a79f1e393e5d.jpg?1555053841#h',
                        title: '经典口味  35度 劲牌劲酒 520mL 单瓶',
                        price: '57.50',
                        saleNum: 3960
                    },
                    {
                        img: 'http://www.jingpai.com/public/images/8e/49/9e/5562e5e9b27b2a0bad366dad26177421cc6891c6.jpg?1537233980#h',
                        title: '劲牌 500ml38度劲酒.金标 （盒装）  单瓶',
                        price: '158.00',
                        saleNum: 3768
                    }
                ],

                titlelist: [{
                        content: "商品详情",
                        router: "det"
                    },
                    {
                        content: `商品评论`,
                        router: "commend"
                    },
                    {
                        content: "商品咨询",
                        router: "consult"
                    }
                ],
                num: 0
            }
        },
        methods: {
            change(a) {
                this.num = a;
            },
            navTo(r) {
                this.$router.push({
                    name: r
                });
            }

        }
    }
</script>
<style scoped>
    #hotlist {
        width: 260px;
        float: left;
    }

    #hotlist h2 {
        color: #2f3130;
        font-size: 18px;
        height: 20px;
        line-height: 24px;
        text-indent: 10px;
        border-left: 2px solid red;
        font-weight: bold;
    }

    #hotlist h2 span {
        color: #757774;
        font-size: 14px;
        margin-left: 10px;
    }

    #hotlist #rexiao {
        width: 100%;
        height: 60px;
        font-size: 16px;
        line-height: 60px;
        text-indent: 20px;
        background: #f7f7f7;
        margin-top: 20px;
        border: 1px solid #dedede;
    }

    #hotlist #list {
        width: 100%;
        height: 100px;
        line-height: 100px;
        border: 1px solid #dedede;
    }

    #hotlist #list #list-left {
        width: 60px;
        height: 60px;
        margin: 20px;
        border: 1px solid #dedede;
    }

    #hotlist #list #list-left img {
        width: 100%;
        height: 100%;
        vertical-align: top;
    }

    #hotlist #list #list-right {
        width: 150px;
        height: 100%;
    }

    #hotlist #list #list-right .p1 {
        margin-top: 20px;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #666666;
        text-align: left;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    #hotlist #list #list-right .p2 {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        text-align: left;
        font-weight: normal;
        color: #666;
    }

    #hotlist #list #list-right .p3 {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #666666;
        text-align: left;
        font-weight: normal;
    }

    #gooddetail {
        width: 920px;
        float: left;
        margin-left: 20px;
    }

    #gooddetail #xuanxiang {
        margin-top: 30px;
        border-bottom: 1px solid #ccc;
        width: 100%;
        height: 30px;
    }

    #gooddetail #xuanxiang li {
        font-size: 14px;
        font-weight: 400;
        float: left;
        border: 1px solid #ccc;
        background-color: #efefef;
        margin-right: 5px;
        text-align: center;
        line-height: 30px;
        width: 90px;
    }

    #gooddetail #xuanxiang .active {
        border-top: 2px solid red;
        border-bottom: none;
        background: white;
        font-weight: bold;
    }
    #card{
        margin-top: 20px;
    }
</style>