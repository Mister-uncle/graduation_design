<template>
  <div>
    <div class="address confirm">
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "Address"
    }
</script>

<style scoped lang="less">
  .address{
    font-size: 24px;

    .addressTab{
      display: flex;
      justify-content: left;
      margin-top: 20px;
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
</style>
