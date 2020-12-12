<template xmlns="">
    <div>
      <buy-top
        :top="top"
      ></buy-top>

      <el-card class="confirmCard">
        <div class="confirmList">
          <div class="listL">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
          </div>
          <div class="listR">
            <div >
              <h1>订单提交成功！请尽快付款 ~</h1>
              <span>请在0 小时 14 分内完成支付, 超时后将取消订单</span>
              <div>
                <span>收货信息:</span>
                <span>陈ad 151****9063 重庆市沙坪坝区大学城</span>
              </div>
            </div>
            <div class="total">
              <span>应付总额:</span>
              <span>1999元</span>
              <a href="javascript:">订单详情
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="confirmDetails">
          <div>
            <span>订单号:</span>
            &nbsp;&nbsp;
            <span>5201210395308134</span>
          </div>
          <div>
            <span>收货信息:</span>
            <span>陈ad 151****9063 重庆市沙坪坝区大学城</span>
          </div>
          <div>
            <span>商品名称:</span>
            <span>HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
          </div>
        </div>
      </el-card>

      <el-card class="payCard">
        <div class="title">
          <span>选择以下支付方式付款</span>
        </div>

        <div class="payPlatform">
          <span>支付平台</span>
          <ul>
            <li>
              <img src="./img/pay1.jpg" alt="">
            </li>
            <li @click="weixinDialogVisible = true">
              <img src="./img/pay2.jpg" alt="">
            </li>
            <li>
              <img src="./img/pay3.jpg" alt="">
            </li>
          </ul>
        </div>

        <div class="payPlatform">
          <span>银行借记卡及信用卡</span>
          <ul>
            <li>
              <img src="./img/pay4.png" alt="">
            </li>
            <li>
              <img src="./img/pay5.png" alt="">
            </li>
            <li>
              <img src="./img/pay6.png" alt="">
            </li>
            <li>
              <img src="./img/pay7.png" alt="">
            </li>
            <li>
              <img src="./img/pay8.png" alt="">
            </li>
            <li>
            <img src="./img/pay9.png" alt="">
          </li>
            <li>
              <img src="./img/pay10.png" alt="">
            </li>
            <li>
              <img src="./img/pay11.png" alt="">
            </li>
            <li>
              <img src="./img/pay12.png" alt="">
            </li>
            <li>
              <img src="./img/pay13.png" alt="">
            </li>
            <li>
              <img src="./img/pay14.png" alt="">
            </li>
            <li>查看更多</li>
          </ul>
        </div>

      </el-card>

      <el-card class="payCard">
        <div class="payPlatform">
          <span>分期付款</span>
          <ul>
            <li>
              <img src="./img/fen1.jpg" alt="">
            </li>
            <li>
              <img src="./img/fen2.jpg" alt="">
            </li>
          </ul>
        </div>
      </el-card>

      <el-dialog
        title="微信支付"
        :visible.sync="weixinDialogVisible"
        class="payDialog"
        width="450px">
        <div class="weixinMask">
          <img src="./img/weixinMask.png" alt="">
        </div>
        <div class="tips">
          <span>请使用 <em>微信</em> 扫一扫 </span>
          <span>二维码完成支付</span>
        </div>

        <div class="weixin-PayShow">
          <div class="weixin-Pay">
            <img src="./img/weinxin-pay.png" alt="">
          </div>
        </div>

      </el-dialog>

      <nav-footer></nav-footer>

    </div>


</template>

<script>
  import BuyTop from "../../components/BuyTop";
  import NavFooter from "../../components/NavFooter";

    export default {
        name: "Confirm",
      components:{
        BuyTop,
        NavFooter
      },
      data(){
          return{
            top:{
              title:'支付订单'
            },
            weixinDialogVisible:false
          }
      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
  .confirmCard{
    margin: 50px auto;
    width: 80%;

    .confirmList{
      display: flex;
      justify-content: left;
      align-items: center;
      .listL{
        i{
          font-size: 100px;
          /*font-weight: lighter;*/
          color: #83c34d;
          -webkit-text-stroke:10px white;
          margin-right: 20px;
        }
      }
      .listR{
        width: 100%;
        height: 100%;
        /*background-color: pink;*/
        border-bottom: 1px solid rgba(117, 117, 117, 0.24);
        padding-bottom: 50px;
        box-sizing: border-box;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        h1{
          color: black;
          font-size: 24px;
          margin-bottom: 5px;
        }
        span{
          margin-top: 10px;
          display: inline-block;
          font-size: 14px;
          color: #757575;
        }
        .total{
          span{
            font-size: 14px;
          }
          span:last-of-type{
            font-size: 24px;
            color: #ac0825;
          }
          a{
            display: block;
            margin-top: 50px;
            color: #757575;
            font-size: 14px;
            margin-left: 60px;
            transition: all ease-in-out .3s;
          }
          a:hover{
            color: #ac0825;
          }

        }
      }
    }
    .confirmDetails{
      margin-top: 20px;
      margin-left: 100px;
      font-size: 14px;
      color: #757575;
      div{
        margin-bottom: 15px;
        span:first-of-type{
          margin-right: 15px;
        }
      }
      div:first-of-type span:last-of-type{
        color: #ac0825;
      }
    }
  }

  .payCard{
    margin: 50px auto;
    width: 80%;
    div{
      margin-bottom: 30px;
      span{
        font-weight: bolder;
      }
    }
    div:first-of-type{
      font-weight: lighter;
    }
    .title{
      border-bottom: 1px solid #e0e0e0;
      padding: 20px 0 30px;
    }
    .payPlatform{
      ul{
        display: flex;
        justify-content: left;
        margin-top: 20px;
        flex-wrap: wrap;
        li{
          width: 188px;
          height: 60px;
          /*background-color: pink;*/
          margin-right: 20px;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          transition: all ease-in-out .3s;
          margin-top: 20px;
          text-align: center;
          line-height: 60px;
        }
        li:hover{
          border-color: #ac0825;
        }
      }
    }
  }

  .payDialog{
    div.weixinMask{
      /*width: 50px;*/
      width: 100%;
      margin: 0 auto;
      text-align: center;
      img{
        width: 60%;
      }
    }
    div.weixinMask:hover ~ .weixin-PayShow div{
      opacity: 1;
    }
    div.tips{
      text-align: center;
      margin-top: 20px;
      span{
        display: block;
        line-height: 20px;
        em{
          color: #ac0825;
        }
      }
    }
    div:last-of-type{
      position: relative;
      .weixin-Pay{
        position: absolute;
        top: -420px;
        left: -313px;
        /*transform: translate(-50%,0);*/
        background-color: transparent;
        opacity: 0;
        transition: all ease-in-out .3s;
        img{
          height: 490px;
        }
      }
    }



  }
</style>
