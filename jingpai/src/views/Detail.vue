<template>
    <div>
        <div class="content">
            <Header></Header>
            <Buy></Buy>
            <goodDetail></goodDetail>
            <Footer></Footer>
            <Aside></Aside>
        </div>
    </div>
</template>
<script>
    import Header from '../components/HomePage/Header.vue'
    import Footer from '../components/HomePage/Footer.vue'
    import Buy from '../components/DetailPage/Buy.vue'
    import Aside from '../components/HomePage/Aside.vue'
    import goodDetail from '../components/DetailPage/goodDetail.vue'
    export default {
        data() {
            return {

            }
        },
        components: {
            Header,
            Footer,
            Buy,
            goodDetail,
            Aside

        }
    }
</script>
<style scoped>
    .content {
        width: 1200px;
        margin: auto;
    }
</style>