<template>
  <div class="con">
    <div class="cart-title">
      <h1>
        <i class="icon"></i>购物车
      </h1>
    </div>
    <!-- 步骤 -->
    <div id="cart_steps" class="steps">
      <table width="100%">
        <tbody>
          <tr>
            <td class="step-item step-1 active">
              <a href="/cart.html">
                <i>1</i>购物车
              </a>
            </td>
            <td class="icon step-arrow">
              <i></i>
            </td>
            <td class="step-item step-2 active">
              <a>
                <i>2</i>填写和提交订单信息
              </a>
            </td>
            <td class="icon step-arrow">
              <i></i>
            </td>
            <td class="step-item step-3">
              <a href="javascript:void(0);">
                <i>3</i>成功提交订单
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车主体 -->
    <div id="cart_container" class="cart-container">
      <div class="title">
        <h2>已选择的商品</h2>
      </div>

      <form>
        <!-- 购物车内容 -->
        <table id="cart_main" class="cart-main" width="100%">
          <thead>
            <tr>
              <th colspan="2">商品</th>
              <th>销售价</th>
              <th>数量</th>
              <th>优惠金额</th>
              <th>积分</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <!-- 购物车商品 -->
          <tbody class="cart-item">
            <tr class="cart-product last" v-for="(item) in carlist" :key="item._id">
              <td colspan="2">
                <van-card :desc="item.name" :thumb="item.img" />
              </td>
              <!-- 价格 -->
              <td class="p-price" v-text="`￥${item.price}`"></td>
              <!-- 数量 -->
              <td>
                <van-stepper
                  v-model="item.num"
                  min="1"
                  :max="item.stork"
                  button-size="22"
                  nput-width="28"
                />
              </td>
              <td class="p-discount" v-text="`￥0.00`"></td>
              <td class="p-integral" v-text="`218`"></td>
              <td class="p-subtotal" v-text="`￥${item.price*item.num}`"></td>
              <td class="p-action">
                <a class="btn-fav" rel="_addfav_" data-gid="204">收藏</a>
                <i>|</i>
                <a class="btn-delete">移除</a>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="4">
                <!-- 订单获得的优惠促销 -->
                <div class="order-promotion" id="order_promotion">
                  <h3>
                    <a href="javascript:void(0);" class="btn-expand" @click="change">+</a>订单优惠
                  </h3>
                  <ul class="content" v-if="toggle">
                    <li>
                      <b>[包邮]</b>满199元包邮
                    </li>
                    <li>
                      <b>[包邮]</b>单品包邮
                    </li>
                  </ul>
                </div>
                <!-- 未享受到的优惠促销 -->
                <div id="unused_promotion" class="unused-promotion" style="display:none;">
                  <h3>
                    <a href="javascript:void(0);" class="btn-collapse action-toggle">-</a>您还未享受到的优惠
                    <a href="javascript:void(0);" class="action-fororder">
                      <em>凑单»</em>
                    </a>
                  </h3>
                  <ul class="content"></ul>
                </div>
              </td>
              <!-- 订单价格 -->
              <td colspan="4" class="order-price" id="order_price">
                <ul>
                  <li class="goods">
                    <span class="label">
                      <em>商品总金额：</em>
                    </span>
                    <span class="price">
                      <b v-text="`￥${computedtotal}`"></b>
                    </span>
                  </li>
                  <li class="discount">
                    <span class="label">
                      <em>订单优惠金额：</em>
                    </span>
                    <span class="price">
                      <b>￥0.00</b>
                    </span>
                  </li>
                  <li class="total">
                    <span class="label">
                      <i>
                        (订单可得积分
                        <span class="subtotal-integral" v-text="computedtotal"></span>)
                      </i>
                      <em>总金额：</em>
                    </span>
                    <span class="price">
                      <b v-text="`￥${computedtotal}`"></b>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <!-- 按钮 -->
            <tr>
              <td colspan="4" class="cart-left">
                <button type="button" class="btn btn-flat action-clean">
                  <span>清空购物车</span>
                </button>
                <button type="button" class="btn btn-caution action-fororder">
                  <span>凑单商品</span>
                </button>
              </td>
              <td colspan="4" class="cart-right">
                <a href="./" class="btn-link">继续购物</a>
                <button type="submit" class="btn btn-import btn-huge action-settle" rel="_request">
                  <span>下单结算</span>
                  <i></i>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  </div>
</template>
<script>
// import iurl from "../assets/car-car.png";
export default {
  data() {
    return {
      active: 0,
      value: 1,
      toggle: true,
      total: 0,
      carlist: [
        {
          _id: 1,
          name: "劲牌 45度劲牌纯谷酒750mL*6 光瓶箱装",
          price: 222,
          stork: 10,
          num: 1,
          img:
            "http://www.jingpai.com/public/images/4e/68/dc/6e8a3a9539ab6db2590eab5fb4bff8385c92c308.jpg"
        },
        {
          _id: 2,
          name: "劲牌 45度劲牌纯谷酒750mL*6",
          price: 1024,
          stork: 9,
          num: 3,
          img:
            "http://www.jingpai.com/public/images/4e/68/dc/6e8a3a9539ab6db2590eab5fb4bff8385c92c308.jpg"
        }
      ]
    };
  },
  methods: {
    change() {
      this.toggle = !this.toggle;
    }
  },
  computed: {
    computedtotal() {
      let computedtotal = 0;
      this.carlist.forEach(function(item) {
        computedtotal += item.price * item.num;
      });
      return computedtotal;
    }
  }
};
</script>
<style lang="scss" scoped>
.con {
  .cart-title {
    h1 {
      font: 400 24px/1.5 Microsoft YaHei, STHeiti, sans-serif;
      color: #666;
    }
    .icon {
      display: inline-block;
      margin-right: 5px;
      margin-top: -3px;
      height: 36px;
      overflow: hidden;
      vertical-align: middle;
      line-height: 36px;
      width: 32px;
      font-size: 26px;
      background: url("../assets/car-car.png");
      background-position: center center;
      background-size: cover;
    }
  }
  .steps {
    margin: 20px 0;
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  }

  .steps .active a,
  .steps .active .icon {
    color: white;
  }
  .steps .step-item {
    background-color: #efefef;
    padding: 0px 5px;
    white-space: nowrap;
    font: 16px/30px Microsoft YaHei, STHeiti, sans-serif;
    a {
      color: #8c8c8c;
    }

    width: 28%;
  }
  .steps a i {
    color: white;
    width: 22px;
    text-align: center;
    line-height: 22px;
    height: 22px;
    display: inline-block;
    background: #ccc;
    border-radius: 50%;
    margin-right: 5px;
    i {
      color: #db0306;
    }
  }
  .steps .active {
    a {
      color: white;
    }
    i {
      background: #fff;
      color: #db0306;
    }
    background-color: #db0306;
  }
  .step-arrow {
    text-align: center;
    i {
      width: 34px;
      text-align: center;
      line-height: 22px;
      height: 26px;
      display: inline-block;
      background: url("../assets/step.png");
    }
  }
  #cart_container {
    .title h2 {
      font-size: 16px;
      font-weight: 400;
      color: #666;
      padding: 0 0 5px 10px;
    }
    form {
      color: #666;
      thead {
        background-color: #efefef;
        tr {
          height: 37px;
          th {
            font-weight: 400;
            color: #666;
            font-size: 14px;
            text-align: center;
          }
        }
      }
      .cart-item {
        tr {
          border-bottom: 1px solid #efefef;
        }
        td {
          line-height: 20px;
          vertical-align: top;
          text-align: center;
          padding: 2px 0;
          font-size: 12px;
          color: #666;
          padding-top: 15px;
          padding-bottom: 8px;
        }

        .van-card {
          background: #fff;
          .van-card__desc {
            text-align: left;
          }
          img {
            max-width: 80px;
            max-height: 80px;
            vertical-align: middle;
          }
        }
        .p-action {
          a {
            color: #026eb7;
          }
          i {
            padding: 0 3px;
            font-family: serif;
          }
        }
        .p-subtotal {
          color: #fe2000;
        }
      }
      tfoot {
        tr {
          td {
            vertical-align: top;
          }
          .order-promotion .content,
          .order-coupon .content,
          .order-deduction .content,
          .unused-promotion .content {
            padding-left: 30px;
          }

          .order-promotion {
            text-align: left;
            margin: 10px 0 10px 10px;
            line-height: 20px;
            font-size: 12px;
            b {
              color: #ef4521;
              font-weight: 400;
            }
            h3 {
              font-weight: 400;
              margin-bottom: 5px;
              a {
                color: #666;
              }
            }
            .btn-expand {
              display: inline-block;
              width: 16px;
              height: 16px;
              overflow: hidden;
              border: 1px solid darkgray;
              vertical-align: middle;
              text-align: center;
              font: 14px/16px simsun, serif;
              background-color: white;
              margin-right: 10px;
            }
          }
          .order-price {
            padding: 15px 1px 10px;
            line-height: 30px;
            white-space: nowrap;
            ul {
              float: right;
              li {
                font-size: 14px;
                overflow: hidden;
                clear: both;
                .label {
                  float: left;
                  text-align: right;
                  width: 200px;
                }
                .price {
                  float: left;
                  text-align: left;
                  width: 150px;
                  padding-left: 5px;
                  color: #fe2000;
                  b {
                    font-weight: 400;
                  }
                }
              }
              .total {
                line-height: 40px;
                b {
                  font: 24px/1.5 Verdana, Geneva, Arial, Helvetica, sans-serif;
                }
              }
            }
          }
          button {
            margin: 0;
            white-space: nowrap;
            cursor: pointer;
          }
          .btn {
            background: #efefef;
            span {
              border: 1px solid #ccc;
              background-color: white;
              display: inline-block;
              padding: 0 10px;
              height: 100%;
              line-height: 1.91667;
              font-size: inherit;
              *cursor: pointer;
              margin-right: 10px;
              box-sizing: border-box;
              font-size: 12px;
            }
          }
          .btn-caution span {
            background-image: linear-gradient(#db0306, #db0306);
            color: #fff;
            filter: progid:DXImageTransform.Microsoft.gradient(enabled=true,gradientType=0,startColorstr='#FFF89416',endColorstr='#FFF49012') \9;
          }
          .cart-left {
            text-align: left;
            padding: 10px 15px;
            background-color: #efefef;
            vertical-align: middle;
          }
          .cart-right {
            text-align: right;
            padding: 10px 15px;
            background-color: #efefef;
            .btn-link {
              text-decoration: underline;
              margin-right: 10px;
              font-size: 100;
              color: #666;
              font-size: 12px;
              &:hover {
                text-decoration: none;
              }
            }
            .btn-huge {
              font-size: 133.33333%;
              position: relative;

              span {
                line-height: 2.5;
                padding: 0 50px 0 30px;
                background-image: linear-gradient(#e2232c, #ca1823);
                color: white;
                font-size: 16px;
                &:hover {
                  background-image: linear-gradient(#ff242f, #da1922);
                }
              }
              i {
                top: 7px;
                right: 42px;
                display: inline-block;
                width: 14px;
                height: 30px;
                position: absolute;
                background: url("../assets/xright.png");
                background-position: center center;
                background-size: cover;
              }
            }
          }
        }
      }
    }
  }
}
</style>


