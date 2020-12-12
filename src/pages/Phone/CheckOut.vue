<template>
    <div>
      <buy-top
      :top="top"
      ></buy-top>

      <el-card class="box-card">
        <ul>

          <li class="address confirm">
            <span>收货地址</span>
            <div class="addressTab">
              <div class="addressCard">
                <h2>陈家松</h2>
                <span>15123359063</span>
                <span>重庆市沙坪坝区大学城</span>
                <div class="edit">修改</div>
              </div>
              <div class="addressCard addNew">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                <span>添加新地址</span>
              </div>
            </div>
          </li>

          <li class="item confirm">
            <span>商品</span>
            <div class="itemTab">
              <div class="items1">
                <img src="./img/li1.jpg" alt="">
                <span>HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
              </div>
              <div>1999元 x 1</div>
              <div>1999元</div>
            </div>
          </li>

          <li class="delivery confirm">
            <span>配送方式</span>
            <span class="deliveryTab">
              包邮
            </span>
          </li>

          <li class="total confirm">
            <span>总计</span>

            <div class="totalTab">
              <ul>
                <li>
                  <span>商品件数:</span>
                  <span>1件</span>
                </li>
                <li>
                  <span>商品价格:</span>
                  <span>1999元</span>
                </li>
                <li>
                <span>运费:</span>
                <span>0元</span>
              </li>
                <li>
                  <span>应付总额:</span>
                  <span>1999元</span>
                </li>
              </ul>
            </div>

            <div class="button">
              <div class="back" @click="$router.push('cart')">返回购物车</div>
              <div class="go" @click="$router.push('confirm')">去结算</div>
            </div>
          </li>

        </ul>

      </el-card>

      <nav-footer></nav-footer>

    </div>
</template>

<script>
  import BuyTop from "../../components/BuyTop";
  import NavFooter from "../../components/NavFooter";

  export default {
    name: "CheckOut",
    components:{
      BuyTop,
      NavFooter
    },
    data(){
      return{
        top:{
          title:'确认订单',
          message:''
        }
      }
    },

    }
</script>

<style scoped lang="less">
  .box-card{
    width: 80%;
    margin: 50px auto;
    padding: 0 20px 20px;
    box-sizing: border-box;
    li.confirm{
      border-bottom: 1px solid #e0e0e0;
      padding-bottom:30px ;
      margin-top: 30px;
    }
    .address{
      font-size: 18px;
      .addressTab{
        display: flex;
        justify-content: left;
        .addressCard{
          border: 1px solid #e0e0e0;
          margin-top: 20px;
          padding: 20px;
          width: 250px;
          cursor: pointer;
          margin-right: 20px;
          transition: all ease-in-out .3s;
          h2{
            margin-bottom: 15px;
            font-size: 16px;
          }
          span{
            font-size: 14px;
            color: #757575;
            display: block;
            margin-bottom: 10px;
          }
          .edit{
            text-align: right;
            color: #ac0825;
            font-size: 14px;
            visibility: hidden;
            cursor: pointer;
          }
        }
        .addressCard:hover{
          border-color: #b1b0b0;
        }
        .addressCard:hover .edit{
          visibility: visible;
        }
        .addNew{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: rgba(224, 224, 224, 0.56);
          i{
            font-size: 50px;
          }
          span{
            margin-top: 10px;
            color: rgba(224, 224, 224, 0.71);
            transition:  all ease-in-out .3s;
          }
        }
        .addNew:hover,
        .addNew:hover span{
          color: #b1b0b0;
        }
      }
    }
    .item{
      /*height: 100px;*/
      .itemTab{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        .items1{
          display: flex;
          align-items: center;
          img{
            width: 50px;
          }
        }
        div:last-of-type{
          color: #ac0825;
        }
      }
    }
    .delivery{
      span:last-of-type{
        margin-left: 20px;
        color: #ac0825;
        font-size: 14px;
      }
    }
    .total{
      .totalTab{
        margin-top: 20px;
        text-align: right;
        /*display: flex;*/
        /*flex-direction: column;*/
        li{
          padding: 5px 0;
          span{
            /*padding: 0 10px;*/
            width: 100px;
            display: inline-block;
            text-align: right;
          }
          span:first-of-type{
            color: #757575;
            font-size: 16px;
          }
          span:last-of-type{
            color: #ac0825;
          }
        }
        li:last-of-type{
          margin-top: 10px;
          span:last-of-type{
            font-size: 25px;
          }
        }
      }
      .button{
        /*width: 100%;*/
        text-align: right;
        margin-top: 40px;
        div{
          width: 200px;
          height: 50px;
          /*background-color: pink;*/
          display: inline-block;
          text-align: center;
          line-height: 50px;
          cursor: pointer;
          transition: all ease-in-out .3s;
        }
        .back{
          background-color: white;
          border: 1px solid #e0e0e0;
          color: #e0e0e0;
          margin-right: 30px;
        }
        .back:hover{
          border-color: #bbb9b9;
          color: #bbb9b9;
        }
        .go{
          background-color: #ac0825;
          color: white;
        }
        .go:hover{
          background-color: rgba(134, 7, 32, 0.88);
        }

      }
    }
  }
</style>
