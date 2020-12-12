<template>
  <div>
    <home-top></home-top>

    <div class="person">
      <div class="personNav">
        <div class="list">
          <span>订单中心</span>
          <ul>
            <li @click="$router.push('/person/orderlist')">我的订单</li>
          </ul>
        </div>

        <div class="list">
          <span>个人中心</span>
          <ul>
            <li @click="$router.push('/person/user')">我的个人中心</li>
            <li @click="$router.push('/person/address')">收货地址</li>
            <li>消息通知</li>
            <li>购买资格</li>
            <li>现金账户</li>
            <li>优惠券</li>
            <li>喜欢的商品</li>
            <li>红包</li>
          </ul>
        </div>
        <div class="list">
          <span>账户管理</span>
          <ul>
            <li @click="$router.push('/person/info')">个人信息</li>
            <li>修改密码</li>
          </ul>
        </div>
        <div class="list">
          <span>售后服务</span>
          <ul>
            <li>服务记录</li>
            <li>申请服务</li>
            <li>领取快递报销</li>
          </ul>
        </div>
      </div>
      <div class="personContent">

        <router-view></router-view>

      </div>
    </div>

    <nav-footer></nav-footer>
  </div>

</template>

<script>
  import NavTitle from "../../components/NavTitle";
  import NavFooter from "../../components/NavFooter";
  import HomeTop from "../../components/HomeTop";

    export default {
      name: "Person",
      components:{
        NavTitle,
        NavFooter,
        HomeTop
      },
    }
</script>

<style scoped lang="less">
  .person{
    width: 80%;
    margin: 50px auto;
    /*height: 500px;*/
    /*opacity: 0;*/
    /*background-color: orange;*/
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .personNav{
      width: 20%;
      /*height: 300px;*/
      margin-right: 1%;
      box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
      padding: 40px;
      box-sizing: border-box;
      max-height: 810px;
      .list{
        span{
          font-size: 16px;
          color: #333333;
          margin: 10px 0;
          display: inline-block;
        }
        li{
          margin: 20px 0;
          color: #757575;
          font-size: 14px;
          cursor: pointer;
          transition: all ease-in-out .3s;
        }
        li:hover{
          color: #ac0825;
        }
      }
    }
    .personContent{
      width:80%;
      padding: 40px;
      box-sizing: border-box;
      box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
      /*height: 100%;*/
    }
  }
</style>
