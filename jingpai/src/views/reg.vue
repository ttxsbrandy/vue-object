<template>

    <div class="body">
        <header>
            <img alt="" src="https://cas.jingpai.com/tpcas/Public/images/headerImg.png"
                style="width:100%;padding-top: 30px;height:80px;" id="headImg-pc">

        </header>

        <div class="container">
            <div>
                <form action="" method="get" class="forget-pwd">


                    <div class="clears"></div>


                    <dl class="sel-yzsj">

                        <dt><span class="required" style="color: red;">*</span>手机号：</dt>
                        <dd>
                            <input type="text" id="telphone" placeholder="请输入您的手机号" v-model="telphone"
                                @blur="confirmTel">
                            <p v-show="phoneshow" v-text="phonetext" :style="show?{color:'#195'}: {color:'red'}">
                                手机号格式不正确</p>
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl class="sel-yzsj" id="sel-yzsj">
                        <dt><span class="required" style="color: red;">*</span>验证码：</dt>
                        <dd>
                            <input type="text" placeholder="请输入图形验证码" id="validateCode" name="validateCode"
                                @blur="verifyNnm" v-model="validateCode">
                            <!-- <img style="cursor: pointer; vertical-align:middle;" title="刷新验证码" :src="img" id="verifyImg"
                                @click="freshVerify()"> -->
                            <span v-text="verifytext" @click="btntext" id="random"></span>
                            <p v-text="num" :style="shownum?{color:'#195'}: {color:'red'}"></p>
                        </dd>
                        <div class="clears"></div>
                    </dl>
                     <dl>
                            <dt><span class="required" style="color: red;">*</span>短信验证码：</dt>
                            <dd>
                                <input type="text" id="smsCode" placeholder="请输入短信验证码" @blur="smsCode" v-model="duannums">
                                <input id="sendsmsCode" type="button" value="获取验证码" 
                                    style="height: 30px; background: #e4e4e4; " @click="btnDuan">
                                <p v-text="textnum" :style="shownumA?{color:'#195'}: {color:'red'}"></p>
                            </dd>
                            <div class="clears"></div>
                        </dl>
                    <dl>
                        <dt><span class="required" style="color: red;">*</span>用户名：</dt>
                        <dd>
                            <input type="text" id="smsCode1" placeholder="请输入用户名" style="width:220px" v-model="name"
                                @blur="confirmName">
                            <p v-text="textname" :style="showname?{color:'#195'}: {color:'red'}"></p>
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl>
                        <dt><span class="required" style="color: red;">*</span>密码：</dt>
                        <dd>
                            <input type="password" id="password" placeholder="请输入6位以上密码" v-model="password">
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl>
                        <dt><span class="required" style="color: red;">*</span>确认密码：</dt>
                        <dd>
                            <input type="password" id="passwordCheck" placeholder="请再次确认密码" v-model="passwordChec"
                                @blur="confirmPwd">
                            <p class="passwordTip" v-text="pwd" :style="showpwd?{color:'#195'}: {color:'red'}"> 两次密码不一样
                            </p>
                        </dd>
                        <div class="clears"></div>
                    </dl>

                    <div class="subtijiao">
                        <input type="button" value="注册" @click="sub()">
                    </div>
                </form>
            </div>


            <!--  register succ,auto jump  -->


            <div style="text-align: center;color:#000;position: relative;top: 10px;width: 100%;">

                <span>客服电话：400-677-1988 0714-8761988</span><br>
                <br>
                <span>Copyright © 2018 劲牌有限公司 鄂ICP备17008819号-2</span>
            </div>
        </div>



    </div>
</template>


<script>
    export default {
        data() {
            return {
                // 手机号
                telphone: "",
                // 手机号正则
                phoneRegex: /^1\d{10}$/,


                // 图形验证
                verifytext: '8302',
                // 号码提示开关
                phoneshow: false,
                // 号码提示内容
                phonetext: '',
                // 号码字体颜色
                show: false,
                //验证码
                validateCode: '',
                //随机数
                num: '',
                // 
                shownum: false,
                // 密码
                password: '',
                //密码验证
                passwordChec: '',

                showpwd: false,
                // 密码提示
                pwd: '',
                isok: true,
                name: '',

                telok: false,
                // 用户名提示
                textname: '',
                showname: false,
                nameok: false,
                // 短信验证
                duannums:'',
                textnum:'',
                shownumA:false,
                nums:'',


            }

        },
        methods: {
            async confirmTel() {
                this.phoneshow = true
                if (this.phoneRegex.test(this.telphone)) {
                    // this.phoneshow = false;

                    let data = await this.$axios('http://10.3.132.145:3300/reg/tel', {
                        params: {
                            tel: this.telphone
                        }
                    })
                    if (data.data == 'yes') {
                        this.phonetext = '该手机号已经注册过了请您换一个号码'
                        this.show = false


                    } else {
                        this.phonetext = '手机号码验证成功'
                        this.show = true
                        this.telok = true
                    }


                } else {
                    this.phonetext = '手机号格式不正确'
                    this.show = false
                }



            },

            btntext() {
                this.verifytext = parseInt((Math.random() * 9000) + 1000)
            },
            // 用户名验证
            async confirmName() {
                if (this.name) {
                    let data = await this.$axios('http://10.3.132.145:3300/reg/name', {
                        params: {
                            name: this.name
                        }
                    })
                    console.log(data);
                    if (data.data == "yes") {
                        this.textname = '该用户名太受欢迎了请您换一个'
                        this.showname = false
                    } else {
                        this.textname = '该用户名可以注册'
                        this.showname = true
                        this.nameok   = true
                    }
                } else {
                    this.textname = '该用户名不能为空'
                    this.showname = false
                }

            },
            // 验证密码
            verifyNnm() {
                if (this.validateCode == this.verifytext) {
                    this.num = '验证码输入正确'
                    this.shownum = true
                } else {
                    this.num = '验证码输入错误'
                    this.shownum = false
                }
            },
            // 发送短信
             async btnDuan() {
                if (this.show) {
                    await this.$axios({
                        method: 'post',
                        url: 'http://10.3.132.145:3300/duan/xin',
                        data: this.$qs.stringify({
                            tel: this.tel
                        })
                    }).then(res => {
                        console.log(res.data);
                        console.log(res.data.nums);
                        if (res.data.jsonObj.reason == "操作成功") {
                            this.nums = res.data.nums
                        } else {

                        }
                    })
                }
            },
            // 短信验证
            smsCode() {
                if (this.duannums == this.nums) {
                    this.isok = true
                    this.textnum = '短信验证成功'
                    this.shownumA = true
                } else {
                    this.textnum = '您输入的验证码有误'
                    this.shownumA = false
                }
            },
            confirmPwd() {

                if (this.password === this.passwordChec) {

                    this.showpwd = true
                    this.pwd = '两次密码输入一样'
                    this.isok = true
                } else {
                    this.showpwd = false
                    this.pwd = '两次密码输入不一样'
                }
            },
            async sub() {
                if ( this.isok && this.nameok && this.telok) {

                    
                    await this.$axios({
                        method: "post",
                        url: 'http://10.3.132.145:3300/reg/add',
                        data: this.$qs.stringify({
                            tel: this.telphone,
                            pwd: this.password,
                            name: this.name
                        })
                    }).then(res=>{
                        console.log(res);
                        if (res.data == 'yes') {
                        alert('注册成功去登录')
                        this.$router.push('/login')
                    } else {
                        alert("注册失败")
                    }
                    })

                    // let data = await this.$axios('http://10.3.132.145:3300/reg/add', {
                    //     params: {
                    //         tel: this.telphone,
                    //         pwd: this.password,
                    //         name: this.name
                    //     }
                    // })
                    // console.log(data);
                    // if (data.data == 'yes') {
                    //     alert('注册成功去登录')
                    //     this.$router.push('/login')
                    // } else {
                    //     alert("注册失败")
                    // }

                } else {
                    alert('请输入完整的信息在提交')
                }



            }


        }

    }
</script>



<style scoped>
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }

    table {
        border-collapse: collapse;
    }

    .body {
        font-size: 12px;

        color: #333;
        overflow-x: hidden;
        background: #e4e4e4;

    }

    /*忘记密码  必要样式*/
    .clears {
        clear: both;
    }

    .forget-pwd {
        width: 420px;
        margin: 6% auto;
        padding: 30px 170px;
        min-height: 350px;
        background: #fff;

    }

    .forget-pwd input,
    .forget-pwd button {
        border: 0;
        margin: 0;
        padding: 0;
        background: none;
    }

    .forget-pwd dl {
        margin-bottom: 20px;
    }

    .forget-pwd dt {
        float: left;
        padding-right: 10px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        font-size: 14px;
    }

    .forget-pwd dd {
        float: left;
        width: 250px;
        height: 30px;
        position: relative;
    }

    .forget-pwd dd input {
        width: 220px;
        height: 28px;
        border: #ccc 1px solid;

    }

    .forget-pwd dd button {
        width: 120px;
        height: 30px;
        line-height: 30px;
        border: #ddd 1px solid;
        background: #f1f1f1;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        color: #666;
    }

    .forget-pwd .yanzma {
        position: absolute;
        left: 200px;
        top: 2px;
        height: 30px;
        line-height: 30px;
        width: 180px;
    }

    .subtijiao {
        padding: 0 0 0 110px;
    }

    .subtijiao input {
        width: 150px;
        border-radius: 20px;
        height: 32px;
        background: #db0306;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }

    p {
        color: #db0306;
    }

    #sendsmsCode {
        width: 100px;
    }

    #validateCode {
        width: 120px;
    }

    #smsCode {
        width: 120px;
    }

    #headImg-wap {
        display: none;
    }

    @media only screen and (max-width:320px) {
        #headImg-pc {
            display: none;
        }

        #headImg-wap {
            display: block;
        }

        .forget-pwd {
            width: 420px;
            margin: 0 auto;
            padding: 50px 0;
        }

        .forget-pwd dd {
            width: auto;
        }

        .forget-pwd dd input {
            width: 120px;
        }
    }

    @media only screen and (max-width:640px) and (min-width:321px) {
        #headImg-pc {
            display: none;
        }

        #headImg-wap {
            display: block;
        }

        .forget-pwd {
            width: 420px;
            margin: 0 auto;
            padding: 50px 0;
        }

        .forget-pwd dt {
            font-size: 12px;
            width: 100px;
            padding-right: 0px;
        }

        .forget-pwd dd {
            width: auto;
        }

        /* .forget-pwd dd input{
   width:120px;
   } */
    }

    #sel-yzsj {
        position: relative;
    }

    #random {
        position: absolute;
        display: block;
        width: 80px;
        height: 30px;
        margin-left: 20px;
        border: 1px solid #ddd;
        right: 28px;
        top: 0;
        text-align: center;
        font-size: 12px;
        line-height: 30px;
        color: #ccc
    }
</style>