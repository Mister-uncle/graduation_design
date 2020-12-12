<template>
  <div >

    <home-top></home-top>

    <template>
      <el-carousel
        :height="bannerHeight + 'px' "
        indicator-position="outside"
        :interval="3000"
        @change="changeEvent"
        class="carousel">
        <el-carousel-item  v-for="item in carList" :key="item.index">
          <img ref="imageBanner" :src="item.url" alt="" @load="imageLoaded">
          <div class="car_list" >
            <ul :width="ulWidth">
              <li class="wow fadeInUp  " data-wow-duration="1s" data-wow-delay="0.2s">
                <img :src="item.img" alt="">
              </li>
              <li class="wow fadeInUp carListHead" data-wow-duration="1s" data-wow-delay="0.2s">
                <h1>{{item.head}}</h1>
              </li>
              <li class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">{{item.text}}</li>
              <li class="wow fadeInUp carListButton " data-wow-duration="1s" data-wow-delay="0.4s">
                <a href="javascript:">
                  {{item.button}}
                </a>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </template>

    <div class="main">
      <el-row :gutter="50">
        <el-col  class="mainContent"  :sm="24"  :lg="12" v-for="item in mainList" :key="item.index">
          <div class="grid-content bg-purple-left" >
            <ul>
              <li>
                <img :src="item.url" alt="">
              </li>
              <li >
                <span v-for="li in item.text" :key="li.index">{{li}}</span>
              </li>
              <li >
                <a href="javascript:" class="mainListButton mainListButtonMore">{{item.button}}</a>
                <a href="javascript:" class="mainListButton mainListButtonMoreBuy">{{item.buy}}</a>
              </li>
            </ul>
            <div class="mainImg">
              <img :src="item.img" alt="">
            </div>
          </div>
        </el-col>
        <el-col  :sm="24"  :lg="12" v-for="item in mainList" :key="item.index">
        </el-col>
      </el-row>
    </div>

    <div class="content">
    </div>

    <div class="serve">
      <el-row class="serve_row">
        <el-col :xs="8" :sm="24" :lg="8" >
          <div class="grid-content serve_shop">
            <div>
              <h1>获取更多支持</h1>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </li>
                <li>
                  <span>服务店</span>
                  <span>
                    <a href="javascript:">查询服务店相关信息</a>
                     <em><i class="fa fa-chevron-right" aria-hidden="true"></i></em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :xs="4" :sm="24" :lg="8" >
          <div class="grid-content serve_goods">
            <div>
              <h1 style="visibility: hidden">获取更多支持</h1>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fa fa-map-o" aria-hidden="true"></i>
                </li>
                <li>
                  <span>了解您的产品</span>
                  <span>
                    <a href="javascript:">查看产品使用手册、常见问题、软件及驱动</a>
                     <em><i class="fa fa-chevron-right" aria-hidden="true"></i></em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :xs="4" :sm="24" :lg="8" >
          <div class="grid-content serve_customer">
            <div>
              <h1 style="visibility: hidden">获取更多支持</h1>
            </div>
            <div>
              <ul>
                <li>
                  <i class="fa fa-commenting" aria-hidden="true"></i>
                </li>
                <li>
                  <span>在线客服</span>
                  <span>
                    <a href="javascript:">线上交流，实时答疑</a>
                    <em><i class="fa fa-chevron-right" aria-hidden="true"></i></em>
                  </span>

                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <nav-footer></nav-footer>



  </div>
</template>

<script>
    import NavFooter from "../components/NavFooter";
    import HomeTop from "../components/HomeTop";

    export default {
        name: "index",
      components:{
        NavFooter,
        HomeTop
      },
      data(){
          return{
            bannerHeight:'',
            carList:[
              { url:'../../static/img/car1.png',
                img:'../../static/img/logo.svg',
                head:'月见非凡',
                text:'麒麟 990E 5G SoC芯片 | 超感光徕卡电影影像*',
                button:'HUAWEI P40 Pro'
              },
              { url:'../../static/img/car2.png',
                img:'../../static/img/mate-40-logo.svg',
                head:'重构想象',
                text: '超感知徕卡五摄 | 100倍双目变焦*',
                button:'了解更多'
              },

              { url:'../../static/img/car4.png',
                img:'../../static/img/logo.svg',
                head:'超感知影响',
                text: '66W华为超级快充* | 6400万超清四摄* |\n' +
                  '6.53英寸OLED真彩屏*',
                button:'HUAWEI Mate40'
              },
              { url:'../../static/img/car3.png' ,
                img:'../../static/img/cn-series.svg',
                head:'用山水，留下这代人的痕迹',
                text: "邀请您参与 \"我有一片胡杨林\"活动 ",
                button:'了解更多'
              },

            ],
            mainList:[
              { url:'../../static/img/main2.svg',
                text:[
                  '超跑动感飞线设计','雕塑曲面微晶陶瓷','星钻造型徕卡五摄',
                ],
                button:'了解更多',
                buy:'购买 ￥'+'11999' + '起' ,
                img:'../../static/img/main1g.png' },

              { url:'../../static/img/main3.svg',
                text:[
                  '2周强劲续航','蓝宝石玻璃表镜','专业运动模式，心脏健康管理',
                ],
                button:'了解更多',
                buy:'购买 ￥'+'2188' + '起' ,
                img:'../../static/img/main3g.png' },
              { url:'../../static/img/main1.svg',
                text:[
                  '1 kg 超薄机身','3K 悬浮全面屏','华为分享让电脑与手机无缝连接',
                ],
                button:'了解更多',
                buy:'购买 ￥'+'7999' + '起' ,
                img:'../../static/img/main2g.png' },
              {url:'../../static/img/main4.svg',
                text:[
                  '智慧动态降噪，时刻纯净聆听','人声透传模式，听见外界话语声','11 mm 稳态动圈，天籁音质',
                ],
                button:'了解更多',
                buy:'购买 ￥'+'24999' + '起' ,
                img:'../../static/img/main4g.png' },
              {url:'../../static/img/main6g.svg',
                text:[
                  '2400万超广角AI慧眼','全屏声场界','电影原彩OLED',
                ],
                button:'了解更多',
                buy:'购买 ￥'+'1099' + '起' ,
                img:'../../static/img/main5.png' },
              {url:'../../static/img/main6g.svg',
                text:[
                  '帝瓦雷四喇叭','Hi-Res 无损音质','华为分享 一碰传音',
                ],
                button:'了解更多',
                buy:'购买 ￥'+'1099' + '起' ,
                img:'../../static/img/main6.png' },
            ],
            ulWidth:'',

          }
      },
      methods:{
        imageLoaded(){
            this.$nextTick(() => {
              this.bannerHeight = this.$refs.imageBanner[0].clientHeight
            })
        },
        changeEvent(){
          new WOW().init();
        }
      },
      created() {
          console.log(document.body.offsetHeigh)
          console.log(document.body.clientHeight)
          console.log(document.body.scrollHeight)
      },
      mounted() {
          window.addEventListener('resize',() =>{
            this.bannerHeight = this.$refs.imageBanner[0].clientHeight
          },false)
        // console.log(this.$refs)

      }
    }
</script>

<style scoped lang="less">


  /*轮播图*/

  .carousel{
    overflow: hidden;
    width: 95%;
    margin: 0 auto ;
    position: relative;
    img{
    width: 100%;
    }
    .car_list{
      position: absolute;
      /*background-color: pink;*/
      width: 30%;
      height: 60%;
      z-index: 999;
      top: 15%;
      left: 3%;
      ul{
        li{
          margin: 20px 0;
        }
        li:last-of-type{
          margin-top: 40px;
        }
        li:nth-child(2){
          width: 600px;
        }
        .carListHead{
          font-size: 400%;
        }
        .carListButton a{
          background-color: black;
          color: white;
          padding: 5px 20px;
          border-radius: 30px;
          box-sizing: border-box;
          transition: all ease-in-out .3s;
        }
        .carListButton a:hover{
          background-color: rgba(0, 0, 0, 0.74);

        }
      }
    }
}
  /*主体区*/
  .main{
    width: 95%;
    margin: 0 auto;
    position: relative;
    /*background-color: pink;*/
    /*height: 100%;*/
    .mainContent{
      margin: 40px 0 50px;
      /*height: 100%;*/
      height: 600px;
      /*padding-bottom: 50px;*/

      .bg-purple-left {
        background: #fff;
        padding: 20px;
        text-align: left;
        position: relative;
        /*height: 500px;*/
        li{
          margin: 20px 0 40px 20px;
          span{
            display: block;
            margin-top: 10px;
            color: #8e8e8f;
          }
        }
        li:first-of-type img{
          height: 80%;
          width: 80%;
        }
        li:last-of-type{
          margin-top: 300px;
        }
        .mainListButton {
          border-radius: 30px;
          padding: 5px 20px;
          margin: 0 10px;
          transition: all ease-in-out .3s;
        }
        .mainListButtonMore{
          background-color: black;
          color: white;
          box-sizing: border-box;
        }
        .mainListButtonMoreBuy{
          border: 2px solid #8e8e8f;
        }
        .mainListButtonMore:hover{
          background-color: rgba(0, 0, 0, 0.74);
        }
        .mainListButtonMoreBuy:hover{
          border-color: rgba(0, 0, 0, 0.74);

        }

        .mainImg{
          position: absolute;
          right: -70px;
          bottom: -100px;
          width: 63%;
          height: 100%;
          /* background-color: orange; */
          z-index: 20;

          img{
            cursor: pointer;
            height: 70%;
            will-change: transform;
            transition: height ease-in-out .3s;
          }
          img:hover{
            height: 80%;
          }
        }

      }
      .bg-purple-right {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        height: 100%;
      }


    }

  }
  /*.el-col {*/
  /*  height: 100%;*/
  /*}*/

  /*更多支持*/
  .serve{
    width: 95%;
    margin: 40px auto;
    /*height: 500px;*/
    background-color: white;
    /*position: relative;*/
    .serve_row{
      /*w*/
    }
    .grid-content {
      min-height: 36px;
      height: 100%;
      padding: 20px 10% 80px;
      /*text-align: center;*/
      background-color: white;

      div{
        margin: 40px;
        position: relative;
        li span:first-of-type{
          font-weight: bold;
        }
        li span:last-of-type{
          position: relative;
          a{
            color: rgb(127, 127, 127);
          }
          a:hover + em{
            padding-left: 10px;
            color: #000000;
          }
          a:hover{
            color: #000000;
          }
          em{
            position: absolute;
            content: "";
            -webkit-font-smoothing: antialiased;
            font-style: normal;
            text-transform: none;
            display: inline-block;
            line-height: 1;
            font-size: 10px;
            font-weight: 700;
            padding-left: 5px;
            bottom: 1px;
            color: rgb(127, 127, 127);
            font-variant: normal;
            text-decoration: none;
            transition: all 0.3s ease-out 0s;

          }
        }
        li:first-of-type{
          position: absolute;
        }
        li:last-of-type span{
          display: block;
          margin: 0 20px 20px 40px;
        }
      }
      div:last-of-type{
        text-align: left;
      }
      h1{
        font-size: 200% ;
        font-weight: bold;
      }
    }

  }



</style>
