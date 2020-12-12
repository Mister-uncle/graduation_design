<template>
    <div>

      <home-top></home-top>

      <div class="success">
        <div class="succTips">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
          <div class="succMes">
            <span>已成功加入购物车！</span>
            <span>Redmi Note 9 Pro 5G 8GB+256G 碧海星辰</span>
          </div>
        </div>
        <div class="succButton">
          <div @click="$router.push('list')">返回上一级</div>
          <div @click="$router.push('cart')">去购物车结算</div>
        </div>
      </div>


      <buy-success></buy-success>



      <nav-footer></nav-footer>

    </div>
</template>

<script>
  import HomeTop from "../../components/HomeTop"
  import NavFooter from "../../components/NavFooter";
  import BuySuccess from "../../components/BuySuccess";

    export default {
        name: "ListToVehicle",
      components:{
        HomeTop,
        NavFooter,
        BuySuccess
      },

    }
</script>

<style scoped lang="less">
  .success{
    width: 96%;
    /*height: 300px;*/
    margin: 0 auto;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(131, 131, 131, 0.12);
    .succTips{
      display: flex;
      align-items: center;
      i{
        float: left;
        font-size: 100px;
        color: #83c34d;
      }
      .succMes{
        float: left;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-left: 20px;
        span{
          display: block;
          width: 100%;
          margin-top: 10px;
          /*float: left;*/

        }
        span:first-of-type{
          font-size: 24px;
        }
        span:last-of-type{
          color: #7f7f7f;
        }
      }
    }
    .succButton{
      display: flex;
      /*background-color: pink;*/
      /*width: 100%;*/
      justify-content: right;
      div{
        width: 200px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
      div:first-of-type{
        color: rgba(131, 131, 131, 0.4);
        border: 1px solid rgba(131, 131, 131, 0.4);
        transition: all ease-in-out .3s;
        cursor: pointer;
        margin-right: 15px;
      }
      div:first-of-type:hover{
        color: #7f7f7f;
        border: 1px solid #7f7f7f;
      }
      div:last-of-type{
        color: white;
        background-color: #ac0825;
        cursor: pointer;
        transition: all ease-in-out .3s;
      }
      div:last-of-type:hover{
        background-color: #900921;
      }
    }

  }
</style>
