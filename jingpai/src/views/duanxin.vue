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


                    <dl class="sel-yzsj" id="posbtn">

                        <dt><span class="required" style="color: red;"></span>手机号：</dt>
                        <dd>
                            <input type="text" id="telphone" placeholder="请输入您的手机号" style="width: 167px;" v-model="tel">
                            <button id="btn" @click="btnTel">确认</button>
                            <p v-text="textTel" :style="showBtn?{color:'#195'}: {color:'red'}"></p>
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <div v-show="show">
                        <dl class="sel-yzsj" id="sel-yzsj">
                            <dt><span class="required" style="color: red;"></span>验证方式：</dt>
                            <dd>
                                <div id="duan">手机短信验证</div>
                            </dd>
                            <div class="clears"></div>
                        </dl>
                        <dl>
                            <dt><span class="required" style="color: red;">*</span>短信验证码：</dt>
                            <dd>
                                <input type="text" id="smsCode" placeholder="请输入短信验证码" @blur="smsCode" v-model="num">
                                <input id="sendsmsCode" type="button" value="获取验证码" onclick="sendCode(this)"
                                    style="height: 30px; background: #e4e4e4; " @click="btnDuan">
                                <p v-text="textnum" :style="shownum?{color:'#195'}: {color:'red'}"></p>
                            </dd>
                            <div class="clears"></div>
                        </dl>

                        <dl>
                            <dt><span class="required" style="color: red;">*</span>新密码：</dt>
                            <dd>
                                <input type="password" id="password" placeholder="请输入6位以上密码" v-model="password"
                                    @blur="blurPwd">
                                <p v-text="textPwd" style="color:red;" v-show="showpwd"></p>
                            </dd>
                            <div class="clears"></div>
                        </dl>
                        <dl>
                            <dt><span class="required" style="color: red;">*</span>确认新密码：</dt>
                            <dd>
                                <input type="password" id="passwordCheck" placeholder="请再次确认密码" @blur="confirmPwd"
                                    v-model="passwordChec">
                                <p class="passwordTip" v-text="pwd1" :style="showpwd1?{color:'#195'}: {color:'red'}">
                                    两次密码不一样
                                </p>
                            </dd>
                            <div class="clears"></div>
                        </dl>

                        <div class="subtijiao">
                            <input type="button" value="确认" @click="sub()">
                        </div>
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
                // 电话号码验证
                tel: "",
                show: false,
                textTel: "",
                showBtn: false,
                // 短信验证
                nums: null,
                num: '',
                textnum: '',
                shownum: false,
                isok: true,
                // 密码验证
                password: '',
                textPwd: '',
                passwordChec: '',
                showpwd: false,
                pwdisok: false,
                pwd1: '',
                showpwd1: false


            };
        },
        methods: {
            //   验证手机号是否注册过
            async btnTel() {
                if (this.tel) {
                    let data = await this.$axios("http://10.3.132.145:3300/login/tel", {
                        params: {
                            tel: this.tel
                        }
                    });
                    if (data.data == "yes") {
                        this.show = true;
                        this.textTel = '手机号验证'
                        this.showBtn = true
                    } else {
                        this.textTel = '该手机号没有注册请您换个号码'
                        this.showBtn = false
                    }
                } else {
                    this.textTel = '该手机号不能为空'
                    this.showBtn = false
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
                if (this.num == this.nums) {
                    this.isok = true
                    this.textnum = '短信验证成功'
                    this.shownum = true
                } else {
                    this.textnum = '您输入的验证码有误'
                    this.shownum = false
                }
            },
            blurPwd() {
                if (this.password.length < 6) {
                    this.textPwd = '请设置长度大于6位数的密码'
                    this.showpwd = true
                } else {
                    this.showpwd = false
                }
            },
             confirmPwd() {
                if (this.password == this.passwordChec && this.password && this.passwordChec) {
                    this.pwdisok = true
                    this.pwd1 = '两次密码设置一样'
                    this.showpwd1 = true
                } else {
                    this.pwd1 = '两次密码设置不一样'
                    this.showpwd1 = false
                }
            },
            async sub(){
                    if(this.password && this.tel && this.num && this.passwordChec){
                        if(this.isok && this.show && this.pwdisok){
                            await this.$axios({
                                method:'post',
                                url:'http://10.3.132.145:3300/reg/updata',
                                data:this.$qs.stringify({
                                    tel:this.tel,pwd:this.password
                                })
                            }).then(res=>{
                                if(res.data=='yes'){
                                    alert('修改成功')
                                    this.$router.push('/login')
                                }else{
                                    alert('修改失败')
                                }
                            })
                        }
                    }else{
                        alert('请输入完整的信息在提交')
                    }
            }



        }
    };
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
        box-sizing: content-box;
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

    @media only screen and (max-width: 320px) {
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

    @media only screen and (max-width: 640px) and (min-width: 321px) {
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

    #posbtn {
        position: relative;
    }

    #btn {
        position: absolute;
        width: 50px;
        height: 30px;
        background: #e4e4e4;
        margin-left: 10px;
    }

    #duan {
        width: 100%;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        color: #333;
    }
</style>