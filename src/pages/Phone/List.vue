<template>
  <div id="list">

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
          <a href="javascript:">
            <i>购买</i>
          </a>
        </div>
      </div>
    </div>

    <div class="tips" ref="listTips" v-if="isLogin">
      <span>为方便您购买，请提前登录</span>
      <a href="javascript:">立即登录</a>
      <i class="fa fa-times" aria-hidden="true"
         @click="tipsRemove"
      ></i>
    </div>

    <div class="phoneMain">
      <div class="phoneCenter">

        <div class="phoneL">
          <img src="./img/li1.jpg" alt="">
        </div>

        <div class="phoneR">
          <div class="phoneDetail">
            <span>HUAWEI Mate 40 RS 保时捷设计</span>
            <span>一亿像素夜景相机 / 国内首发骁龙 750G处理器 / 6.67''小孔径全面屏 / 120Hz六档变速高刷屏 / 全场景AI四摄 / 线性马达 / 4820mAh+33W闪充 / 立体声双扬声器 / 多功能NFC</span>
            <em>1999 元</em>
          </div>
          <ul>
<!--地址-->
            <li class="phoneAddress">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>重庆市 沙坪坝区 大学城</span>
              <a href="javascript:">修改</a>
              <span>有现货</span>
            </li>
<!--选择产品-->
            <li class="choosePro">
              <span class="title">选择产品</span>
              <ul class="button" >
                <li class="active" >HUAWEI Mate 40 4G</li>
                <li @click="isactive" >HUAWEI Mate 40 5G</li>
                <li>HUAWEI Mate 40 Pro 5G</li>
              </ul>
            </li>
<!--选择版本-->
            <li class="choosePro">
              <span class="title">选择版本</span>
              <ul class="button" >
                <li class="active" >4GB + 128G</li>
                <li @click="isactive" >6GB + 128G</li>
                <li>8GB + 256G</li>
              </ul>
            </li>
<!--选择颜色-->
            <li class="choosePro">
              <span class="title">选择颜色</span>
              <ul class="button" >
                <li class="active" >沉默星空</li>
                <li @click="isactive" >湖光秋色</li>
                <li>碧海星辰</li>
              </ul>
            </li>

            <li class="listTotal">
              <span>HUAWEI Mate 40 4G 8GB+256G 碧海星辰</span>
              <span>1999元</span>
              <em>总计:1999元</em>
            </li>

            <li class="addCar" @click="$router.push('success')">加入购物车</li>

          </ul>
        </div>
      </div>


    </div>

    <div class="phoneUnder">
      <div class="listSupple">
        <div>价格说明</div>
        <span>商品展示的划横线价格为参考价,该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价(如厂商指导价、建议零售价
划线价:商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价(如厂商指导价、建议零售价等)或该商品在小米商城/小米有品/天猫小米官方旗舰店曾经展示过的销售价;由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价
等)或该商品在小米商城/小米有品/天猫小米官方旗舰店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价
等可能会与您购物时展示的不-致,该价格仅供您参考。
        </span>
      </div>
    </div>


    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavFooter from "../../components/NavFooter";
  import HomeTop from "../../components/HomeTop";

    export default {
        name: "List",
      components:{
        NavFooter,
        HomeTop
      },
      data(){
          return{
            style:{
              position:'',
              // opacity: 1,
            },
            phoneData:{
              name:'HUAWEI Mate 40 RS 保时捷设计',
              message:'',
              messageBottom:{
                line1:'画面示意产品均为 HUAWEI Mate 40 RS 保时捷设计 典藏版（12 GB+512 GB 版）',
                line2:'图片仅供参考，请以实物为准。',
              }
            },
            isLogin:true,
            Data:{
              name:'HUAWEI Mate 40 RS 保时捷设计',
              message:'一亿像素夜景相机 / 国内首发骁龙 750G处理器 / 6.67\'\'小孔径全面屏 / 120Hz六档变速高刷屏 / 全场景AI四摄 / 线性马达 / 4820mAh+33W闪充 / 立体声双扬声器 / 多功能NFC',
              pro:[{
                name:'HUAWEI Mate 40 4G',
                version: [{
                  ver1:'4GB + 128G',
                  price:999
                },
                  {
                    ver1:'6GB + 128G',
                    price:1199
                  },
                  {
                    ver1:'8GB + 256G',
                    price:1399
                  }]
              },
                {
                  name:'HUAWEI Mate 40 5G',
                  version: [{
                    ver1:'6GB + 128G',
                    price:1299
                  },
                    {
                      ver1:'8GB + 128G',
                      price:1499
                    },
                    {
                      ver1:'8GB + 256G',
                      price:1699
                    }]
                },
                {
                  name:'HUAWEI Mate 40 Pro 5G',
                  version: [{
                    ver1:'6GB + 128G',
                    price:1499
                  },
                    {
                      ver1:'8GB + 128G',
                      price:1799
                    },
                    {
                      ver1:'8GB + 256G',
                      price:2199
                    }]
                }],
              color:['沉默星空','湖光秋色','碧海星辰']
            }
          }
      },
      methods:{
        tipsRemove(){
          this.isLogin = false
        },
        isactive(){

        },
      },


    }
</script>

<style scoped lang="less">

  /*#list >>> {*/

  /*}*/

  .phoneTab{
    /*position: absolute;*/
    width: 100%;
    height: 84px;
    z-index: 110;
    top: 0px;
    line-height: 84px;
    background-color: #f3f3f4;
    /*position: fixed;*/
    border-top: 1px solid rgba(127, 127, 127, 0.28);
    box-shadow: 0 0 10px rgba(131, 131, 131, 0.86);

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

  .tips{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    color: #333;
    line-height: 95px;
    span{
      margin-right: 40px;
    }
    a{
      margin-right: 10px;
      color:#ac0825 ;
    }
    i{
      color: rgba(127, 127, 127, 0.6);
      cursor: pointer;
      display: inline;
      margin-top: 40px;
    }
  }

  .phoneMain{
    width: 100%;
    margin-top: 50px;
    .phoneCenter{
      display: flex;
      width: 96%;
      height: 100%;
      margin: 0 auto;
      box-shadow: 0 0 20px -10px #888;
    }
    .phoneL{
      flex: 1;
      background-color: #fff;
      img{
        /*width: 50%;*/
        width: 550px;
        margin: 50px auto;
        display: block;
      }
    }
    .phoneR{
      flex: 1;
      padding: 50px;
      box-sizing: content-box;
      .phoneDetail{
        border-bottom: 1px solid rgba(127, 127, 127, 0.22);
        padding-bottom: 20px;
        span{
          display: block;
        }
        span:first-of-type{
          font-size: 180%;
        }
        span:last-of-type{
          margin: 15px 0;
          color: rgba(127, 127, 127, 0.54);
          font-weight: lighter;
        }
        em{
          color: #ac0825;
          font-weight: bolder;
        }
      }

      .phoneAddress{
        width: 100%;
        height: 120px;
        background-color: rgb(247, 247, 249);
        border: 1px solid rgba(215, 212, 212, 0.41);
        margin-top: 20px;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        i{
          margin-right: 20px;
        }
        span{
          display: block;
          margin-right: 20px;
        }
        a{
          display: block;
          color: #ac0825;
          margin-right: 20px;
        }
        span:last-of-type{
          color: #ac0825;
        }
      }
      .choosePro{
        margin-top: 20px;
        span{
          font-size: 18px;
          color: #333333;
          display: block;
        }
        ul.button{
          margin-top: 20px;
          display: flex;
          justify-items: center;
          width: 100%;
          flex-wrap: wrap;
          li{
            width: 49%;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid rgba(215, 212, 212, 0.41);
            margin-bottom: 20px;
            text-align: center;
            cursor: pointer;
            transition: all ease-in-out .3s;
          }
          li:nth-child(2n+1){
            margin-right: 2%;
          }
          .active{
            color: #ac0825;
            border: 1px solid #ac0825;
          }
        }
        .button li:hover{
          color: #ac0825;
          border: 1px solid #ac0825;
        }
      }
      .listTotal{
        background-color: rgb(247, 247, 249);
        width: 100%;
        padding: 30px 20px;
        span{
          color: #616161;
          font-size: 14px;
          display:inline-block;
        }
        span:last-of-type{
          float: right;
          margin-right: 30px;
        }
        em{
          display: block;
          font-size: 24px;
          color: #ac0825;
          padding: 20px 0 0;
        }
      }
      .addCar{
        height: 50px;
        width: 50%;
        background-color: #ac0825;
        text-align: center;
        line-height: 50px;
        margin-top: 20px;
        color: white;
        cursor: pointer;

      }

    }

  }

  .phoneUnder {
    width: 96%;
    margin: 50px auto;

    .listSupple {
      /*display: flex;*/
      /*width: 96%;*/
      /*height: 200px;*/
      box-shadow: 0 0 20px -10px #888;
      padding: 50px 70px;
      /*text-align: center;*/
      div{
        font-size: 20px;
        width: 100%;

      }
      span{
        display: block;
        margin: 20px 0;
        line-height: 30px;
        color:#7f7f7f;
        text-indent: 2em;
      }
    }
  }

</style>
