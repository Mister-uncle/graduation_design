<template>
  <div>

    <buy-top
      :top="top"
    ></buy-top>

    <div class="goods">
      <div class="goodsTitle">
          <div class="checkBox">
            <input type="checkbox">
          </div>
          <div class="allChoose">全选</div>
          <div class="name">商品名称</div>
          <div class="price">单价</div>
          <div class="number">数量</div>
          <div class="tatal">小计</div>
          <div class="operation">操作</div>
      </div>
      <ul>
        <li>
          <div class="checkBox">
            <input type="checkbox">
          </div>
          <div class="allChoose"></div>
          <div class="name">
            <img src="./img/li1.jpg" alt="">
            <span>
HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
          </div>
          <div class="price">1999元</div>
          <div class="number">
            <input type="text" value="-" disabled>
            <input type="text" value="1">
            <input type="text" value="+" disabled>
          </div>
          <div class="tatal">1999元</div>
          <div class="operation">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </li>
        <li>
          <div class="checkBox">
            <input type="checkbox">
          </div>
          <div class="allChoose"></div>
          <div class="name">
            <img src="./img/li1.jpg" alt="">
            <span>
HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
          </div>
          <div class="price">1999元</div>
          <div class="number">
            <input type="text" value="-" disabled>
            <input type="text" value="1">
            <input type="text" value="+" disabled>
          </div>
          <div class="tatal">1999元</div>
          <div class="operation">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </li>
        <li>
          <div class="checkBox">
            <input type="checkbox">
          </div>
          <div class="allChoose"></div>
          <div class="name">
            <img src="./img/li1.jpg" alt="">
            <span>
HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
          </div>
          <div class="price">1999元</div>
          <div class="number">
            <input type="text" value="-" disabled>
            <input type="text" value="1">
            <input type="text" value="+" disabled>
          </div>
          <div class="tatal">1999元</div>
          <div class="operation">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </li>
        <li>
          <div class="checkBox">
            <input type="checkbox">
          </div>
          <div class="allChoose"></div>
          <div class="name">
            <img src="./img/li1.jpg" alt="">
            <span>
HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
          </div>
          <div class="price">1999元</div>
          <div class="number">
            <input type="text" value="-" disabled>
            <input type="text" value="1">
            <input type="text" value="+" disabled>
          </div>
          <div class="tatal">1999元</div>
          <div class="operation">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </li>
        <li>
          <div class="checkBox">
            <input type="checkbox">
          </div>
          <div class="allChoose"></div>
          <div class="name">
            <img src="./img/li1.jpg" alt="">
            <span>
HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
          </div>
          <div class="price">1999元</div>
          <div class="number">
            <input type="text" value="-" disabled>
            <input type="text" value="1">
            <input type="text" value="+" disabled>
          </div>
          <div class="tatal">1999元</div>
          <div class="operation">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </li>
      </ul>
    </div>

    <div class="counter">
      <div class="counLeft">
        <span>继续购物 </span>
        <span> 共计 <em>3</em> 件商品,</span>
        <span>已选择 <em>3</em> 件</span>
      </div>
      <div class="counRight">
        <span>合计: <em>1897</em>元 </span>
        <div class="button" @click="$router.push('checkout')">去结算</div>
      </div>
    </div>

    <buy-success></buy-success>

    <nav-footer></nav-footer>

  </div>

</template>

<script>
  import BuySuccess from "../../components/BuySuccess";
  import NavFooter from "../../components/NavFooter";
  import BuyTop from "../../components/BuyTop";

    export default {
        name: "Cart",
      components:{
        BuySuccess,
        NavFooter,
        BuyTop
      },
      data(){
          return{
            top:{
              title:'我的购物车',
              message:'温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算'
            }
          }
      },
    }
</script>

<style scoped lang="less">

  .goods{
    width: 80%;
    background-color: white;
    /*height: 300px;*/
    margin: 45px auto;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
  ;
    .goodsTitle,ul li{
      width: 100%;
      height: 50px;
      border-bottom: 1px solid rgba(131, 131, 131, 0.13);
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 14px;
        div{
          text-align: center;
          color: #424242;
        }
        .checkBox{
          flex: 1;
          text-align: right;
          input{
            height: 20px;
            width: 20px;
            margin-right: 10px;
            position: relative;
            color: white;
          }
          input::after{
            position: absolute;
            top: 0;
            width: 20px;
            height: 20px;
            display: inline-block;
            visibility: visible;
            padding-left: 0;
            text-align: center;
            content: ' ';
            border-radius: 3px;
            line-height: 20px;
          }
          input:checked::after{
            content: '√';
            font-size: 18px;
            font-weight: bolder;
            background-color: #ac0825;
          }
        }
        .allChoose{
          flex: 1;
          text-align: left;
        }
        .name{
          flex: 5;
          min-width: 450px;

        }
        .price{
          flex: 2;
        }
        .number{
          flex: 3;
          min-width: 130px;

        }
        .tatal{
          flex: 2;
        }
        .operation{
          flex: 2;
        }
    }
    .goodsTitle .checkBox input{
      margin-top: 20px;
    }

    ul{
      li{
        font-size: 16px;
        height: 150px;
      }
      .name{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          height: 100px;
        }
      }
      .number{
        position: relative;
        input{
          width: 30px;
          text-align: center;
          outline: none;
          border: 2px solid #333333;
          height: 20px;
          display: inline-block;

        }
        input:nth-child(2n){
          border-right: none;
          border-left: none;
        }
        input:nth-child(2n+1){
          width: 20px;
          cursor: pointer;
        }
        input:nth-child(2n+1):hover{
          background-color: rgba(217, 215, 215, 0.38);
        }
        input:first-of-type{
          margin-right: -5px;
          border-right: none;
        }
        input:last-of-type{
          margin-left: -5px;
          border-left: none;
        }
      }
      .operation i{
        cursor: pointer;
        height: 20px;
        width: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        transition: all ease-in-out .3s;
      }
      .operation i:hover{
        background-color: #ac0825;
        color: white;
      }
    }
  }

  .counter{
    width: 80%;
    background-color: white;
    height: 100px;
    margin: 45px auto;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .counLeft{
      margin-left: 30px;
      span:first-of-type{
        margin: 0 10px;
        cursor: pointer;
        transition: all ease-in-out .3s;
      }
      span:first-of-type:hover{
        color: #ac0825;
      }
      span em{
        color: #ac0825;
      }
    }
    .counRight{
      margin-right: 30px;
      display: flex;
      justify-content: right;
      align-items: center;
      span{
        margin-right: 50px;
        color: #ac0825;
        em{
          font-size: 24px;
        }
      }
      div.button{
        width: 300px;
        background-color: #ac0825;
        color: white;
        text-align: center;
        font-size: 24px;
        line-height: 60px;
        cursor: pointer;
      }
      div.button:hover{
        background-color: #950721;

      }
    }
  }
</style>












