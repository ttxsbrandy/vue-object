<template>
    <div>
        <div id="aside">
            <div id="aside-top">
                <img src="http://www.jingpai.com/themes/shopex_D/images/images/service_imgc.png" alt="">
            </div>
            <div id="aside-center">
                <img src="http://www.jingpai.com/themes/shopex_D/images/images/service_imgb.png" alt="">
            </div>
            <div id="aside-bottom" @click="backTop">
                <img src="http://www.jingpai.com/themes/shopex_D/images/images/return_top.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            backTop() {
                    document.documentElement.scrollTop = 0
            }
        }
    }
</script>
<style scoped>
    #aside {
        top: 330px;
        right: 0;
        z-index: 500;
        position: fixed;
        width: 48px;
    }

    #aside div {
        cursor: pointer;
    }

    #aside-top {
        background: #525252;
        width: 48px;
        height: 48px;
        border-radius: 24px 24px 0 0;
        margin-bottom: 1px
    }

    #aside-center {
        background: #525252;
        width: 48px;
        height: 48px;
        border-radius: 0 0 24px 24px;
        margin-bottom: 20px;
    }

    #aside-bottom {
        background: #525252;
        width: 48px;
        height: 48px;
        border-radius: 50px;
    }
</style>