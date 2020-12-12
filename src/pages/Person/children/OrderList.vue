<template>
  <div>
    <div class="top">
      <span>我的订单</span>
      <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
    </div>
    <div class="title">
      <div class="titleSearch">
        <div style="margin-top: 30px;">
          <el-input placeholder="输入商品名称、订单号" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="listTop">
        <div class="topL">
          <div>
            <span>等待付款</span>
          </div>
          <div>
            <span>2020年12月12日 21:06</span> &nbsp;|&nbsp;
            <span>陈家松</span> &nbsp;|&nbsp;
            <span>订单号: 5201212450414580</span> &nbsp;|&nbsp;
            <span>在线支付</span>
          </div>
        </div>
        <div class="topR">
          <span>应付金额: &nbsp</span>
          <span>2099.00元</span>
        </div>
      </div>

      <div class="listBottom">
        <div class="botL">
          <img src="../../Phone/img/li1.jpg" alt="">
          <div>
            <span>HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
            <span>1999元 x 1</span>
          </div>
        </div>
        <div class="botR">
          <div class="btn">立即付款</div>
          <div class="btn">订单详情</div>
          <div class="btn">联系客服</div>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="listTop">
        <div class="topL">
          <div>
            <span>等待付款</span>
          </div>
          <div>
            <span>2020年12月12日 21:06</span> &nbsp;|&nbsp;
            <span>陈家松</span> &nbsp;|&nbsp;
            <span>订单号: 5201212450414580</span> &nbsp;|&nbsp;
            <span>在线支付</span>
          </div>
        </div>
        <div class="topR">
          <span>应付金额: &nbsp</span>
          <span>2099.00元</span>
        </div>
      </div>

      <div class="listBottom">
        <div class="botL">
          <img src="../../Phone/img/li1.jpg" alt="">
          <div>
            <span>HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
            <span>1999元 x 1</span>
          </div>
        </div>
        <div class="botR">
          <div class="btn">立即付款</div>
          <div class="btn">订单详情</div>
          <div class="btn">联系客服</div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="listTop">
        <div class="topL">
          <div>
            <span>等待付款</span>
          </div>
          <div>
            <span>2020年12月12日 21:06</span> &nbsp;|&nbsp;
            <span>陈家松</span> &nbsp;|&nbsp;
            <span>订单号: 5201212450414580</span> &nbsp;|&nbsp;
            <span>在线支付</span>
          </div>
        </div>
        <div class="topR">
          <span>应付金额: &nbsp</span>
          <span>2099.00元</span>
        </div>
      </div>

      <div class="listBottom">
        <div class="botL">
          <img src="../../Phone/img/li1.jpg" alt="">
          <div>
            <span>HUAWEI MATE Pro 5G 8GB+256G 碧海星辰</span>
            <span>1999元 x 1</span>
          </div>
        </div>
        <div class="botR">
          <div class="btn">立即付款</div>
          <div class="btn">订单详情</div>
          <div class="btn">联系客服</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderList",
      data(){
          return{
            input3:''
          }
      }
    }
</script>

<style scoped lang="less">
  .top{
    color: #757575;

    span:first-of-type{
      font-size: 30px;
      margin-right: 5px;
    }
    span:last-of-type{
      font-size: 14px;
    }
  }
  .title{
    width: 300px;
    /deep/.el-input__inner{
      height: 35px;
    }
    /deep/.el-input__inner:focus{
      border-color: #ac0825 !important;
    }
  }
  .list{
    border: 1px solid #ac0825;
    margin-top: 30px;
    .listTop{
      padding: 20px;
      background-color: rgba(248, 229, 232, 0.16);
      border-bottom: 1px solid rgba(238, 215, 219, 0.78);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .topL{
        div:first-of-type{
          span{
            color: #ac0825;
            font-size: 20px;
            margin-bottom: 20px;
            display: inline-block;
          }
        }
        div:last-of-type{
          color: #e0e0e0;
          font-size: 14px;
          span{
            color: #757575;
          }
        }
      }
      .topR{
        span:first-of-type{
          color: #757575;
          font-size: 14px;
        }
        span:last-of-type{
          color: #ac0825;
          font-size: 24px;
        }
      }

    }
    .listBottom{
      padding: 20px;
      display: flex;
      justify-content: space-between;
      .botL{
        display: flex;
        align-items: center;
        img{
          width: 100px;
        }
        div{
          color: black;
          font-weight: lighter;
          font-size: 14px;
          span{
            display: block;
            margin-top: 8px;
          }
        }
      }
      .botR{
        div.btn{
          width: 120px;
          height: 25px;
          background-color: white;
          border: 1px solid #e0e0e0;
          margin-top: 10px;
          line-height: 25px;
          text-align: center;
          color: #757575;
          font-size: 12px;
          cursor: pointer;
          transition: all ease-in-out .3s;
        }
        div:first-of-type{
          background-color: #ac0825;
          color: white;
        }
      }
    }
  }

</style>
