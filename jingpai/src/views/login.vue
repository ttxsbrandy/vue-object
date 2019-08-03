<template>
    <div>
        <header>
            <div id="logo">
                <img :src="img" alt="">
            </div>
        </header>
        <div class="container">
            <form action="" id="login">
                <div class="login-header">
                    <h2>账号登录</h2>
                </div>
                <div class="xxx">
                    <div class="alert" v-text="text" :style="show?{color:'#195'}: {color:'#a94442'}" v-show="showok">
                        认证信息无效
                    </div>
                </div>
                <div class="row">
                    <input type="text" v-model="tel" placeholder="手机号" @blur="gettel">
                    <input type="password" v-model="pwd" placeholder="密码">
                </div>
                <div class="reg">
                    <a href="###" @click="btnreg">立即注册</a>
                    <span> | </span>
                    <a href="###">忘记密码</a>
                </div>
                <div class="btn" @click="btn">
                    登录
                </div>

                <div>


                    <van-divider
                        :style="{ color: '#cccccc', borderColor: '#cccccc', padding: '30px 16px 0 16px', fontSize: '16px' }">
                        其他方式登录
                    </van-divider>
                </div>
                <div class="img">
                    <img :src="img_27" alt="">
                    <img :src="img_29" alt="">
                    <img :src="img_31" alt="">
                </div>
            </form>
        </div>
        <footer>
            <p>Copyright © 劲牌有限公司</p>
        </footer>
    </div>
</template>



<script>
    import img from '../assets/_logo.png'
    import img_27 from '../assets/_27.png'
    import img_29 from '../assets/_29.png'
    import img_31 from '../assets/_31.png'

    export default {
        data() {
            return {
                img,
                tel: '',
                pwd: '',
                img_27,
                img_29,
                img_31,
                text: '',
                show: false,
                telok: false,
                showok:false


            }
        },
        methods: {
            async gettel() {
              
                if (this.tel) {
                    var str = await this.$axios(`http://localhost:3300/login/tel`, {
                        params: {
                            tel: this.tel
                        }
                    })
                    console.log(str);
                    if (str.data == "yes") {
                        this.text = '手机号验证成功'
                        this.show = true
                        this.telok = true
                    } else {
                        this.text = '手机号验证失败'
                    }
                } else {
                    this.text = '手机号不能为空'
                }
                  this.showok=true
            },
            btn() {
                if (this.pwd) {
                    if (this.telok) {
                        var xhr = new XMLHttpRequest()
                        xhr.open('get', `http://localhost:3300/login/pwd?tel=${this.tel}&pwd=${this.pwd}`)
                        xhr.send()
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    console.log(xhr.responseText);
                                    if(xhr.responseText=="yes"){
                                        this.text = ''
                                        this.showok =false
                                       this.$router.push({name:'reg'})
                                    }else{
                                         this.show = !this.telok
                                        this.text = ' 认证信息错误'
                                       
                                    }
                                    

                                } else {
                                    alert('错误http状态码是：' + xhr.status);
                                }
                            }
                        }
                    }
                } else {
                    this.text = '密码不能为空'
                }

            },
            btnreg(){
                this.$router.push({name:"reg"})
            }
        }

    }
</script>



<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    /* 头部 */
    header {
        width: 100%;
    }

    header #logo {
        width: 1100px;
        margin: auto;
        height: 120px;

    }

    header #logo img {
        margin-top: 32px;
    }

    /* main */
    .container {
        background: url("https://cas.jingpai.com/cas/images/_banner.jpg") no-repeat -250px 0;
        height: 611px;
        width: 100%;
        position: relative;
    }

    .container #login {
        position: absolute;
        width: 400px;
        height: 530px;
        background: #fff;
        top: 60px;
        right: 100px;
    }

    .container #login .login-header {
        width: 100%;
        text-align: center;
        color: red;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .container #login .login-header h2 {
        font-weight: 500;
        color: #db0306;
    }

    #login .xxx {
        width: 100%;
        height: 67px;
    }

    #login .alert {
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 52px;
        background-color: #f2dede;
        border-color: #ebccd1;
        color: #a94442;
        box-sizing: border-box;
        text-align: center;
    }

    #login .row {
        width: 100%;
        height: 132px;


    }

    #login .row input {
        width: 358px;
        height: 50px;
        margin-bottom: 16px;
        box-sizing: border-box;
        padding-left: 10px;
        margin-left: 21px;

        font-size: 18px;

        border: 1px solid #cccccc;
        color: #cccccc;


    }

    #login .reg {
        height: 34px;
        width: 100%;
        box-sizing: border-box;
        padding: 11px 21px 0 21px;
        text-align: right;
        color: #007ffd;
        font-size: 16px;
    }

    #login .reg a {
        color: #007ffd;
        font-size: 16px;

    }

    #login .reg a:hover {
        text-decoration: underline;
    }

    #login .btn {
        width: 358px;
        height: 50px;
        cursor: pointer;
        background-color: #db0405;
        color: #fff;
        margin: 10px 21px 0 21px;
        font-size: 18px;
        line-height: 50px;
        text-align: center;

    }

    #login .img {
        text-align: center
    }

    #login .img img {
        margin-right: 20px;
        cursor: pointer;
    }

    /* 底部 */
    footer {
        width: 100%;
        height: 90px;
    }

    footer p {
        text-align: center;
        color: #969696;
        font-size: 18px;
        padding-top: 20px;
    }
</style>