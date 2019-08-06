<template>
    <div>
        <div class="content">
            <div id="product" class="clearfix">
                <div id="magnifier" class="fl">
                    <div id="m-img">
                        <Magnifier :url="gooddata[0].img" :scale="2"></Magnifier>
                    </div>
                </div>
                <div id="details" class="fl">
                    <div id="detail-top">
                        <p v-text="gooddata[0].title"></p>
                        <p v-text="shihui"></p>
                    </div>
                    <div id="detail-center">
                        <p>
                            <span class="shangcheng">商 城 价：</span>
                            <span class="price">￥<span v-text="gooddata[0].dprice"></span></span>
                            <span class="huiprice" v-text="`会员价：最低 ￥${gooddata[0].price}起`"></span>
                            <span class="more">更多会员价</span>
                        </p>
                    </div>
                    <div id="detail-bottom">
                        <p>服 务 : 由 劲牌商城 负责发货，并提供售后服务。</p>
                        <div id="buynum">
                            <span class="fl">购买数量：</span>
                            <div class="fl">
                                <button id="minus" @click="minus">-</button>
                                <input type="text" value="" id="num" v-model="num" @blur="inputNum">
                                <button id="plus" @click="plus">+</button>
                            </div>
                        </div>
                        <div id="rightNow">立即购买</div>
                        <div id="add">
                            <img src="http://www.jingpai.com/themes/shopex_D/images/images/shopping.png" alt="">
                            <span id="addToCart" >加入购物车</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Magnifier from './Magnifier.vue'
    export default {
        data() {
            return {
                shihui: "实惠箱装，内含3个礼袋。下单即送750mL玫瑰和露酒2瓶~",
                num: 1,
                kucun: 10,
                gooddata:null
            }
        },
        components: {
            Magnifier
        },
        methods: {
            plus() {
                this.num++;
                if (this.num > this.kucun) {
                    alert('超出库存');
                    this.num = this.kucun
                }
                // console.log(this.this.$store.getters.getgooddata);
            },
            minus() {
                this.num--;
                if (this.num <= 0) {
                    alert('至少一件');
                    this.num = 1
                }
            },
            inputNum() {
                if (this.num > this.kucun || this.num < 1 || isNaN(this.num)) {
                    this.num = 1;
                }
            }
        },
         created(){
            this.gooddata = this.$store.getters.getgooddata
        //    this.kucun = parseInt(this.gooddata[0].kuncun);
        console.log(this.gooddata[0].img);
        console.log(this.$store.getters.getgooddata);
        }

    }
</script>
<style scoped>
    .content {
        width: 1200px;
        margin: auto;
    }

    #magnifier {
        width: 550px;

    }

    #product {
        margin-top: 20px;
        height: 480px;
    }

    #m-img {
        width: 550px;
        height: 450px;
        text-align: center;
        border: 1px solid #ccc;
        position: relative;
    }

    #m-img img {
        height: 80%;
        object-fit: contain;
    }

    #m-img #mark {
        width: 299px;
        height: 224px;
        background-color: #b3d5ff;
        opacity: .5;
        cursor: move;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
    }

    #details {
        width: 650px;

    }

    #detail-top {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }

    #detail-top p:nth-child(1) {
        font-size: 24px;
        color: #666666;
        text-indent: 60px;
        margin-top: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: bold;
    }

    #detail-top p:nth-child(2) {
        font-size: 16px;
        color: #ff0000;
        width: 83%;
        word-break: break-all;
        table-layout: fixed;
        margin-left: 60px;
        font-weight: bold;
        line-height: 20px;
    }


    #detail-center {
        width: 630px;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding: 10px;
        height: 80px;

    }

    #detail-center p {
        width: 630px;
        height: auto;
        padding: 20px 0;
        background: #f5f4f3;
        line-height: 40px;
    }

    #detail-center .shangcheng {
        width: 80px;
        height: 40px;
        float: left;
        font-size: 14px;
        vertical-align: bottom;
        text-align: justify;
        line-height: 40px;
        color: #666666;
        margin-left: 50px;
        font-weight: bold;
    }

    #detail-center .price {
        height: 40px;
        float: left;
        font-size: 24px;
        vertical-align: bottom;
        line-height: 40px;
        color: #db0306;
    }

    #detail-center .huiprice {
        margin-left: 30px;
        color: red;
        font-size: 12px;
    }

    #detail-center .more {
        font-size: 75%;
        line-height: 1.5;
        color: #0563c3;
        font-size: 12px;
        margin-left: 3px;
    }

    #detail-bottom p {
        margin-top: 30px;
        height: 40px;
        font-size: 14px;
        vertical-align: bottom;
        text-align: justify;
        line-height: 40px;
        color: #666666;
        margin-left: 60px;
        font-weight: bold;
    }

    #detail-bottom #buynum {

        height: 40px;
        font-size: 14px;
        vertical-align: bottom;
        text-align: justify;
        line-height: 40px;
        color: #666666;
        margin-left: 60px;
        font-weight: bold;
    }

    #detail-bottom #minus {
        display: inline-block;
        width: 20px;
        height: 21px;
        overflow: hidden;
        vertical-align: middle;
        border: 1px solid #a9a9a9;
        text-align: center;
        font: 14px/22px simsun, serif;
    }

    #detail-bottom button:hover {
        background: #8b8b8b;
        color: #fff;
    }


    #detail-bottom #num {
        display: inline-block;
        vertical-align: middle;
        border-width: 1px 0;
        border-style: solid;
        border-color: #a9a9a9;
        text-align: center;
        width: 30px;
        height: 19px;
        font-size: 12px;
    }

    #detail-bottom #plus {
        display: inline-block;
        width: 20px;
        height: 21px;
        overflow: hidden;
        vertical-align: middle;
        border: 1px solid #a9a9a9;
        text-align: center;
        font: 14px/22px simsun, serif;
    }

    #rightNow {
        border: 1px solid #b00f17;
        width: 150px;
        height: 40px;
        line-height: 40px;
        background: #fce8e9;
        color: #c40000;
        float: left;
        border-radius: 3px;
        font-size: 14px;
        text-align: center;
        margin-left: 140px;
        margin-top: 40px;
    }

    #add {
        border: 1px solid #b00f17;
        width: 150px;
        height: 40px;
        line-height: 40px;
        margin-left: 10px;
        background: #db0306;
        color: #fff;
        float: left;
        border-radius: 3px;
        text-align: center;
        margin-top: 40px;
        font-size: 14px;

    }

    #add img {
        width: 20px;
        height: 20px;
        margin-right: 3px;
    }
</style>