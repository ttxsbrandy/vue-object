<template>
  <div>
    <Header></Header>
    <div class="lbox">
      <div class="lb">
        <div class="sp">
          <span>商品筛选</span>
          <span></span>
          <a href>重新筛选项></a>
        </div>
        <div class="xuze">您已选择:</div>
        <div class="fl">
          <b>分类：</b>
          <span>聚会分享</span>
          <span>坛藏佳酿</span>
        </div>
        <div class="pp">
          <b>品牌：</b>
          <span @click="test1()">劲牌</span>
          <span @click="test2()">毛铺</span>
          <span @click="test3()">枫林</span>
          <span @click="test4()">金眼牌</span>
        </div>
      </div>

      <div class="st">
        <button>默认</button>
        <button @click="sortByKey()">价格</button>
        <button @click="sortByKey6()">销量</button>
        <span>排序:</span>
        <select name id>
          <option value>默认</option>
          <option value @click=" sortByKey8()">价格从低到高</option>
          <option value>价格从高到低</option>
          <option value>访问周次数</option>
        </select>
        <input type="checkbox" name id="fxun" /> &nbsp;仅显示有货
        <div class="sx">
          筛选:
          <input type="checkbox" name id /> 最新商品
        </div>
      </div>

      <!-- 列表页 -->
      <div class="list">
        <ul>
          <li v-for="(value,index) in jinpais" :key=" 'tr1'+ index" v-show="show1">
            <img :src="value.img" alt @click="todet(value.gid)" />
            <a href v-text="value.title"></a>
            <span>￥{{value.price}}</span>
            <del>￥{{value.dprice}}</del>
            <div class="gw" @click="navTo(value)">加入购物车</div>
          </li>

          <li v-for="(value,index) in arr2" :key=" 'tr2'+  index" v-show="show2">
            <img :src="value.img" alt @click="todet(value.gid)" />
            <a href v-text="value.title"></a>
            <span>￥{{value.price}}</span>
            <del>￥{{value.dprice}}</del>
            <div class="gw" @click="navTo(value)">加入购物车</div>
          </li>

          <li v-for="(value,index) in arr3" :key=" 'tr3'+ index" v-show="show3">
            <img :src="value.img" alt @click="navTo(value)" />
            <a href v-text="value.title"></a>
            <span>￥{{value.price}}</span>
            <del>￥{{value.dprice}}</del>
            <div class="gw" @click="navTo(value)">加入购物车</div>
          </li>

          <li v-for="(value,index) in arr4" :key=" 'tr4'+ index" v-show="show4">
            <img :src="value.img" alt @click="todet(value.gid)" />
            <a href v-text="value.title"></a>
            <span>￥{{value.price}}</span>
            <del>￥{{value.dprice}}</del>
            <div class="gw" @click="navTo(value)">加入购物车</div>
          </li>
        </ul>
      </div>
      <div class="pg">
        <!-- 分页 -->
        <van-pagination v-model="currentPage" :total-items="4" :items-per-page="2" />
      </div>
    </div>
    <Footer></Footer>
    <Aside></Aside>
  </div>
</template>

<script>
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import Aside from "../components/HomePage/Aside";
export default {
  data() {
    return {
      jinpais: "",
      arr2: "",
      arr3: "",
      arr4: "",
      url: "xqing",
      isok: false,
      currentPage: 1,
      show1: 1,
      show2: false,
      show3: false,
      show4: false
    };
  },
  components: {
    Header,
    Footer,
    Aside
  },
  async created() {
    let julists = await this.$axios("http://10.3.132.48:3300/list/goodlist");
    this.jinpais = julists.data;
    console.log(julists);

    //查找商品

    let arr2 = [];
    julists.data.forEach((item, index) => {
      if (item.fl == "毛") {
        arr2.push(item);
      }
    });
    this.arr2 = arr2;

    //查找金眼牌
    let arr3 = [];
    julists.data.forEach((item, index) => {
      if (item.fl == "金眼") {
        arr3.push(item);
      }
    });
    this.arr3 = arr3;
    //查找枫林
    let arr4 = [];
    julists.data.forEach((item, index) => {
      if (item.fl == "枫林") {
        arr4.push(item);
      }
    });
    this.arr4 = arr4;

    //分页
  },

  computed: {
    sortByKey1() {
      return this.jinpais.sort((a, b) => a.price - b.price); //价格升序
    },
    sortByKey2() {
      return this.jinpais.sort((a, b) => b.price - a.price); //价格降序
    },
    sortByKey3() {
      return this.jinpais.sort((a, b) => a.xiaoliang - b.xiaoliang); //销量升序
    },
    sortByKey4() {
      return this.jinpais.sort((a, b) => b.xiaoliang - a.xiaoliang); //销量升序
    }
  },
  methods: {
    sortByKey() {
      if (this.isok) {
        this.isok = false;
        this.jinpais = this.sortByKey1;
      } else {
        this.isok = true;
        this.jinpais = this.sortByKey2;
      }
    },
    sortByKey6() {
      if (this.isok) {
        this.isok = false;
        this.jinpais = this.sortByKey3;
      } else {
        this.isok = true;
        this.jinpais = this.sortByKey4;
      }
    },
    sortByKey8() {
      return this.jinpais.sort((a, b) => a.price - b.price); //价格升序
    },

    test1() {
      this.show1 = 1;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    },
    test2() {
      this.show1 = false;
      this.show2 = 1;
      this.show3 = false;
      this.show4 = false;
    },
    test3() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = 1;
      this.show4 = false;
    },
    test4() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = 1;
    },

    async navTo(name) {
      // 编程式导航
      let tel = localStorage.getItem("tel");
      // console.log(name.gid);
      if (tel) {
        let result = await this.$axios("http://localhost:3300/car/add", {
          params: {
            gid: name.gid,
            tel,
            num: 1
          }
        });

        if (result.data.ok) {
          // console.log("成功");
          let res = confirm("成功加入购物车，去购物车结算？");
          if (res) {
            this.$router.push({ name: "car" });
          }
        }
      } else {
        let res = confirm("您还没登陆，请先登陆");
        if (res) {
          this.$router.push({ name: "login" });
        }
      }
      // console.log(name);
    },
    todet(goodid) {
      this.$router.push(`/detail/${goodid}/det`);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

.lbox {
  width: 1200px;
  height: 100%;
  margin: auto;
}

.lbox .lb {
  width: 1200px;
  height: 145px;
  border: 1px solid#ccc;
  margin-bottom: 10px;
  margin: 0 auto;
  box-sizing: border-box;
}

.lbox .lb .sp {
  width: 1200px;
  height: 40px;
  background: #ccc;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
}

.lbox .lb .sp a {
  color: blue;
  margin-left: 1000px;
  font-size: 12px;
}

.lbox .lb .sp a:hover {
  border-bottom: 1px solid blue;
  box-sizing: border-box;
}

.lb .xuze {
  padding-left: 30px;
  height: 23px;
  line-height: 23px;
  padding-top: 6px;
  padding-bottom: 25px;
  background: rgb(240, 240, 240);
  box-sizing: border-box;
  font-size: 12px;
}

.lb .fl {
  width: 1200px;
  height: 23px;
  padding-top: 6px;
  padding-bottom: 25px;
  border-bottom: 1px dashed#ccc;
  padding-left: 50px;
  box-sizing: border-box;
  font-size: 12px;
  color: #666;
}

.lb .fl b {
  font-weight: normal;
  color: black;
}

.lb .fl span {
  margin-left: 10px;
}

.lb .fl span:hover {
  border-bottom: 1px solid#666;
  box-sizing: border-box;
  cursor: pointer;
}

.lb .pp {
  width: 1200px;
  height: 23px;
  margin-bottom: 20px;
  border-bottom: 1px dashed#ccc;
  padding-top: 6px;
  padding-bottom: 25px;
  padding-left: 50px;
  box-sizing: border-box;
  font-size: 12px;
  color: #666;
}

.lb .pp b {
  font-weight: normal;
  color: black;
}

.lb .pp span {
  margin-left: 10px;
}

.lb .pp span:hover {
  border-bottom: 1px solid#666;
  box-sizing: border-box;
  cursor: pointer;
  background: red;
  width: 30px;
}

.lbox #fxun {
  margin-left: 15px;
}

.lbox .sx {
  height: 30px;
  line-height: 30px;
  border: 1px solid#ccc;
  border-top: none;
  padding-left: 20px;
  box-sizing: border-box;
}

.sx input {
  line-height: 30px;
  margin-left: 10px;
  margin-top: 5px;
}

.lbox .st {
  width: 1200px;
  height: 40px;
  margin: 0 auto;
  background: rgb(240, 240, 240);
  line-height: 40px;
  margin-bottom: 10px;
  border-bottom: 1px solid#ccc;
  box-sizing: border-box;
  margin-bottom: 40px;
  color: #666;
  font-size: 12px;
}

.lbox .st option {
  color: 12px;
}

.lbox .st button {
  margin-left: 10px;
  width: 80px;
  height: 30px;
  line-height: 30px;
}

.lbox .st span {
  margin-left: 10px;
}

.lbox .list {
  height: 400px;
  width: 1200px;
  margin: 0 auto;
}

.list ul {
  width: 1200px;
  float: left;
}

.list ul li {
  float: left;
  height: 371px;
  width: 25%;
  border: 5px solid #fff;
  box-sizing: border-box;
}

.list ul li:hover {
  border: 5px solid pink;
}

.list ul li img {
  margin: 10px 35px;
  height: 200px;
  width: 200px;
  margin-left: 45px;
  cursor: pointer;
}

.list ul li a {
  color: #666;
  display: block;
  font-size: 14px;
  margin-left: 20px;
}

.list ul li span {
  color: red;
  font-size: 14px;
  margin-left: 20px;
}

.list ul li del {
  color: #666;
  font-size: 14px;
  margin-left: 20px;
}

.list ul li .gw {
  border: 1px solid#ccc;
  width: 100px;
  background: red;
  color: #fff;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
}

.lbox .pg {
  width: 200px;
  float: right;
}
</style>

    