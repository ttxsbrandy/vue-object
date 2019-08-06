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
            <td class="step-item step-1 active" @click="tocar">
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
            <td
              :class="{'step-item':1,'active': ishover }"
              @mouseenter="mouseent"
              @mouseleave="mousele"
            >
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
        <h2>填写和提交订单信息</h2>
      </div>
      <form action>
        <div id="order_main" class="order-main">
          <!-- 收货信息 -->
          <div
            id="order_shipping"
            class="order-section order-shipping"
            data-validatemsg="请完整填写收货信息并确认收货信息"
          >
            <div class="order-section-title">
              <b>收货信息</b>
            </div>
            <div class="order-section-content">
              <!-- 完整收货信息 -->
              <table class="view-shipping fold">
                <tbody>
                  <tr>
                    <th>收货地区：</th>
                    <td>
                      <input type="hidden" name="def_addr_id" value />
                    </td>
                  </tr>
                  <tr>
                    <th>收货地址：</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>收货人姓名：</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <!-- 常用收货地址列表 -->
              <ul id="change_shipping" class="change-shipping fold">
                <li class="last">
                  <input
                    type="radio"
                    name="address"
                    id="for_shipping_0"
                    value="0"
                    class="action-change-shipping"
                    vtype="requiredcustom"
                    data-validatemsg="请选择一个收货地址"
                  />
                  <label for="fro_shipping_0">
                    <address>使用新收货地址</address>
                  </label>
                </li>
                <li>
                  <button type="button" class="btn btn-caution action-confirm-shipping">
                    <span>
                      <span>确认收货信息</span>
                    </span>
                  </button>
                </li>
              </ul>
              <table class="fill-shipping">
                <tbody>
                  <tr>
                    <th>
                      <em>*</em>收货地区：
                    </th>
                    <td>
                      <Sel />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <em>*</em>收货地址：
                    </th>
                    <td>
                      <span id="op_splice_area"></span>
                      <input
                        class="x-input"
                        type="text"
                        name="addr"
                        vtype="required"
                        size="40"
                        data-caution="请填写收货地址"
                        id="dom_el_71155e1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>邮编：</th>
                    <td>
                      <input class="x-input" type="text" name="zip" id="dom_el_71155e2" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <em>*</em>收货人姓名：
                    </th>
                    <td>
                      <input
                        class="x-input"
                        type="text"
                        name="name"
                        id="dom_el_71155e3"
                        vtype="required"
                        data-caution="请填写收货人姓名"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <em>*</em>联系方式：
                    </th>
                    <td>
                      手机
                      <input
                        class="x-input"
                        type="text"
                        name="mobile"
                        id="dom_el_71155e4"
                        vtype="mobile"
                        data-caution="请填写手机号码或者固定电话"
                      />
                      或
                      固定电话
                      <input
                        class="x-input"
                        type="text"
                        name="tel"
                        id="dom_el_71155e5"
                        vtype="tel"
                      />
                      <span class="caution notice-inline">手机号码和固定电话至少填写一个</span>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <button type="button" class="btn btn-caution action-confirm-shipping">
                        <span>
                          <span>确认收货信息</span>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 配送方式模块 -->
          <div
            id="order_delivery"
            class="order-section order-delivery"
            data-validatemsg="请选择一种配送方式并确认配送方式"
            data-linkagemsg="因为收货地区变更，请重新确认配送方式"
          >
            <div class="order-section-title">
              <b>配送方式</b>
              <a href="javascript:void(0);" class="action-edit-delivery fold">[修改]</a>
            </div>
            <div class="order-section-content">
              <div class="notice">请先确定收货信息，之后再选择配送方式</div>
              <table class="view-delivery fold">
                <tbody>
                  <tr>
                    <th>配送方式：</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <table class="change-delivery">
                <!--预售商品选择时支付方式变化判断-->
              </table>
            </div>
          </div>
          <!-- 支付方式模块 -->
          <div
            id="order_payment"
            class="order-section order-payment"
            data-validatemsg="请选择一种支付方式并确认支付方式"
            data-linkagemsg="因为配送方式变更，请重新确认支付方式"
          >
            <div class="order-section-title">
              <b>支付方式</b>
              <a href="javascript:void(0);" class="action-edit-payment fold">[修改]</a>
            </div>
            <div class="order-section-content">
              <div class="notice">请先确定配送方式，之后再选择支付方式</div>
              <table class="view-payment fold">
                <tbody>
                  <tr>
                    <th>支付方式：</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div class="change-payment fold"></div>
            </div>
          </div>
          <div id="order_invoice" class="order-section order-invoice">
            <div class="order-section-title">
              <b>发票信息</b>
            </div>
            <div class="order-section-content">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          <input
                            type="radio"
                            name="payment[tax_type]"
                            id="for_invoice_false"
                            value="false"
                            class="action-select-invoice"
                            checked="checked"
                          />
                          <label for="for_invoice_false">不需要发票</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="payment[tax_type]"
                            id="for_invoice_personal"
                            value="personal"
                            class="action-select-invoice"
                          />
                          <label for="for_invoice_personal">个人发票</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="payment[tax_type]"
                            id="for_invoice_company"
                            value="company"
                            class="action-select-invoice"
                          />
                          <label for="for_invoice_company">公司发票</label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr class="fold">
                    <td>
                      <input type="hidden" name="payment[is_tax]" value="false" />
                      <label for="for_tax_company">发票抬头：</label>
                      <input
                        type="text"
                        name="payment[tax_company]"
                        id="for_tax_company"
                        vtype="required"
                        data-caution="请填写发票抬头"
                      />
                    </td>
                  </tr>
                  <tr class="fold" id="tr_tax_num"></tr>
                  <tr class="fold">
                    <td>
                      <label for="for_tax_content">发票内容：</label>
                      <select
                        type="select"
                        name="payment[tax_content]"
                        id="for_tax_content"
                        vtype="required"
                        data-caution="请选择发票内容"
                        class="x-select"
                      >
                        <option></option>
                        <option value="商品清单">商品清单</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 商品清单 -->
          <table id="cart_main" class="cart-main" width="100%">
            <caption>商品清单</caption>
            <thead>
              <tr>
                <th>商品</th>
                <th>销售价</th>
                <th>数量</th>
                <th>优惠金额</th>
                <th>积分</th>
                <th>小计</th>
              </tr>
            </thead>
            <!-- 购物车条目 -->
            <tbody class="cart-item" v-for="(item,index) in carlist " :key="index">
              <!-- 主商品 -->
              <tr class="cart-product last">
                <td class="p-info">
                  <div class="p-title">
                    <a href="/product-22.html" v-text="item.title"></a>
                  </div>
                </td>
                <td class="p-price" v-text="`￥${item.price}`"></td>
                <td v-text="item.num">1</td>
                <td class="p-discount">￥0.00</td>
                <td class="p-integral" v-text="item.price*item.num"></td>
                <td class="p-subtotal" v-text="`￥${item.price*item.num}`"></td>
              </tr>
            </tbody>
          </table>
          <div class="carfooter">
            <table>
              <caption style="color:#FFFFFF;">结算信息</caption>
              <tfoot>
                <tr>
                  <td style="width:60% ; background-color: #fffaf2;">
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
                  <td
                    class="order-price"
                    id="order_price"
                    style="width:40%;  background-color: #fff2e0; "
                  >
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
              </tfoot>
            </table>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Sel from "./Sel";
export default {
  data() {
    return {
      active: 0,
      value: 1,
      toggle: true,
      total: 0,
      ishover: false,
      carlist: []
    };
  },
  created() {
    this.carlist = this.$store.getters.getCarlist;
  },
  methods: {
    change() {
      this.toggle = !this.toggle;
    },
    mouseent() {
      this.ishover = true;
    },
    mousele() {
      this.ishover = false;
    },
    tocar() {
      this.$router.push({
        name: "car"
      });
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
  },
  components: {
    Sel
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
    .order-section-title {
      height: 36px;
      line-height: 36px;
      background-color: #efefef;
      padding-left: 14px;
    }
    .order-section {
      border-top: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
    }
    .order-section-content {
      padding: 10px 20px;
    }
    .notice {
      background-color: #fff3e1;
      line-height: 50px;
      text-align: center;
    }
    .fold {
      display: none;
    }
    #order_shipping {
      .order-section-content {
        .view-shipping {
          width: 92%;
          margin: 0 auto;
          th {
            text-align: right;
            padding-right: 6px;
            font-weight: 400;
            width: 12%;
            white-space: nowrap;
          }
        }
        .change-shipping {
          line-height: 20px;
          margin: 0 auto;
        }
        .fill-shipping {
          color: #666;
          font-size: 12px;
          th {
            text-align: right;
            padding-right: 6px;
            font-weight: 400;
            width: 12%;
            white-space: nowrap;

            em {
              color: #ef4521;
            }
          }
          td {
            padding-top: 8px;
            padding-bottom: 8px;

            input {
              border: 1px #ccc solid;
              padding: 1px;
              line-height: 21px;
              height: 21px;
              border-radius: 3px;
            }
            .btn-caution span {
              padding: 4px 15px;
              color: #fff;
              background-image: linear-gradient(#db0306, #db0306);
              background-image: -webkit-linear-gradient(#db0306, #db0306);
              background-image: -moz-linear-gradient(#db0306, #db0306);
              background-image: linear-gradient(#db0306, #db0306);
              filter: progid:DXImageTransform.Microsoft.gradient(enabled=true,gradientType=0,startColorstr='#FFF89416',endColorstr='#FFF49012') \9;
            }
          }
        }
      }
    }
    #order_invoice {
      .order-section-content {
        padding: 10px 20px;
        table {
          width: 92%;
          margin: 0 auto;
          li {
            padding-right: 40px;
            padding-left: 5px;
            float: left;
          }
        }
      }
    }

    #cart_main {
      caption {
        line-height: 36px;
        padding: 0 15px;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
        background-color: #efefef;
        border: 1px solid #e6e6e6;
        border-bottom: 0 none;
      }
      thead {
        background-color: transparent;
        border-bottom: 1px solid #e6e6e6;
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
      tbody {
        border: 1px solid #efefef;

        tr {
          height: 37px;
          .p-info {
            text-align: left;
            padding-left: 20px;
            a {
              color: #666;
            }
          }
          .p-subtotal {
            color: #fe2000;
          }
          td {
            padding-top: 15px;
            padding-bottom: 8px;
            text-align: center;
          }
        }
      }
    }
    .carfooter {
      margin-top: 10px;
      table {
        width: 100%;
        caption {
          background-color: #db0306;
          padding: 0 15px;
          font-weight: bold;
          color: #271b09;
          text-align: left;
          font-size: 14px;
          line-height: 36px;
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
}
</style>


