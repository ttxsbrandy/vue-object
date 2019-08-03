<template>

    <div class="body">
        <header>
            <img alt="" src="https://cas.jingpai.com/tpcas/Public/images/headerImg.png" style="width:100%;padding-top: 30px;height:80px;"
                id="headImg-pc">
          
        </header>

        <div class="container">
            <div>
                <form action="" method="get" class="forget-pwd">
                 

                    <div class="clears"></div>


                    <dl class="sel-yzsj">

                        <dt><span class="required" style="color: red;">*</span>手机号：</dt>
                        <dd>
                            <input type="text" id="telphone" placeholder="请输入您的手机号">
                            <p class="phoneTip" style="">
                                手机号格式不正确</p>
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl class="sel-yzsj">
                        <dt><span class="required" style="color: red;">*</span>图形验证码：</dt>
                        <dd>
                            <input type="text" placeholder="请输入图形验证码" id="validateCode" name="validateCode">
                            <img style="cursor: pointer; vertical-align:middle;" title="刷新验证码"
                                src="/tpcas/index.php/Home/Index/verify?time=0.7853029156465678" id="verifyImg"
                                onclick="freshVerify()">
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl>
                        <dt><span class="required" style="color: red;">*</span>短信验证码：</dt>
                        <dd>
                            <input type="text" id="smsCode" placeholder="请输入短信验证码"> <input id="sendsmsCode"
                                type="button" value="获取验证码" onclick="sendCode(this)"
                                style="height: 30px; background: #e4e4e4; ">
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl>
                        <dt><span class="required" style="color: red;">*</span>密码：</dt>
                        <dd>
                            <input type="password" id="password" placeholder="请输入6位以上密码">
                        </dd>
                        <div class="clears"></div>
                    </dl>
                    <dl>
                        <dt><span class="required" style="color: red;">*</span>确认密码：</dt>
                        <dd>
                            <input type="password" id="passwordCheck" placeholder="请再次确认密码">
                            <p class="passwordTip" style="display: none;"> 两次密码不一样</p>
                        </dd>
                        <div class="clears"></div>
                    </dl>

                    <div class="subtijiao">
                        <input type="button" value="注册" onclick="sub()">
                    </div>
                </form>
            </div>


            <!--  register succ,auto jump  -->
            <div style="display: none">
                <form method="post" id="fm1" action="https://cas.jingpai.com/cas/login">

                    <h2>请输入您的用户名和密码.</h2>


                    用户名:<input type="text" id="login_username" name="username" value="">

                    <br>

                    密　码:<input type="text" id="login_password" name="password" value="">

                    <br>

                    execution:<input type="hidden" name="execution"
                        value="fbeeaec4-72ca-448c-ab0c-96ef93751ec0_ZXlKaGJHY2lPaUpJVXpVeE1pSjkuWjNsUFRtTjVSbFF5V1VaMmVEUmFVVE5LWjNvMmFrRnJjRGxQVjJSc2VWVjBOelp1V1ZBMEx5OTRlVXA1VGpCSVJXSjJTRkpoZFV0YWJXbG9PVGswWlc1d05saEVjSGxFZWtoQ1NtTkdZa3RTTkcwMVMzWnNTRlZJTTI1cFpUUk1iMk0wTTJ4bmQzcHJRMmh6VmpKa0swbE5ORVp4ZEdkUU1WTmphVEIwUTBwclZYUTJVRXBOVnpKNmQyVlRWRTl0Tm14cWVUVk5SQzg0TUVSVlFtMXVRbXhtYjIxbVl6TjRRV2h4TTB0cVoySnFXR0YyTURsTk9WTm9SVzVSTWtkRGIwVldNVWRFTjB3eE5ISmtTRGxyTWpCR2RESXlXVTE0TDJKeE4yeHhLMFo1Y25wTmFHTk9OV1pQTW1vMVQxcGxUMjlOZFRWMVUyRlFTa295TkRGa1RFVk1URGc1TDNoWGVtZERaMU56WXpGTFprVnFOMDF4VVU1MFNWUTJjRWc1YkRWa2JIWklPSFk1TkdwVGMwaFJlbmhpVURoemVVWXZOMFp3U1RSNFkwaDFObWhuU2xSaE5uazBVMlIwUWtFMU4zSllNMGh3V2tkbFRVWTNZVVE1ZVZOTWRtNUtjR2RIZURrck1YYzVPSEV2UWxKbmJ6aDJLemg2VkhKME4ybHNkME5WUTJZck5FZENiVWRPT1hOUFRFTXlRbWhsU1hWd1RYaGxSazFpUTFwdE1qTTBUV2xuTDJOeFFtdG5kVTh3TlhkWVRUSXlTWFozVXlzM1ZGVmpPWFZEWVd0VFVVNHpiVk4wUldwVFZEQXhOV1E1U2xNcmVqWkdXSGR2WlU1RlNuWlBhVkU1YldNMWEyWm9NbmhSTm5SRVZHOXFSVzE1ZFdrNWJIVnJVMUl5TWk5QlpFb3ZWRWR6UkdGWFdXOHdSelJNUlhkRFpuWTFURWxwYkZkbGIydFlabGhRYkRaNVMzTnJWa0ZLUTNwdlpGVllSbXRvTDBSbUwxUmtjemRrV0dnM05YWmxWWFZEWVZsUFFpOVVibXAzTW5BMWFFZEtPRFJNUkZkc2JXUTJZMkYwVWxGdGFXZHdNamRGUVU1NVpVSkxlbEJNZEU5ck5ubFRlRTFtTVhWVWJtRmlXRk5IT1V0YU0yRnNWVkJXU3pNdlFrSmtla2RsYjBobGRsY3JXVmRXZW1sSGVWVXhhV3M0WTBkVVkxaEhkR3hDSzB0MlFuaHdiMkZzY1ZkdU5sZFhja2hIU1ROYVJXMU9aM1ZsY25NdlJscFRaMWt3Tm1ZcmNsTjBOV2g1VjIxU04yVmhRMlZJVm1kdmNtUk5lRmRvUVhsek1sTlZZM1phYlVVemQyOXliMGw0TVdWbWFGSTVSMFY0Wm5SeGVWTkVlRGhIUmpGT2NGUmtOMFlyTURkVmEwcG1jelJGZUZoT0wzSnJOR05OVW0xdk4yOU5USGMxWTB0NlZUaGxNalV6VlRrNWNHUndhbTVPTkVGeVltbFBORzloY214U2JYZEJOVzVDTUhSWE4wcERSbUZQYVhveVFXTkhTRWhyZDJGc2NYWlJSM2NyUkhnNU5tbEtPVmRCVldwbVp6VlBhMFpxUTFsSFRHRklVVGRQVkhKUFFqSkxRaXRvVkdwcFJYaGxRbGs0VWpaa2VVdE9ZemMzY210R1RraHJlalZOVldjdmVXMUpSV1p1VG1OS04xcDVNRFl6Y1cxd1dGTlBObUZKWVhsNmFWWnNXVEpWWm5KV2NUWmliVnBEZGpkSU1reDZiRVZEWkZKSGFHcEZhazhyVUV4VVJXMDRaR0kyUlZnM1EzWXlXbk56TWsxQk16WnVjRGRZV0RSdVdYTXZlamxEY0hrdlUyeEhZbnBVWlZOeVpFTTJhRFpyTlVkRE5sUklaQ3M0U2t0alZXdFpMM1ZRUzJ3Mk1VSXpaMjlhVFVKVFZHNDBVemhLTkhZdmJWbFRhMUZtYWtKTlNEUlNjVlZJYzBsNE5qVktaSGRhTTIxc1kxcG9OREU0U2xwdlZUWlBTR1JYVW5kelJqSXhRbVZ5Y2tOelpsSkNiV1V6YkU1Ulp6azVSbFpVYW5oQ1ZYVmhMMWNyVjJKalZFOHpVRWgzT0ZCUmJqRlhhazQyVTFkbWJtZE5PWHBUSzNaUmVYRlNhRXhYZVV0dVFUQnhjVGM0YWxGc1dpdDZNbTFsTW10blJVSldUbGhETmk5TlkwVkJlVUZVYjFsellsbDNUVXRuVm1sa2JsTjNhQzlVZEZsWWRGZE1ZVWcwZERrelNqTTRlbEZIYWtVM05XcHRNbEZRT1VGU2JTOHJRbU4wYWtGUk9XTlNPV3BXWkRNMEt5OXVZWHBNWldoV1JUWjNZVXBOZEUxUlJscHBNbGRHVlhwcWRrNXdhMWh6WVRnckswSmlaSEZGT1RkSGRXSXdhbFpJYlU1bk9DOVdUekUyTjA1NVEwUjZOMlpsU25kRk1EUldObFZqVDNwT1l5dHJXR3hyUW5CR1MxSkdUMmxZY3pBMFVWSjNkV1ZIVFVJeGNrNDNVRmt3YmxJclR6WjNOSEZWUTFFeE1qSnFja1JHUm1wS2JXVXhhMDlLVmpSeFJ6UXJNV05rUkU1VVJUZDVlbTlOWkVNelpXdFdaR2Q0UkRjMlRXRm9lVXRaU1ZkU1RDOWpUbFZYTVhoUWFrRjJhRmsyVERZd1JsTjRaM0pNYUd3MGFWTmhiMHhhTkVsT1JUTnlNR2RIWTJnMEwyNUxURzVoVFd3MlZpdFphVVZHVUVveVZ6Qk5lRUozYWtoRGFEVnhlV0pwZFZaQk5VWXpZVmRNTmxWV1pFaFdObWs1TVZCdlFVZFRObTlUY0M5WFJVZHdha000VFc4dk5WbHhhaXRyVlRNd2IwZFJhalYxZDJwRlMzUlRaVTVuYVUwMFppODBhemhKVEdsWE9VcDFWWGt4ZGpJNWNXeExNbEZqZWtoU1QzY3hNV1pUYlRGTGF6RlpRV3d3TmtoM1RteFhaVEZ0VHpKUlkzcE5TbTlYZVhsc05qTnNaVkF6UW1sRFN6QTBNazV4U0ROMGNHNWhUa3B1VFZkVFRVMVBTSHAyYTBGMVMyWTVOV1pvWlc1bGFFMDVWR3g2Y3pobVZUSXdWSEJKZEZCUU4zWjBjRzR3U0VodWIyMUpNa2RIY1hWS1JERm9XVUZDTUZOWlF6UjNiVGh4VTFOTWFHZFZSbFkyY0VkT1oxUlhSM2xHTWxCak1ISmFaMHBYV0ZOcGJWVkpiVTQ1TVZWSmIwTldlV0pqVVc1RE9XWkJSbEZNV0V0Qk1saHVXRVJOVTNGYVVYcFJTRU5hYkZJMlFtWnZZVVV3UXpoblNUZzFjSFpZYW5VMloyNTJZelJzZUU1SGRGb3ZkV1J5WVM5bVprSndaVzVpVFVGSGFVaFJNaTlDY21VekwzUkpSbHBQVkdWWmQzQnFTVWxGTVVKRWNVSnZhSFZQUXpkWlZUaHBSMFZZZDFKMFpqSnVTV3BXTm5obWRGRk5UblpoTjJjNVkwVktjMXBZTkdwNlVUTk9OMXBuTDJGa01VdERZM0JLVEdsQlJqQjJMMkpyWkZNeE9FNHhMMFJLWTFoaVVtczJjMk5zTmlzckwwUnlTSEY1UWtjemFsQlFUR2hvZFZSeFUzWkVlV2xzSzJZMlppOHlWelJhTkROdGJHWnpSMUZXU0VKTFptdERabVp4TVRkS2FWTlpPVVp0TUdrMWMyUlNjM0l3VjBsNVFXVmpWVnBaZERObWFsRXdTemgzVVN0S1YzcEtTaklyTmxCVlkxZHRTbGxrT1VrNU0wcG1WM042UTJkR2NERm9PR2xZUVdoVVRqZEpURVE1WTBzeVN6TjZSMDlPTDJaVVVVaDFUa2xtVlRWNFVtZHBXV3RWZDFoVE5tUkNWbVVyT0dobmJFaFlOWGxYUldaVGFtdEZUazk2V1ZneVZFcHBialJHTW1sTlpYaDRPSGRLVGs1UVdqazVTRmxTTVdodWVYRnBRWFl6YUhkRWJYQnhjbWRrY2xKTGFFbHBVbXd6Vm5sVFJTdElPRTAxZFZWc09GRjVkelZRZFhKbllWUkVXQ3N3YUZSbGVrOVZTME54UW1WNlkwVk5ZM1p1Y1dneVRGbFhia0ZPZUVaMk5uaEtSMFU0ZUhoWmVIZHJNMHQ0YXpkTVUwZFNNM0pxVEdGVFRGbFlOVlZHU0ZaelZWcFJhelpwVmtGUVEyUk5WMGhKWm5jM2RpdGtVM1ExVG1KcFprSldhelpEUlc1aE9VWjZlbE1yVUVjd1ozWnViMDVqYzFOaGVFVTVWbXBzVWpZMVpUTkhkRFE0TTFKS1kwVTJXbk5NVTFScFdUbDNha3BLUTI0eVVuVnhOR3B2UVVZM05YTjRTQ3RhUkhKbVdFWnRiVTV1TkZOYVVWRk5ZVWRtV0daTGFsVkZXbVJsYkZCWFowMDFibWcxVkRsdFRrc3hRWGxsYkU4eFpVZFZOMDlzVVRkU1Ywd3daUzlzZVROd1FtMHpkbkI2YnpocmJHaGFXRUU1Vld4ck0xaFdORXhoT1ZKeGFrcFpOM1ZTTkdSRlJGa3JZMnROYW5FelZXTkdaSGxuUkRNMWVVeENXazh2UzBod1VuWkxTekp5TmtjMFRFTm5abVZGVVdsbFNXVTRNa3hsWWt3emMweHJWVTV4WXpsVGVYaDZTRFJaWldSc05qUldWbVZQZDBsUk1rWnJkbXhTVW1JeFUxaGtiM1Z0Y0VKVVFYbE5Zemw2ZUhOUVlucDVlV040V2xoT1NFSkVRVGhOZW5WalIwWmhNM3AwUkVaQlRtbE1LemxVT0RkM1kwWXhhMkYwZVdWcllrUmFLMWhpVFV3MlYzRkVXSGhRVFhKdFdYQm9VbmQzTVVwcUsyUXZTWGhtYkd0TlFUSk1WRXAyVDFSbU9XeE9NSFJTUVROaWRtWTNlbXgwTkRrelQxa3dkR2xCUVVObGFESnRhWFJyVTFCdVpqRk9abFJwWm1KcEszbElURlZQZUhCNVN5ODBOakpZT1hkQkx6bDRWako1ZHl0TlduWldTRXBPY2pWUWIwTlNSR3QwVG10WU0wbE1NVTV5TVhVclUyTm1aREI0UmpGU1pGRTBlazFEVjNONFRXVnNOMUpsTTJjMWVUTTFUa054Ukc0NVMyMVFMekZYTm1sNEsyMHdUR1phYkVkdmJIQlNOVXQwWkVaaFRtd3pSbGxuYkc1b2VFSXJjMFE1UjBOMFduVkRhamR2YjNWdkwxVlRiMWhsU2tOWU1ITm1XRkZxYW1RNWNXcFhXV2xXVkdNd2VqazRXRU5hVTB3eWFIcENjVGRsUWxWTVZXRjFZV2xsU2xGbE1XODVURGRXVTJ4SGFtaG5WVGxNU0RZck1YcEpLMWxxU0cxdU1GUlpPREpoVmpKbmN5OVVLemhYTm1kVFUxbGxaRFpJV0RWSVl6WXJlVzgxYWtSdGIwSnhaVmxLVlN0MFZESTVTMDV5ZWsxS09FWlpWSGx3VGtwek1EWnFZMkV2T1ROMVJrNXJVVWsxTWpKM1UyUmlNV2RwV1VGVWNVWjFPVFpwVnpkWksyaFNhRU0wUlZObFFuY3djWEZxUVZKaE9URXdTbFUxT1V0b2EyNXdkak5OY0RkQ1QyeFpNVmd4T1VWUldETjZWV0ZIV1RGR1NqSnRValkyTTBGc01GQm1iWFJuY1N0UVdFdGthMDl2WTFKRUwyaGhlbmwwWnpOdVdsUjRjM2x5UzFBM1VqVkRha0p2WjFsdVpXOUZTRTVQVHpaVk5HeFRNMDV5Uld0NmEybFFaVEpUVDJ4NVVYSmlRMWRQVVhaYVoxZE5TMGd2TjA1c1kxUm5VM1o1VkN0MVUyZDFNVXdySzB4TlNWSk9Oa2xJVXpNd09ETXpUVXRCZUd4SFJsVndTVmRZUWtaV1VHZHNTR28yTUU0cmRESnNkRFJYTWtoV1JsTm1SbkExTkU1alptOXFVRVV4VlU5VlIzQndNVkJzVDFsNU9HRkVObTVoVHpZMVpIUjZjMHBoZEVoM1BUMC4yNGxTVkNld1lCb2Fta0JmZUJqUDNWb1Y2VDhYYzlCZlV2TndwTXBxQkpkM3lhdGVFekJJRGRJQWNnX1ZwTklfXzZGenRiZ3FGTTU5YndMMGdMbElFdw==">

                    <br>

                    <input type="hidden" name="_eventId" value="submit">

                    <br>

                    <input type="hidden" name="geolocation">

                    <br>

                    <input type="submit" value="登录">
                </form>
            </div>

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
</style>