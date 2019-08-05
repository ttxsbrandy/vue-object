<template>
    <div>
        <Header></Header>
        
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../components/HomePage/Header.vue'
    import Footer from '../components/HomePage/Footer.vue'
    export default {
        data() {
            return {
                listShow:false
            }
        },
        components: {
            Header,
            Footer
        }
    }
</script>