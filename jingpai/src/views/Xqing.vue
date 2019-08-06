<template>
  <div class="xqbox">
        <div class="xqmain">
            <div class="leimg">
             
            </div>
            <div class="ribox">
              <div class="xtp">
                <h3>42度,家庭装</h3>
                <p>无劲不欢，精选苦荞麦</p>
              </div>
              <div class="xbt">
                <b>商城价:</b><span>￥600</span><span>会员价:</span><span>最低600元起</span>
              </div> 
              <div class="xft">
                 <p>服      务:由 劲牌商城 负责发货，并提供售后服务。</p>
                 <div class="num">
                    <span>购买数量</span>   <button>-</button>  <input type="number"> <button>+</button>
                 </div>
                 <div class="btn">
                    <button class="btnle">立即购买</button> <button class="btnle2">加入购物车</button>
                 </div>

                 <button class="tj"></button>  <button class="sc"></button>
                 <div class="fenx"></div>

              </div>
            </div>
    


        </div>



    </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.xqbox {
  height: 100%;
  width: 1200px;

  margin: 20px auto;
}
.xqmain {
  width: 1200px;
  height: 531px;
}

.leimg {
  width: 548px;
  height: 450px;
  float: left;

  border: 1px solid#ccc;
  box-sizing: border-box;
}
.ribox {
  height: 464px;
  width: 650px;
  float: right;
}
.ribox .xtp {
  height: 81px;
  width: 650px;
  border: 1px solid#ccc;
  padding-left: 50px;
  box-sizing: border-box;
}
.ribox .xbt {
  width: 650px;
  height: 100px;
  border: 1px solid#ccc;

  background: rgb(240, 240, 240);
  padding-left: 50px;
  box-sizing: border-box;
}
.xft {
  margin-top: 30px;
}
.xft p {
  padding-left: 50px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.xft .num {
  margin-bottom: 30px;
  padding-left: 50px;
  box-sizing: border-box;
}
.xft .btn {
  margin-bottom: 30px;
  height: 40px;
  margin-left: 150px;
}
.xft .btn .btnle {
  height: 40px;
  width: 136px;
  border: 1px solid red;
  background: pink;
  border-radius: 5px;
  margin-right: 10px;
}
.xft .btn .btnle2 {
  height: 40px;
  width: 136px;
  border: 1px solid red;
  background: red;
  border-radius: 5px;
}
</style>

