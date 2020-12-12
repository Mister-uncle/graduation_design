<template>
  <div id="phone">

    <home-top></home-top>

    <div class="phoneTab" :style="style">
      <div class="phoneBanner">
        <div class="phoneTabL">
          <span>{{phoneData.name}}</span>
        </div>
        <div class="phoneTabR">
          <a href="javascript:" class="active">功能特征</a>
          <a href="javascript:">规格参数</a>
          <a href="javascript:">服务支持</a>
          <a href="javascript:" @click="$router.push('list')">
            <i>购买</i>
          </a>
        </div>
      </div>
    </div>

    <div class="phoneContent1" >
      <img src="./img/phone1.png" ref="phoneContent1" />
      <div class="pC1AnimateC" >
        <span>HUAWEI Mate RS | 保 &nbsp; 时 &nbsp; 捷 &nbsp; 设 &nbsp; 计</span>
        <span>致 &nbsp; 敬 &nbsp; 时 &nbsp; 代</span>
      </div>
      <div class="pC1AnimateB">
        <span>{{phoneData.messageBottom.line1}}</span>
        <span>{{phoneData.messageBottom.line2}}</span>
      </div>
    </div>

    <div class="phoneConF clearfix">
      <div class="phoneContent2" :style="phoneContent2Style">
        <video
          ref="phoneContent2"
          autoplay="autoplay" muted loop="loop">
          <source src="./img/mi.mp4" type="video/mp4"/>
        </video>
        <div class="phoneContent2C">
          <div class="pC2CSuper">
            <div class="super">
              <span class="superl" :style="spanSuperL">超</span>
              <span class="superl" :style="spanSuperL">级</span>
              <span class="superr" :style="spanSuperR">壁</span>
              <span class="superr" :style="spanSuperR">纸</span>
            </div>
          </div>
          <div class="pC2CContent " :style="pC2CContent">
            <span>突破空间界限 于指尖触碰想象</span>
            <span>打破壁纸在息屏、锁屏、桌面的分隔</span>
            <span>和我们一起开启对人类家园的探索之旅</span>
          </div>
        </div>
      </div>

      <div class="phoneContent3 ">
        <div>
          <img src="./img/mi1.png" />
        </div>
        <div>
          <img src="./img/mi2.png" />
        </div>
        <div>
          <img src="./img/mi3.jpg"/>
        </div>
        <div>
          <img src="./img/mi4png.png" />
        </div>
        <div>
          <img src="./img/mi5.png" />
        </div>
      </div>

      <div class="phoneContentBot ">
        <span>触碰想象</span>
        <span>超级壁纸</span>
        <span>从息屏显示，到锁屏，再到手机桌面，每一个画面都变化成想象的</span>
        <span>空间。探寻火星表面，游览地球美景，在屏幕面前与想象相见。</span>
      </div>

      <div class="phoneContent4">
        <img src="./img/hua1.jpg" />
        <img src="./img/hua2.jpg" />
        <img src="./img/hua3.jpg" />
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
    name: "Phone",
    components:{
      NavTitle,
      NavFooter,
      HomeTop
    },
    data(){
      return {
        style:{
          position:'',
          // opacity: 1,

        },
        phoneContent2Style:{
          height:'',
          position:'',
          // top:0,

        },
        spanSuperL:{
          marginRight: '',
          opacity: 1,
        },
        spanSuperR:{
          marginLeft: '',
          opacity: 1,
        },
        pC2CContent:{
          marginTop:100,
          opacity:0,
        },
        phoneData:{
          name:'HUAWEI Mate 40 RS 保时捷设计',
          message:'',
          messageBottom:{
            line1:'画面示意产品均为 HUAWEI Mate 40 RS 保时捷设计 典藏版（12 GB+512 GB 版）',
            line2:'图片仅供参考，请以实物为准。',
          }
        }
      }
    },

    methods:{

    },
    mounted() {
      // this.$refs.phoneContent1.clientHeight

      window.addEventListener('scroll',(e) =>{
        let scrollTop = document.documentElement.scrollTop
        let scrolled = document.documentElement.scrollTop /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        // 视频框固定定位
        let phoneContent1H = this.$refs.phoneContent1.clientHeight
        let phoneContent2H = this.$refs.phoneContent2.clientHeight
        if( scrollTop > phoneContent1H ){
          this.phoneContent2Style.position = 'fixed'
          this.phoneContent2Style.top = 0
        } else {
          this.phoneContent2Style.position = ''
          this.phoneContent2Style.top = ''
          // console.log('2')
        }
        if(scrollTop > 1000){
          this.phoneContent2Style.position = ''
          this.phoneContent2Style.top = ''
          // console.log('yes')

        }

        console.log(scrolled)
        // 第一阶段 super 分开
        if(scrolled >= 0.14 && scrolled <= 0.47){
          console.log(1)
          this.spanSuperL.marginRight = (scrolled * 239) + 'px'
          this.spanSuperL.opacity = (0.5 - scrolled) * 2

          this.spanSuperR.marginLeft = (scrolled * 239) + 'px'
          this.spanSuperR.opacity = (0.5 - scrolled) * 2


          if(scrolled < 0.2){
            this.pC2CContent.marginTop = -scrolled * 50
          }
          this.pC2CContent.marginTop = -scrolled * 212 + 'px'
          if(scrolled < 0.2){
            this.pC2CContent.opacity = scrolled * 0.9
          }else {
            this.pC2CContent.opacity = scrolled * 2.13
          }

        }else if(scrolled >= 0.5 && scrolled < 0.78){
          console.log(2)
        }


        // 导航栏固定定位
        if(scrollTop > 84){
          this.style.position = 'fixed'
        }else {
          this.style.position = ''
        }




      })

      // 视频框高度撑满屏幕
      let scrollTop = document.documentElement.clientHeight
      this.phoneContent2Style.height = scrollTop + 'px'

    }

  }
</script>

<style scoped lang="less">

  .clearfix{
    width:300px;
    background-color:#f00;
  }
  .clearfix:after{
    content:"";
    display:block;
    clear:both;
  }

  .phoneTab{
    /*position: absolute;*/
    width: 100%;
    height: 84px;
    z-index: 110;
    top: 0px;
    line-height: 84px;
    background-color: #f3f3f4;
    /*position: fixed;*/
    .phoneBanner{
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      width: 96%;
      align-items: center;

      .phoneTabL{
        flex: 1;
        width: 150px;
        /*margin-left: 5%;*/
        span{
          font-weight: bolder;
        }
      }
      .phoneTabR{
        flex: 1;
        width: 200px;
        text-align: right;
        a{
          display: inline-block;
          margin:0 4%;
          color: #7f7f7f;
        }
        .active{
          color: black;
          font-weight: bolder;
        }
        a:last-of-type{
          color: white;
          font-weight: bolder;
          text-align: center;
          i{
            background-color: #ac0825;
            padding:5px 15px;
            border-radius: 15px;
            transition: all ease-in-out .3s;
          }
          i:hover{
            background-color: rgba(172, 8, 37, 0.66);
          }
        }
      }
    }
  }

  .phoneContent1{
    width: 100%;
    position: relative;
    img{
      width: 100%;
    }
    .pC1AnimateC{
      position: absolute;
      top: 40%;
      left: 10%;
      text-align: center;
      span{
        display: block;
        color: white;
        font-weight: bolder;
      }
      span:first-of-type{
        font-size: 200%;
        margin-bottom: 70px;
      }
      span:last-of-type{
        font-size: 300%;
      }
    }
    .pC1AnimateB{
      position: absolute;
      bottom: 30px;
      left: 10%;
      text-align: left;
      span{
        display: block;
        color: rgba(255, 255, 255, 0.38);
        font-size: 12px;
      }
    }
  }

  .phoneConF{
    width: 100%;
    /*height: 1000px;*/
    background-color: black;
    /*position: fixed;*/
    /*height: 100%;*/
    /*overflow: visible;*/

  }
  .phoneContent2{
    width: 100%;
    /*background-color: pink;*/
    /*overflow: hidden;*/
    /*height: 1000px;*/
    text-align: center;
    vertical-align: center;
    display: flex;
    align-items: center;
    /*position: fixed;*/
    /*top: 80px;*/
    /*position: absolute;*/
    /*top: 700px;*/
    position: relative;
    transition: all ease-in-out .3s;

    video{
      /*width: 100%;*/
      height: 100%;
      /*background-size: ;*/
    }
    .phoneContent2C{
      position: absolute;
      top: 40%;
      left: 50%;
      z-index: 999;
      color: #ffffff;
      transform: translate(-50%,-50%);
      .pC2CSuper{
        font-size: 550%;
        /*background-color: pink;*/
        width: 100%;
        margin: 0 auto;
        .super{
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          span {
            /*margin-right: 50px;*/
            opacity: 1;
            transition: all ease-in-out .3s;

          }
          span.superl{
            margin-left: 50px;
          }
          span.superr{
            margin-right: 50px;
          }
        }
      }
      .pC2CContent{
        position: absolute;

        /*background-color: pink;*/
        opacity: 0;
        top: 400%;
        left: 50%;
        transform: translate(-50%,-50%);
        margin: 0 auto;
        /*margin-top: 0;*/
        transition: all ease-in-out .3s;
        span{
          display: block;
          margin-bottom: 20px;
        }
        span:first-of-type{
          font-size: 400%;
          width: 1000px;
        }
        span:nth-of-type(2){
          font-size: 250%;
        }
        span:nth-of-type(3){
          font-size: 250%;
        }
      }
    }
  }
  .phoneContent3{
    margin-top: 0px;//动态绑定
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    /*overflow: hidden;*/
    /*position: fixed;*/
    /*top: -600px;*/
    /*bottom: 0;*/
    div:nth-child(odd){
      margin-top: -100px;
    }
    div:nth-child(even){
      margin-top: 100px;
    }

    img{
      width: 100%;
      z-index: 99;
    }
  }
  .phoneContentBot{
    /*background-color: pink;*/
    /*width: 100%;*/
    /*height: 100%;*/
    margin: 0 auto;
    color: whitesmoke;
    text-align: center;
    /*margin-top: 300px;*/
    span{
      display: block;
      color: rgba(255, 255, 255, 0.7);
      margin: 30px 0;
      font-size: 150%;
    }
    span:nth-child(2){
      font-size: 300%;
      color: white;
    }

    /*!*position: absolute;*!*/
    /*bottom: 0;*/

    /*left: 50%;*/
  }
  .phoneContent4{
    width: 100%;
    /*height: 1000px;*/
    background-color: black;
    img{
      width: 100%;
    }

  }



</style>
