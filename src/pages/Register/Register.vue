<template>
  <div>
    <nav-title></nav-title>

    <div class="contentTop">
      <span>用户账号注册</span>
      <span>已有账号，
          <a href="javascript:" @click="$router.replace('login')">去登录 > </a>
          </span>
    </div>

    <div class="content">

        <div class="form">
          <label>
            <input type="text" placeholder="请输入手机号">
          </label>
          <label>
            <input type="text" placeholder="短信验证码">
          </label>
          <label>
            <input type="password" placeholder="密码">
          </label>
          <label>
            <input type="password" placeholder="确认密码">
          </label>
          <label>
            <input type="date">
          </label>

          <div class="re_main_regist_bot">
            <input type="checkbox"  class="re_check">
            我已阅读并同意
            <a href="javascript:">《用户协议》</a>
            <a href="javascript:">《隐私条款》</a>
          </div>

          <a href="javascript:">
            <div class="button">注册</div>
          </a>


        </div>

      </div>


    <nav-foot></nav-foot>

  </div>

</template>

<script>
  import NavTitle from "../../components/NavTitle";
  import NavFoot from "../../components/NavFoot";

    export default {
        name: "Register",
      components:{
        NavTitle,
        NavFoot
      }
    }
</script>

<style scoped lang="less">
  .contentTop{
    text-align: center;
    margin: 60px 0 ;
    span{
      display: block;
      font-size: 18px;
    }
    span:first-of-type{
      font-size: 225%;
      margin: 0 0 20px;
    }
    span a{
      color: #007DFF;
    }
  }

  .content{
    text-align: center;
    /*padding: 0 0 0 20px;*/
    /*margin-right: 0;*/
    /*background-color: pink;*/
    display: flex;
    justify-content: center;
    .form{
      margin: 0 auto;

      label input{
        display: block;
        margin-bottom: 30px;
        width: 400px;
        height: 50px;
        background-color: #f0f0f1;
        border-radius: 10px;
        border: none;
        padding: 0 15px;
        font-size: 16px;
      }
      a{
        display: block;
        text-align: left;
        font-size: 16px;
        color: #007DFF;
      }
      .button{
        display: block;
        margin-top: 40px;
        width: 430px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgba(0, 125, 255, 0.34);
        color: white;
        font-size: 18px;
        font-weight: bolder;
        border: none;
        border-radius: 10px;

      }
      .re_main_regist_bot{
        text-align: left;
        font-size: 15px;

        a{
          display: inline;
          text-decoration: underline;
        }
        input{
          width: 15px;
          height: 15px;
          vertical-align: top;
          margin: 0 0 0 10px;
        }
      }

    }

  }
</style>
