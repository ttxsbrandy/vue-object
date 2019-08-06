<template>
    <div>
        <div class="product-attributes">
            <ul class="clearfix">
                <li>品牌：<a href="/brand-9.html">劲牌</a></li>
                <li>所属分类：实惠箱装</li>
                <li>产地：中国大陆</li>
                <li>总净含量（ml）：3000ml</li>
                <li>储藏方法：密封，阴凉干燥处保存</li>
                <li>产品标准号：Q/JJ0017S</li>
                <li>配料表：优质白酒、水、黄芪、人参、山药、枸杞、肉桂、熟地等</li>
                <li>商品添加剂：无</li>
                <li>生产厂商：劲牌有限公司</li>
                <li>进口/国产：国产</li>
                <li>食品保质期：三年</li>
                <li>净含量：500-999ml</li>
                <li>包装：整箱装</li>
                <li>用途：朋友聚会</li>
                <li>酒精度：38%VOL</li>
                <li>保健批文：抗疲劳</li>
                <li>不适宜人群：少年儿童、酒精过敏者、心脑血管疾病患者等</li>
                <li>饮用限量：每日两次，每次50ml</li>
                <li>注意事项：本品不能代替药物；本品不宜过量饮用</li>
            </ul>
        </div>
        <div class="detail-content">
            <img :src="i" v-for="i in imglist" alt="">
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imglist: [
                    "http://www.jingpai.com/public/images/eb/c5/01/08a8e92434414a6548293d35e1bcfb180e044bcc.jpg?1533628177#h",
                    "http://www.jingpai.com/public/images/ce/69/73/14e171c16685027077f220a20d742bbfbcb5e9d3.jpg?1533628185#h",
                    "http://www.jingpai.com/public/images/9a/1b/e5/ca7188850dc2f709532d84725431dd800f0be5ae.jpg?1533628194#w",
                    "http://www.jingpai.com/public/images/af/0d/53/a188c44d889be0330d0a591ef5770f44154bcc60.jpg?1554867676#h",
                    "http://www.jingpai.com/public/images/59/25/be/eb3cedaf0e736ca0ab493fb225cf9f86728ed02f.jpg?1533628209#h",
                    "http://www.jingpai.com/public/images/be/1c/16/7bad58bf80ee75476da51b8e0065a8e26b3c1550.jpg?1533628218#w",
                    "http://www.jingpai.com/public/images/24/c3/df/af03bb55e3609beac937872df622f645bb1caf33.jpg?1533628225#h",
                    "http://www.jingpai.com/public/images/99/98/0b/9ff654d180680c5f344a20cac5a6e30c7510ccba.jpg?1533628233#w",
                    "http://www.jingpai.com/public/images/18/cb/20/a32fc8de7daae8a259d45b21951bd820d26ef1dd.jpg?1533625479#h"
                ]
            }
        }
    }
</script>
<style scoped>
    .product-attributes li {
        float: left;
        width: 33.3%;
        line-height: 26px;
        font-size: 12px;
    }

    .product-attributes ul {
        border: 1px solid white;
        padding: 10px 15px;
    }

    .product-attributes {
        background-color: #eee;
        border: 1px solid #ccc;
    }
    .detail-content img{
        width: 100%;
        
    }
</style>