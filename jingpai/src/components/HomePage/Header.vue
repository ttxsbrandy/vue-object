<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="content clearfix">
        <div id="header-left" class="fl">
          <span>欢迎光临劲牌商城</span>
          <span>收藏劲牌商城</span>
        </div>
        <div id="header-right" class="fr">
          <select name="language" id="lang" class="fl">
            <option value>China( 简体中文 )</option>
            <option value>English( English )</option>
            <option value>Japan( 日本语 )</option>
            <option value>Korea ( 한국 )</option>
          </select>
          <div class="line"></div>
          <ul class="fl">
            <li id="log">
              <img
                src="http://www.jingpai.com/themes/shopex_D/widgets/order_members/images/icon_member.png"
                alt
              />
              <span id="login" @click="loginin" v-text="logincon"></span>
              <span id="register" @click="regin" v-text="regcon"></span>
            </li>
            <div class="line"></div>
            <li>我的订单</li>
            <div class="line"></div>
            <li id="header-cart" @click="car">
              购物车
              <span>0</span>
            </li>
            <div class="line"></div>
            <li>帮助中心</li>
          </ul>
        </div>
      </div>
    </header>
    <!-- banner图 -->
    <div id="banner">
      <img
        alt
        src="http://www.jingpai.com/public/images/35/0e/5c/af1ff83b5f0be842a43131daa9ff4ffd4b69c9a2.jpg?1526518835#h"
      />
    </div>
    <!-- 搜索框 -->
    <div id="searchPart">
      <div class="content">
        <img
          class="fl"
          alt="图片描述"
          id="logo"
          src="http://www.jingpai.com/public/images/72/01/29/7f220ac6c0e961774a35a7b9d465b087c145c34f.jpg?1465803518"
          border="0"
        />
        <div id="search" class="fl">
          <div id="search-top">
            <input type="text" id="search-input" />
            <input type="button" id="search-button" value="搜索" />
            <img
              src="http://www.jingpai.com/themes/shopex_D/widgets/search/images/icon_search.png"
              alt
            />
          </div>
          <ul id="search-bottom">
            <li>热门搜索:</li>
            <li>劲酒</li>
            <li>苦荞</li>
            <li>金眠</li>
            <li>半壶</li>
            <li>匠赏</li>
            <li>和露酒</li>
          </ul>
        </div>
        <div id="cart-part" class="fl">
          <div id="cart-left" @click="car">
            <img src="http://www.jingpai.com/themes/shopex_D/widgets/cart/icon.png" alt />
            <b class="op-cart-number" v-text="cartNum">0</b>
            <div class="minicart-cont" style="height: auto;">
              <div class="no-information">购物车中还没有商品，赶紧选购吧！</div>
            </div>
          </div>
          <div id="cart-right">
            <ul>
              <li @click="loginin" v-text="login2con"></li>|
              <li @click="regin" v-text="regcon"></li>
            </ul>
          </div>
        </div>
        <img
          src="http://www.jingpai.com/public/images/d9/0d/c8/ce2dcffa1f6f5518e46db29f13ae9515192a7694.jpg?1488762384"
          alt
          style="margin-left: 70px;margin-right: 20px"
        />
        <img
          src="http://www.jingpai.com/public/images/bb/cb/ff/3bfa9fe733e8927f5c5c1bc6bcb6ff6e8eb0f389.png?1475193532"
          alt
        />
      </div>
    </div>
    <!-- 导航 -->
    <nav>
      <div class="content">
        <dl id="goods">
          <dt class="allgoods">
            <span>全部商品</span>
            <img
              src="http://www.jingpai.com/themes/shopex_D/widgets/category/images/icon_arrow.png"
              alt
            />
            <div id="list-type" v-show="listShow">
              <dl v-for="(t,index) in typeList" :key="index" class="clearfix">
                <dt v-text="t.dts"></dt>
                <dd v-for=" (d,index) in t.dds" v-text="d" :key="index"></dd>
              </dl>
            </div>
          </dt>
          <dd class="goodtype" id="shouye" @click="home">
            首页
            <img src="http://www.jingpai.com/public/app/b2c/statics/images/hot_tag-hot.png" alt />
          </dd>
          <dd class="goodtype">定制专区</dd>
          <dd class="goodtype">食品专区</dd>
          <dd class="goodtype" id="huiyuan">
            会员专区
            <img src="http://www.jingpai.com/public/app/b2c/statics/images/hot_tag-hot.png" alt />
          </dd>
          <dd class="goodtype">劲酒专区</dd>
          <dd class="goodtype">毛铺社区</dd>
          <dd class="goodtype">关于劲牌</dd>
        </dl>
      </div>
    </nav>
  </div>
</template>

<script>
import typeList from "../../assets/typeList.json";
export default {
  data() {
    return {
      typeList,
      listShow: false,
      cartNum: 0,
      logincon: "登陆",
      regcon: "注册",
      islogin: false,
      login2con: "登陆"
    };
  },
  methods: {
    loginin() {
      if (!this.islogin) {
        this.$router.push({
          name: "login"
        });
      }
    },
    regin() {
      if (this.islogin) {
        //退出
        localStorage.removeItem("tel");
        localStorage.removeItem("token");
        this.logincon = "登陆";
        this.regcon = "注册";
        this.islogin = false;
        this.login2con = "登陆";
      } else {
        this.$router.push({
          name: "reg"
        });
      }
    },
    car() {
      if (this.islogin) {
        this.$router.push({
          name: "car"
        });
      } else {
        let res = confirm("您还未登录，请先登陆！");
        if (res) {
          this.$router.push({
            name: "login"
          });
        }
      }
    },
    home() {
      this.$router.push({
        name: "home"
      });
    }
  },
  created() {
    let tel = localStorage.getItem("tel");
    if (tel) {
      this.islogin = true;
      this.logincon = `${tel} 欢迎！`;
      this.login2con = "欢迎";
      this.regcon = "退出";
    } else {
      this.islogin = false;
      this.logincon = "登陆";
      this.regcon = "注册";
      this.login2con = "登陆";
    }
  }
};
</script>

<style lang="scss" scoped>
/* 头部加图片------------------------------------------------ */
.content {
  width: 1200px;
  margin: auto;
}

header {
  width: 100%;
  height: 30px;
  background: #fafafa;
}

header #header-left span {
  color: #8b898a;
  font-size: 14px;
  float: left;
  margin-right: 20px;
  line-height: 30px;
}

header #header-right #lang {
  margin-top: 5px;
}

header #header-right ul #log {
  color: #000;
  font-size: 14px;
  float: left;
  margin-left: 10px;
  line-height: 30px;
}
header #header-right ul li {
  cursor: pointer;
}
header #header-right ul #log img {
  margin: 8px 10px;
  float: left;
}

header #header-right ul #log #login {
  margin-right: 10px;
}

header #header-right ul li {
  float: left;
  color: #8b898a;
  font-size: 14px;
  line-height: 30px;
}

header #header-right ul #header-cart {
  color: #c9141d;
}

.line {
  width: 1px;
  height: 14px;
  float: left;
  background: #c6c6c6;
  margin: 8px 10px 0 10px;
}

#banner {
  width: 100%;
  text-align: center;
  overflow: hidden;
  margin-bottom: 40px;
}

#banner img {
  margin-left: -285px;
}

/* 搜索框部分 ------------------------------------------------*/
#searchPart {
  height: 120px;
}

#searchPart #logo {
  margin-top: 32px;
  margin-right: 100px;
}

#searchPart #search {
  width: 500px;
  height: 50px;
  margin-top: 40px;
}

#searchPart #search #search-top {
  width: 430px;
  height: 30px;
  background: #c9141d;
}

#searchPart #search #search-top img {
  width: 14px;
  height: 16px;
  margin-top: 7px;
}

#searchPart #search #search-input {
  width: 350px;
  height: 24px;
  background: #fff;
  border: 0;
  float: left;
  margin: 3px 0 3px 3px;
  border-radius: 3px;
  line-height: 21px;
  padding-left: 2px;
  font-size: 14px;
}

#searchPart #search #search-button {
  width: 50px;
  height: 30px;
  line-height: 30px;
  float: left;
  color: #fff;
  font-size: 14px;
  background: transparent;
  border: 0;
  margin: -2px 0 0 0;
}

#searchPart #search #search-bottom li {
  float: left;
  color: #9f9f9f;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
}

#searchPart #search #search-bottom li:nth-child(1) {
  color: #525252;
  margin-left: 0px;
}

/* 购物车部分------------------------------------------------------ */
#cart-part {
  margin-top: 50px;
}

#cart-left {
  text-align: center;
  width: 36px;
  height: 36px;
  border: 1px solid #f2f2f2;
  position: relative;
  float: left;
  margin-right: 15px;
}

#cart-left .op-cart-number {
  display: inline-block;
  width: 16px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  color: #fff;
  background-color: #c81623;
  position: absolute;
  top: -4px;
  left: 25px;
  font-style: normal;
  border-radius: 7px 7px 7px 0;
  font-size: 12px;
}

#cart-left .minicart-cont {
  width: 275px;
  height: 85px;
  overflow-y: auto;
  overflow-x: hidden;
  display: none;
  background-color: white;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 9998;
  text-align: left;
  line-height: 18px;
  padding: 10px;
  box-shadow: 0 1px 3px #ccc;
}

#cart-left:hover .minicart-cont {
  display: block;
}

.minicart-cont .no-information {
  padding: 30px 0;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}

#cart-right {
  float: left;
  border: 1px solid #f2f2f2;
  width: 110px;
  height: 36px;
  color: #f2f2f2;
}

#cart-right ul li {
  display: inline-block;
  color: #1a1a1a;
  padding: 10px 10px;
  font-size: 14px;
  cursor: pointer;
}

/* 导航部分 */
nav {
  width: 100%;
  height: 40px;
  background: url(http://www.jingpai.com/themes/shopex_D/images/images/nav_bg.png) -150px
    0px;
}

nav #goods {
  color: #fff;
  line-height: 40px;
}

nav #goods .allgoods {
  width: 240px;
  float: left;
  position: relative;
}

nav #goods .allgoods span {
  padding-left: 20px;
  padding-right: 10px;
  cursor: pointer;
}

nav #goods .goodtype {
  width: 120px;
  float: left;
  cursor: pointer;
  text-align: center;
}

nav #goods .goodtype:hover {
  background: rgba(122, 14, 20, 0.6);
}

nav #goods #shouye {
  position: relative;
}
nav #goods #shouye img {
  position: absolute;
  margin-top: -10px;
}
nav #goods #huiyuan {
  position: relative;
}
nav #goods #huiyuan img {
  position: absolute;
  margin-top: -10px;
}

/* 全部商品部分 */
nav #goods .allgoods #list-type {
  position: absolute;
  top: 40px;
  left: 0px;
  width: 240px;
  height: 450px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 999;
}

#list-type dl {
  width: 200px;
  margin: 20px 20px 0px 20px;
  line-height: 20px;
}

#list-type dt {
  font-weight: bold;
  font-size: 14px;
  color: #000;
  line-height: 25px;
  cursor: pointer;
}

#list-type dt:hover {
  text-decoration: underline;
  text-decoration-color: #0563c3;
}

#list-type dl dd {
  float: left;
  color: #858585;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
}
</style>