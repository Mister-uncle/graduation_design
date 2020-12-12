<template>
    <div>
      <div class="recommend">
        <div class="recomTitle">
          <div class="recomLine"></div>
          <span class="title">买购物车中商品的人还买了</span>
        </div>
      </div>

      <div class="recomGoods">
        <ul>
          <li>
            <img src="./image/li2.jpg" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li3.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li4.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li5.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li6.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li7.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li8.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li9.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li10.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
          <li>
            <img src="./image/li11.png" alt="">
            <span>手机USB micro数据线</span>
            <span>9.9元</span>
            <div>加入购物车</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BuySuccess"
    }
</script>

<style scoped lang="less">
  .recommend{
    width: 100%;
    /*height: 1000px;*/
    /*background-color: rgba(186, 167, 134, 0.31);*/
    margin-top: 20px;
    padding: 20px 0;
    /*overflow: auto;*/
    .recomTitle{
      /*display: flex;*/
      width: 96%;
      margin: 0 auto;
      position: relative;
      text-align: center;

      span.title{
        text-align: center;
        transform: translate(-50%,0);
        font-size: 30px;
        color: #757575;
        background-color:white;
        margin: 10px auto;
        padding: 0 50px;
        position: absolute;
      }
      .recomLine{
        width: 100%;
        height: 10px;
        position: absolute;
        top: 10px;
        border-bottom: 1px solid rgba(131, 131, 131, 0.12);
      }
    }
  }
  .recomGoods{
    width: 96%;
    margin: 100px auto;
    /*background-color: pink;*/
    /*height: 100px;*/
    ul {
      display: flex;
      justify-content: center;
      width: 100%;
      /*background-color: orange;*/
      overflow: hidden;
      padding: 10px 0;
      flex-wrap: wrap;
      li{
        /*height: 150px;*/
        width: 19%;
        margin-right: 1%;
        box-shadow: 1px 1px 5px #cdcbcb;
        text-align: center;
        position: relative;
        margin-bottom: 20px;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-in-out .3s;
        img{
          width: 100%;
        }
        span{
          display: block;
          margin-bottom: 15px;
          font-size: 14px;
          color: #333333;
        }
        span:last-of-type{
          color: #ac0825;
          margin-bottom: 50px;
        }
        div{
          width: 50%;
          height: 30px;
          /*background-color: pink;*/
          position: absolute;
          left: 50%;
          transform: translate(-50%,0);
          line-height: 30px;
          border: 1px solid #ac0825;
          color: #ac0825;
          bottom: -32px;
          /*display: none;*/
          transition: all ease-in-out 0.3s;
          font-size: 14px;
          cursor: pointer;
        }
      }
      li:hover div{
        bottom: 10px;
      }
      li:hover{
        box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.32);
      }
      div:hover{
        background-color: #ac0825;
        color: white;
      }
    }
  }
</style>
