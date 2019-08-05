<template>
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <Aside></Aside>
    </div>
</template>
<script>
    import Header from "../components/HomePage/Header.vue";
    import Main from "../components/HomePage/Main.vue";
    import Footer from "../components/HomePage/Footer.vue";
    import Aside from "../components/HomePage/Aside.vue";
    export default {
        components: {
            Header,
            Main,
            Footer,
            Aside
        }
    }
</script>