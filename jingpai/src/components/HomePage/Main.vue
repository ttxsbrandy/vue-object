<template>
    <div>
        <div id="swipe" class="clearfix">
            <!-- 轮播图 -->
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>

        </div>
        <!-- 主要内容 -->
        <main>
            <div class="content">
                <div v-for="(t,index) in typeList" class="imgs" :key="index">
                    <div><img :src="t.timg" alt="" @click="toList(t.tid)"></div>
                    <div><img :src="t.bigimg" alt="">
                    </div>
                    <div>
                        <img v-for="(s,i) in t.smallimg" :src="s.goodimg" alt="" :key="i" @click="toDet(s.goodid)">
                    </div>

                </div>

                <div id="main-bottom">
                    <img src="http://www.jingpai.com/public/images/40/fc/ca/f87bb02f30d116896d572c44687eaa8db8e3bcb3.jpg?1491362344#w"
                        alt="">
                </div>
            </div>
        </main>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                images: [
                    'http://www.jingpai.com/public/images/e1/6b/73/01dc8f567a60e73a90403b8b8c2ab571a0ebe9cd.jpg?1563248058',
                    'http://www.jingpai.com/public/images/5f/61/26/14b90929a6622fae94858ed14cdd92ad63196d89.jpg?1562142593',
                    'http://www.jingpai.com/public/images/a8/dd/3d/cf6345c8018d5308124c5f9b546eaca1e7fccc27.jpg?1563416152',
                    'http://www.jingpai.com/public/images/16/34/f2/8fb94730a09572ded5ad03164ae96375cd33a862.jpg?1560394566',
                    'http://www.jingpai.com/public/images/9f/6a/ff/13a7975ba64b330ce523bb0801f700bee341a944.jpg?1548658849'
                ],
                typeList: []
            }
        },
        methods: {
            // 带参跳转列表页
            toList(t) {
                this.$router.push({
                    name: 'liebiao',
                    params:{
                        tid: t 
                    }                 
                })
            },
            // 带参跳转详情页
            toDet(s) {
                this.$router.push({
                    name: 'det',
                    params:{
                         goodid: s
                    }
                   
                })
            }
        },
        async created() {
            let typeList = await this.$axios("http://localhost:3300/typeList/find");
            this.typeList = typeList.data;
        }
    }
</script>
<style lang="scss" scoped>
    .content {
        width: 1200px;
        margin: auto;
    }

    #swipe {
        width: 100%;
        height: 450px;
    }

    #swipe img {
        width: 100%;
        height: 450px;
        object-fit: cover;
    }

    main {
        width: 100%;

    }

    #main-bottom {
        width: 100%;
        height: 160px;
    }

    #main-bottom img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .img div {
        width: 100%;
    }

    .img div img {
        object-fit: contain;
    }
</style>