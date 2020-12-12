<template>
    <div>
      <div class="top">
        <div class="topContent">
          <div>
            <img src="./image/logo.png" alt="" @click="$router.push('index')">
            <span>{{top.title}}</span>
            <em>{{top.message}}</em>
          </div>

          <div class="personTag">
          <span>However &nbsp;
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
            &nbsp;
            |
            &nbsp;
            <span @click="$router.push('person')">我的订单</span>
            <div class="personDrop">
              <i class="fa fa-caret-up" aria-hidden="true"></i>
              <ul>
                <li @click="$router.push('person/user')">个人中心</li>
                <li @click="$router.push('person/user')">评价晒单</li>
                <li @click="$router.push('person/user')">我的喜欢</li>
                <li @click="$router.push('person/info')">我的账户</li>
                <li @click="$router.push('login')">退出登录</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "BuyTop",
      props:{
        top:Object
      }
    }
</script>

<style scoped lang="less">
  .top{
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    /*background-color: pink;*/
    border-bottom: 2px solid #ac0825;
    .topContent{
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:first-of-type{
        display: flex;
        align-items: center;
        img{
          cursor: pointer;
        }
        span{
          font-size: 26px;
          margin:0 20px;
          color: #424242;
        }
        em{
          color: #333333;
          font-size: 14px;
        }
      }
      .personTag{
        margin-left: 20px;
        font-size: 12px;
        position: relative;

        span{
          color: #757575;
          font-size: 12px;
          cursor: pointer;
          transition: all ease-in-out .3s;
          padding: 8px 0;
        }
        span:hover{
          color: #ac0825;
        }

        .personDrop{
          width: 87px;
          height: 150px;
          background-color: white;
          position: absolute;
          top: 20px;
          left: 0;
          box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
        ;
          display: none;
          transition: all ease-in-out .3s;
          i{
            position: absolute;
            top: -9px;
            left: 46%;
            color: white;
          }
          li{
            /*margin: 15px auto;*/
            cursor: pointer;
            width: 87px;
            text-align: center;
            box-sizing: content-box;
            padding: 8px 0;
          }
          li:hover{
            background-color: rgba(226, 224, 224, 0.42);
            color: #ac0825;
          }
        }
        span:first-of-type:hover ~ .personDrop,
        .personDrop:hover{
          display: block;
        }
      }
    }
  }
</style>
