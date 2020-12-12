<template>
  <div class="user">
    <div class="top">
      <div>
        <img src="static/img/head.jpg" alt="">
      </div>
      <div>
        <h1>However°</h1>
        <span>晚上好~</span>
        <em>修改个人信息</em>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <i class="fa fa-address-card-o faB" aria-hidden="true"></i>
          <div>
            <span>
            待支付的订单: &nbsp;<em>0</em>
          </span>
            <span>
              查看待支付订单
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

        </li>
        <li>
          <i class="fa fa-truck faB" aria-hidden="true"></i>
          <div>
            <span>
            待收货的订单: &nbsp;<em>0</em>
          </span>
            <span>
              查看待收货订单
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

        </li>
        <li class="mt">
          <i class="fa fa-comments faB" aria-hidden="true"></i>
          <div>
            <span>
            待评价商品数: &nbsp;<em>0</em>
          </span>
            <span>
              查看待评价商品
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

        </li>
        <li class="mt">
          <i class="fa fa-heart-o faB" aria-hidden="true"></i>
          <div>
            <span>
            喜欢的商品: &nbsp;<em>0</em>
          </span>
            <span>
              查看喜欢的商品
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped lang="less">
  .user{
    width: 100%;
    height: 100%;
    /*background-color: pink;*/
    .top{
      display: flex;
      justify-content: left;
      align-items: center;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 50px;
      div:first-of-type{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        line-height: 200px;
        margin-right: 20px;
        img{
          width: 100px;
          background-size: 100%;
          transform: scale(2);
          margin-top: 20px;
          /*height: 50px;*/
        }
      }
      div:last-of-type{
        h1{
          font-size: 20px;
        }
        span{
          display: block;
          margin: 10px 0;
          color: #757575;
          font-size: 14px;
        }
        em{
          font-size: 10px;
          color: #ac0825;
        }
      }
    }
    .bottom{
      margin-top: 50px;
      ul{
        display: flex;
        justify-content:left;
        flex-wrap: wrap;
        li{
          width: 40%;
          display: flex;
          align-items: center;
          .faB{
            font-size: 300%;
            min-width: 100px;
            min-height: 100px;
            text-align: center;
            line-height: 100px;
            border-radius: 50%;
            color: white;
            margin-right: 15px;
          }
          .fa-address-card-o{

            background-color: #fd660a;

          }
          .fa-truck{
            background-color: #8ac14a;
          }
          .fa-comments{
            background-color: #2195f2;
          }
          .fa-heart-o{
            background-color: #fdaa01;
          }
          div{
            span{
              display: block;
              margin-top: 10px;
              color: #757575;
              em{
                color: #ac0825;
              }
            }
            span:last-of-type{
              font-size: 14px;
            }
          }
        }
        li:nth-child(2n+1){
          margin-right: 5%;
        }
        li.mt{
          margin-top: 50px;
        }
      }
    }
  }
</style>
