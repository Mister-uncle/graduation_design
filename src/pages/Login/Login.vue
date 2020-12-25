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

<!--          //密码登录-->

          <div class="loginCDR">
            <div
              :class="{passwordLogined:passwordLoginShow}"
              class="form passwordLogin" >
              <input type="text" placeholder="请输入账号">
              <input type="password" placeholder="请输入密码">
              <div class="maskInput">
                <input  type="text"
                        v-model="svgCode"
                        placeholder="请输入验证码">
                <div>
                  <img
                    ref="captcha"
                    @click.prevent="getCaptcha()"
                    :src="getSvgCaptcha" alt="">
                </div>
              </div>
              <a
                @click.prevent="phoneLoginToggle"
                href="javascript:">
                短信验证码登录
              </a>
              <a href="javascript:">
                <div class="button"
                     @click.prevent="pwdLogin"
                >登录</div>
              </a>
            </div>

<!--邮箱登录-->

            <div
              :class="{phoneLogined:phoneLoginShow}"
              class="form phoneLogin">
              <label>
                <input type="text"
                       v-model="mail"
                       placeholder="请输入邮箱地址">
                <div :class="{
                  phone_right:mailRight,
                  current:!sendMaskAgain}"
                  @click.prevent="sendMasked(true)"
                >获取验证码</div>
                <div class="reSend"
                     :class="{current:sendMaskAgain}"
                     v-if="countDown !== 0"
                >重新发送（ {{countDown}} s）</div>
                <div class="reSendAgain"
                     :class="{current:reSendAgain}"
                     v-else
                     @click.prevent="sendMasked"
                >重新发送</div>
              </label>
              <label >
                <input
                  type="password"
                  v-model="mailCode"
                  placeholder="请输入邮箱验证码">
              </label>
              <div class="maskInput">
                <input  type="text"
                        v-model="svgCode"
                        placeholder="请输入验证码">
                <div >
                  <img
                    ref="captcha"
                    @click.prevent="getCaptcha()"
                    :src="getSvgCaptcha" alt="">
                </div>
              </div>
              <a
                @click.prevent="passwordLoginToggle"
                href="javascript:">
                密码登录
              </a>
              <a href="javascript:">
                <div class="button" @click.prevent="mailLogin">登录</div>
              </a>
            </div>

            <div class="formBot">
              <div>
                <a href="javascript:" @click.prevent="swichTo('/register')">注册</a>
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
            phoneLoginShow:false,
            passwordLoginShow:false,
            sendMaskAgain:true,//重新发送（59）s默认隐藏
            reSendAgain:true,//重新发送默认隐藏
            mail:'',
            mailCode:'',
            svgCode:'',
            countDown:0,
            passMask:'',
            password:'',
            getSvgCaptcha:''
          }
      },
      methods:{
        // 路径跳转
        swichTo(path){
          this.$router.replace('register')
        },
        // 验证码
        async sendMasked(flag){
          if(this.mailRight && this.mail !== ''){
            this.sendMaskAgain = !flag
            this.countDown = 60
            this.intervalId = setInterval(() => {
              this.countDown --
              if(this.countDown === 0){
                clearInterval(this.intervalId)
                this.reSendAgain = false
              }
            },1000);

           const {data:res} = await this.$http.get('api/send_mail'+'?mail='+this.mail)
            if(res.success_code === 200){
              this.$notify.success({
                title: '成功',
                message: '邮箱发送成功！',
                showClose: false
              });
            }else {
              this.$notify.error({
                title: '错误',
                message: '邮箱发送失败！',
                showClose: false
              });
              this.countDown = 0
              clearInterval(this.intervalId)
            }
            console.log(res)
          }else {
            this.$message({
              showClose: true,
              message: '请输入正确的邮箱地址！',
              type: 'error'
            });
          }
        },
        phoneLoginToggle(){
          this.phoneLoginShow = true
          this.passwordLoginShow = true
        },
        passwordLoginToggle(){
          this.phoneLoginShow = false
          this.passwordLoginShow = false
        },
// 获取验证码
        async getCaptcha(){
          this.getSvgCaptcha = 'http://localhost:3000/api/captcha?time=' + new Date();

          // const {data:res} = await this.$http.get('http://localhost:3000/api/captcha?time=' + new Date())
          // console.log(res)
        },

        //邮箱验证码登录
        async mailLogin(){
          console.log(this.mail)
          console.log(this.mailCode)
          console.log(this.svgCode)
          const {data:res} = await this.$http.post('api/login_mail',{
            mail:this.mail,
            code:this.mailCode,
            svgCode:this.svgCode
          })

          console.log(res)

        },
        //账号密码登录
        pwdLogin(){

        },
// 邮箱验证
        mailRight(){
          let reg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/
          if(reg.test(this.mail)){
            return true
          } else {
            this.$message({
              showClose: true,
              message: '请输入正确的邮箱地址！',
              type: 'error'
            });
            return false
          }
        },
        // 验证码验证
        svgRight(){
          if(this.svgCode === ''){
            this.$message({
              showClose: true,
              message: '请输入正确的验证码！',
              type: 'error'
            });
            this.getCaptcha()
            return false;
          }
          return true

        },
        // 邮箱验证码验证
        mailCodeRight(){
          // console.log(this.mailCode.length)
          if(this.mailCode === '' ){
            this.$message({
              showClose: true,
              message: '请输入正确的邮箱验证码！',
              type: 'error'
            });
            return false;
          }
          return true

        }
      },
      created() {
        this.getCaptcha()
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
        position: relative;
        .passwordLogin{
          /*display: none;*/
          opacity: 1;
          transition: all ease-in-out .5s;
        }
        .passwordLogined{
          opacity: 0;
        }
        .phoneLogin{
          position: absolute;
          opacity: 0;
          /*display: none;*/
          /*left: 0;*/
          transition: left ease-in-out .3s;
        }
        .phoneLogined{
          left: 0;
          opacity: 1;
          /*display: block;*/
          padding: 0 40px ;

        }
        .current{
          display: none;
        }
        .phoneLogin{
          label:first-of-type{
            position: relative;
            div{
              position: absolute;
              top: 15px;
              right: -180px;
              color: rgba(0, 125, 255, 0.45);
              /*border: 1px solid #757575;*/
            }
            .reSend{
              color: rgba(0, 125, 255, 0.47);
              cursor: default;
            }
            .reSendAgain{
              color: rgba(0, 125, 255, 0.91);
              cursor: pointer;
            }
            .phone_right{
              color: rgba(0, 125, 255, 0.93);
              cursor: pointer;
            }
            .current{
              display: none;
            }
          }
        }
        .form{
          display: inline-block;
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
          .maskInput{
            position: relative;
            input{
              width: 175px;
            }
            div{
              position: absolute;
              top: 0;
              right: 0;
              /*background-color: pink;*/
              width: 160px;
              height: 50px;
              border-radius: 10px;
              cursor: pointer;
            }
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
