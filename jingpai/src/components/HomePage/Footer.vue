<template>
    <div>
        <div class="content">
            <div id="footer-top">
                <div v-for="foot in footlist">
                    <img :src="foot.imgs" alt="" class="fl">
                    <dl class="fl">
                        <dt v-text="foot.dts"></dt>
                        <dd v-for="dds in foot.dds" v-text="dds"></dd>
                    </dl>
                </div>
            </div>
            <ul id="lianjie" class="clearfix">
                <li>友情链接:</li>
                <li>劲牌招聘网</li>
                <li>天龙泉酒业有限公司</li>
                <li>枫林健康酒业有限公司</li>
                <li>神农架生态有限公司</li>
                <li>保健酒联盟网</li>
            </ul>

        </div>
        <div id="footer-center">
            <div class="content" >
                <p style="padding-top: 30px;">热销产品：<span>劲酒</span>
                    <span>毛铺酒</span>
                    <span>追风酒</span>
                    <span>长寿酒</span>
                    <span>韵酒</span>
                    <span>和露酒</span>
                    <span>散装酒</span>
                    <span>皇宫人参酒</span>
                    <span>白酒</span>
                </p>
                <p> 客服电话:400-677-1988</p>
                <p>邮编:435100</p>
                <p>区号:0714</p>
                <p>地址：湖北省大冶市大冶大道169号</p>
                <p id="factory">Copyright©2016 劲牌有限公司
                <img src="http://res1.jingpai.com/themes/tubiao.png" alt="">
                </p>
            </div>
        </div>
        <div id="footer-bottom">
            <div class="content">
                <img class="fl" src="http://icon.szfw.org/cert.png" alt="">
                <img class="fl" src="http://www.jingpai.com/public/images/58/43/db/b1db7e8c46e3c87a67f88275ad32b241e4027d62.png?1465896305" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import footlist from '../../assets/footerlist.json'
    export default {
        data() {
            return {
                footlist
            }
        }
    }
</script>

<style scoped>
    .content {
        width: 1200px;
        margin: auto;
    }

    #footer-top {
        display: flex;
        width: 100%;
        height: 180px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: space-between;
    }

    #footer-top div {
        width: 150px;
        height: 160px;
        margin-top: 20px;


    }

    #footer-top div dl dt {
        font-size: 16px;
        line-height: 30px;
        margin-left: 5px;
        color: #333333;
        font-weight: bold;
    }

    #footer-top div dl dd {
        width: 100px;
        height: 30px;
        color: #666666;
        font-size: 14px;
        margin-left: 5px;
    }

    #footer-top div dl dd:hover {
        text-decoration: underline;
        text-decoration-color: #0563c3;
    }

    #footer-center {
        width: 100%;
        height: 160px;
        background: #eeeeee;
    }
    #footer-center p{
        line-height: 18px;
        font-size: 13px;
    }
    #footer-center p span{
        color: #0563c3;
        margin-right: 5px;
    }
    #lianjie{
        margin: 20px 0px;

    }
    #lianjie li{
        float: left;
        font-size: 14px;
        color: #666;
        margin-right: 15px;
    }
    #lianjie li:nth-child(1){
        color: #000;
        font-weight: bold;
    }
    #factory{
        color: rgb(160, 160, 158);
        margin-top: 10px;
        font-size: 14px;
    }
</style>