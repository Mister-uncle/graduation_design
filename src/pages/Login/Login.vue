<template>
<!--  <NavTitle></NavTitle>-->
    <div id="login">
      <nav-title></nav-title>

      <div class="loginContent">
        <div class="loginCTop">
          <span>账号登录</span>
        </div>
        <div class="loginCDown">
          <div class="loginCDL">
            <img src="../../../static/img/mask.png" height="205" width="205"/>
            <span>若您使用手机，请进入扫码登录。</span>
          </div>
          <div class="loginCDC">

          </div>
          <div class="loginCDR">
            <div class="form">
              <input type="text" placeholder="邮箱地址/手机号">
              <input type="password" placeholder="密码">
              <a href="javascript:">
                短信验证码登录
              </a>
              <a href="javascript:">
                <div class="button">登录</div>
              </a>
            </div>
            <div class="formBot">
              <div>
                <a href="javascript:" @click="swichTo('/register')">注册</a>
                <span>|</span>
                <a href="javascript:">忘记密码</a>
                <span>|</span>
                <a href="javascript:">遇到问题</a>
              </div>
              <div class="threeLogin">
                <div >
                  <a href="javascript:">
                    <i class="fa fa-qq" aria-hidden="true"></i>
                  </a>
                  <a href="javascript:">
                    <i class="fa fa-weixin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav-foot></nav-foot>
    </div>
</template>

<script>
  import NavTitle from "../../components/NavTitle";
  import NavFoot from "../../components/NavFoot";

    export default {
      name: "Login",
      components:{
        NavTitle,
        NavFoot,

      },
      data(){
          return{

          }
      },
      methods:{
        swichTo(path){
          this.$router.replace('register')
        }

      },
      created() {
      },
      mounted() {

      },
      computed:{

      }
    }
</script>

<style scoped  lang="less">

  .loginContent{
    height: 100%;
    width: 100%;
    min-width: 900px;
    /*background-color: orange;*/
    text-align: center;
    .loginCTop{
      height: 250px;
      /*background-color: pink;*/
      line-height: 250px;
      font-size: 200%;
    }
    .loginCDown{
      display: flex;
      justify-content: center;
      .loginCDL{
        /*border-right: 1px solid rgba(0,0,0,0.1);;*/
        padding: 0 128px ;
        span{
          display: block;
          font-size: 12px;
          color: #838383;
          margin-top: 60px;
        }
      }
      .loginCDC{
        height: 300px;
        background-color:rgba(0,0,0,0.1) ;
        width: 2px;
        margin: 0 50px;
      }
      .loginCDR{
        text-align: center;
        padding: 0 40px;
        margin-right: 0;
        .form{
          input{
            display: block;
            margin-bottom: 30px;
            width: 350px;
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
            width: 380px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #c8141e;
            color: white;
            font-size: 18px;
            font-weight: bolder;
            border: none;
            border-radius: 10px;

          }
        }
        .formBot{
          /*display: flex;*/
          /*flex-wrap: wrap;*/
          margin-top: 20px;
          /*justify-content: flex-end;*/
          /*width: 300px;*/
          margin-right: 0;
          div{
            /*width: 98px;*/
            margin-top: 20px;
            span{
              margin: 0 10px;
            }
            a{
              color: #007DFF;
            }
          }
          .threeLogin{
            padding: 10px;
            height: 100px;
            vertical-align: center;
            a {
              padding: 10px 12px ;
              /*height: 10px;*/
              /*width: 20px;*/
              background-color: #838383;
              border-radius: 50%;
              margin: 0 10px;
              /*height: 20px;*/
              /*width: 20px;*/
              transition: all ease-in-out 0.3s;
              i{
                /*margin: 0 5px;*/
                /*background-color: #838383;*/
                color: white;
              }
            }
            a:first-of-type:hover{
              background-color: #506a7e;
            }
            a:last-of-type:hover{
              background-color: #47cc47;
            }
          }





          .threeLogin .fa-qq:hover{
            /*background-color: ;*/
          }
        }

      }

    }
  }
</style>
