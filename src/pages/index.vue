<template>
  <div >
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



    <div class="footer">
      <div class="mod_help">
        <div class="mod_help_item l">
          <dt><a href="">关于我们</a></dt>
          <dd><a href="">公司介绍</a></dd>
          <dd><a href="">管理团队</a></dd>
          <dd><a href="">愿景 使命 价值观</a></dd>
        </div>
        <div class="mod_help_item l">
          <dt><a href="">新闻动态</a></dt>
          <dd><a href="">公司动态</a></dd>
          <dd><a href="">健康绿皮书</a></dd>
          <dd><a href="">愿景 使命 价值观</a></dd>
        </div>
        <div class="mod_help_item l">
          <dt><a href="">客户服务</a></dt>
          <dd><a href="">帮助中心</a></dd>
          <dd><a href="">退换货承诺</a></dd>
          <dd><a href="">关于发货快递</a></dd>
          <dd><a href="">隐私声明</a></dd>
        </div>
        <div class="mod_help_item l">
          <dt><a href="">业务合作</a></dt>
          <dd><a href="">分销招募</a></dd>
          <dd><a href="">网站合作</a></dd>
          <dd><a href="">友情链接</a></dd>
          <dd><a href="">联系我们</a></dd>
        </div>
        <div class="app r">
          <h4>移动端</h4>
          <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABPCAIAAADz89W0AAAU80lEQVR4Ae3befyvU7UHcFOGmwqJJMPJTKVJL8ksRGQmlFx65ZVkShoMyTwPZcrUZMwss0qvaDBUCmUuStQ1FZl17/ucD+u3z/M8v/M75778U3r++P7WXnvttYc17vU8v6n/9re/vfa1r53qFfNM84rZ6Ysb/c+G/90l/oqT8FSc1v9O/Ey+jN/1rnfV0AcffHDaaaftjN1rr72K4PDDD+/0fuADH9D79NNPv/rVr66u8847D1JXYVpgww031PvXv/61RY4J1xoA041GPc0000w99dSj9Rr5z3/+s9M73XTjub3wwgt+MxzZs88+C5+mX10Z6HTSLCZpGm6IgfAWAFlzGdJZkt4OprgBamCLHJYwRnfcccf/jP6cfPLJuLQSttCQv+lNb9J14YUXau63336al156qbn/8Y9/wFx55ZV63/CGN9CIRx99FL4kfO211yLYaqut5p577umnnx7ZwQcfDPONb3wD/M53vhMcfSwJ/+Y3v4Ec7fnOd75joMcs9QxL2LHNOuuss88+ewb0f1/zmtd0kM4IPb45cgRp/vnPfyYxxP814Xnd614HRjbbbLO96lWvAqOPzHUZ8tRTT91///1hPtNMM8HMPPPMmojBwdfvLLPM0kdWb3+RuoY3XGM+8pGP3HnnndUEfOYzn9lyyy1bTAe++uqrSfvNb35zB/+tb33rq1/96lvf+tbbbrvN6dBz8sEKcN1119nPnnvueffdd//+97838Oyzz0Y5xxxzFJObb7753e9+90orrXTooYcWMgCl+PWvf90isbXOFlPwGBu221/+8pdFDXj44YfbZgcmroUWWqiQNgaOzA3EikAWWWSREBDmr371qxlmmGHhhRf2S7A117zzzrvooosWHwBivW95y1taZGDHVAODWWONNfpkwYyx4dGG9fGs67Of/SxdPeKII+SqhOnUb7rpJpRgJj1u3Dhye/zxxwmEliJbYIEFvvvd7yL49Kc/beA222yz0047HXnkkT/5yU/6/BEfeOCBcRD93inADIYl/pAnsAhuqcOLRsFnoa3TqrDEoyBYd911OwN33XVXeNoLT1fjimHKaVFaTUaEABk4j2OCWWqppV5CjISl++67D3L55ZfvzLXbbrvBX3DBBcHXQMDLJmEOhqC4nxlnnNE0lIoZ33jjjT//+c/XXHNNqrjMMsvA2yoyTvjb3/52VP35559/7rnnasWrrbba61//+l/84he33HLL0ksvvfjii1fXywKMsWFH0pmmjwkBNT7qqKOK+JOf/CT4gAMOsGG6+uEPfzhd888//9FHH/3II48w5g6r7P+/Jzyrrrrq97///a997WuTs+EOHxP1MbWwMTa844470u2iBvT1h4jEW87285//PFvYf//9mUmG/OxnPwP0p6cOhx122B/+8AfmXcxhKsasvvrqH/zgBwVqhiAPY0d0B8x1b7HFFjUkwKc+9al11lmnRVKNtjkRPGkbttbBp7XhZ555xkJlCwDL6gcktjTI5Prrr59oKU0jNrzzzjvD2aHhYhi4k1rGhgeZQ06BDaP+3ve+l4jfLGMEjOhG2g0UzWSKc845p1VWhLz99ts15Vgrrriio7n44ospts0I2meeeaZfai+R+PGPf0zyDb8BBaneSy65hMFXswPccMMNHcz45qCEB+iGUPHSHQnPM888aH/0ox85NeoNjoSTMDBO+Iceesi55PJgeC4PvJSuTTfd1JBWwh/72MfgByU8tKgBnOH1DNhwPxQN8JiAqhxjiSWWkGNIktgwJFfM/OQDbZZC7XEWTg1FJm1iBXfddRfZJrX84x//yMM/8cQTCCQhhpcv6CzA8MlfZGfsgITrMKYI+Mtf/hJlTgBv4/BoNpyY3F1Qr92X8BQtrEM8IOHk+pLbbMAC+GFCSAIcuFYlouIokBqFAJlm9cJgAhmehQ9AtmSFAM/qMsSjC5/AfvUiQwwIq1ynAuf6WRzGAPo2TPf4G2ZWZyMRhxR1YL785S+D80jlYRghNXb7ybLaTOtLX/oS/nLJl0ZM9Fcs0Wsi96ha5WmnnQaJM4xABX7yySfN4lDAXB23t+SSS8I4lPe+9704Ssg1J/MZkLAVOFSaWQfPFCFdaC3CMUv0sz6nTpORUYdC1tIB5CAhYZmdXotzbWTnrgS0Y6655pJgZiBHbYhdsXBs7dZwcZuagD0Whpt5McnC7LydtGA8H3vsMYskv0IO2HD67Nne8hgDud1225nD+og0z+9+9zsEFuQ4uBwwylbCKfG0QzLwgQceQIynX7dWogveEqPMdBVGHEbw8Y9/3LwybXDUOwPDASyBRdB/3FjQeNquAQlne0WEoydIAIPxqzew9ekiCnIuGl3tkyEtJg4CPbl5NOMLiqaG4I8A3oytJFs4S0WDYRYWPga2ZEEObJi2pM/4VVZZRQBU0Fl77bXpVfB+pSXuAKXzMGyJlgImkQnUcOWUEMOYhY4AmLRr7QknnOCy4c4kt6HzNWQSwIc+9CFH5lI533zzuaKec845IY4NdgYObJj9FFFUSGLQIvWyvT/96U8hiwRoTkuTk05XcSsA25Y4eImX8EuTNcFsJPiwakVXfAJUiUuTddTADlmaAxteb7319H3zm99UZPr617/unHJlufzyyzU333xzCa308Ic//CHhoPTLzZLG1ltvbVlqbhzP3nvv7eLhqoTb5z73OXfDc88999RTT20X4Sawzz77sHDZlaP57W9/2/aCcSB2aQx43LhxikchUEXI9YswKRQyCaz7GcFIacXt008//cQTT+xwe7HpSKyyfXQQV/KHFp9KZQoALT6wAkDUIU4ryH333Re3JB5iTGcFVZduw1Jblz7mmGP6E8FYW1j1CwDScgRub+1cLZMBCbekJ510Upk0Z1hdpHH++edz95/4xCc4Brc8DlYVLtIushZ43/veJ4ZTWjztcJdddhFdJNuGfOELXyBheGaivsH533PPPe1YsHMsoQlObS83vvLKKx933HG11OWWW85criv231KOhwclbBFCnINRDe4MiITPOuss+He84x1oWB29EjYpZ3uW4FwehIfC50ropBxTUkv+mUdAkJJIO92xxx5bA3N5aHvB7fXQYmDOOOOMGmLe0BcGMCBhGui8SYDQRMJOdZcj3WyzzRQusKsuB8TNfPSjH2UL7ZpcgDQps5Nea621DDQljHyAL5BvYMIQ+NgaRdp0YY899kh0uOaaa5Zddtltt902BA5FwkdIbRngK1/5CmHCUxwHinOIy60W8/FAX8LWRGipD9Ku9njAPJBRSejThVhMmojpUKMt4qU/Nlz8I+HWhkPWvzwM2jArwEqBqD95TQEYkHB/QIthLWSiNuDlmH22Jx2y7bffvo3YNVbCaIgpydAv/IILLli9AAqifuQVD41YYYUV3vOe9yhrcRz8hZouEzCQTunt2DDFoRR5p6F4yF5++tOfKiQILpx55hqZaEolbLynX+IJR7rdd+8ZYqFohI00R/tty7Qp8YRzyrR5NVWrb224ZRjfQbdbZOBhCVs3BXMW9OTvf/+7Wzu3xE9W8UWX2oXY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" height="79" width="80"/></div>
      </div>
      <!--        &lt;!&ndash; mod_copyright  &ndash;&gt;-->
      <div class="mod_copyright">
        <p class="mod_copyright_links">
          关于我们  |  联系我们  |  联系客服  |  商家入驻  |  营销中心  |  手机端  |  友情链接  |  销售联盟  |  社区  |  公益  |  English Site  |  Contact U
        </p>
        <p class="mod_copyright_info">
          地址：重庆市沙坪坝区大学城科技学院 邮编：100000 电话：400-400-4000 传真：010-8000000 邮箱: 1327030921@qq.com  <br>
          渝ICP备08001421号 渝公网安备110108007702
        </p>
      </div>
      <div style="bottom: 10px;width: 100%;">
        <p style="text-align:center;">Copyright © 2020 minimiao <a href="http://www.beian.miit.gov.cn/">渝ICP备20009423号-1</a></p>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "index",
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
    margin: 80px auto 0;
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



  .footer{
    margin: 50px auto 0;
    background-color: #fff;
  }

  .mod_help{
    border-bottom: 1px solid #bfbfc0;
    overflow: hidden;
    /*text-align: center;*/
    display: flex;
    justify-content: space-around;

  }
  .mod_help_item{
    margin: 20px 100px 20px 30px;
  }
  .app{
    width: 200px;
    height: 200px;
    text-align: center;
    margin-right: 65px;
    margin-top: 10px;

  }
  .mod_help_item dt{
    font-weight: bold;
    margin-bottom: 50px;
  }
  .mod_help_item dd{
    margin: 15px 0;
    a{
      color:rgb(127, 127, 127) ;
    }
  }
  .mod_copyright{
    text-align: center;
    margin-top: 20px;
    p{
      margin-bottom: 15px;
    }
  }


  /*footer*/
  .footer{
    margin: 50px auto 0;
    background-color: #efeff0;

  }
  .mod_service{
    margin: 20px auto;
    height: 100px;
    border-bottom: 1px solid #bfbfc0;
    padding: 10px 0 ;
  }
  .mod_service ul{
    width: 1500px;
    overflow: hidden;
  }
  .mod_service li{
    float: left;
    width: 269px;
    height: 100px;
  }
  .mod_service .ser_l{
    width: 100px;
    height: 100px;
    padding: 20px;
  }
  .mod_service .ser_r{
    width: 169px;
    height: 100px;
  }

  .mod_help{
    border-bottom: 1px solid #bfbfc0;
    overflow: hidden;
  }
  .mod_help_item{
    margin: 20px 100px 20px 30px;
  }
  .app{
    width: 200px;
    height: 200px;
    text-align: center;
    margin-right: 65px;
    margin-top: 10px;

  }
  .mod_help_item dd{
    margin: 10px 0;
  }
  .mod_copyright{
    text-align: center;
    margin-top: 20px;
  }



</style>
