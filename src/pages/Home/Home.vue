<template>
  <div id="Home">
    <div class="tab">
      <div class="tab_logo">
        <a href="javascript:" @click="switchTo('/home')">
          <img src="./image/logo.png" alt="">
        </a>
      </div>
      <div class="tab_title ">
        <ul ref="titleLine" class="titleLine">
          <a href="javascript:" @click="switchTo('/phone')">
            <li  @mouseover="titleLine(0)">手机</li>
          </a>
          <a href="javascript:" @click="switchTo('/more')">
            <li @mouseover="titleLine(1)">更多产品</li>
          </a>
          <a href="javascript:" @click="switchTo('/emui')">
            <li @mouseover="titleLine(2)">EMUI 11</li>
          </a>
          <a href="javascript:" @click="switchTo('/serve')">
            <li @mouseover="titleLine(3)">服务支持</li>
          </a>
          <a href="javascript:" @click="switchTo('/shop')">
            <li @mouseover="titleLine(4)">零售店</li>
          </a>
          <div class="title_line wow zoomIn" ></div>
        </ul>

      </div>
      <div class="tab_person">
        <ul class="tab">
          <li >
<!--            <el-input placeholder="请输入内容" class="input-with-select">-->
<!--              <el-button slot="append" icon="el-icon-search"></el-button>-->
<!--            </el-input>-->
            <!-- 创建搜索框的容器 -->
            <div class="search-wrapper">
              <form class="search" action="#">
                <input class="search-inp" type="text">
                <button class="search-btn">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </li >
          <li class="tabPerson" @mouseover="tabPersonTag">
            <a href="javascript:">
              <i class="fa fa-user-o" aria-hidden="true" ></i>
            </a>
          </li>
          <div id="tabPersonTag" >
            <i></i>
            <ul>
              <li>登录</li>
              <li>注册</li>
            </ul>
          </div>
          <li >
            <a href="javascript:" id="tab_shopCar">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              购物车
            </a>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: {
        // width: + 'px',

      },
      lia:[],


    }
  },
  methods:{
    switchTo(path){
      console.log(this.$router)
      this.$router.replace(path)
    },
    titleLine(index){
      const liWidth = this.lia[index].children[0].clientWidth
      // console.log(liWidth)
      this.active.width = liWidth
    },
    tabPersonTag(){
      console.log(111)
    }
  },
  mounted() {
    this.lia = Array.from(this.$refs.titleLine.children)
    console.log(this.lia)
    let li = document.getElementById('tabPersonTag')
    li.addEventListener('mouseover',function () {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #Home{
    background-color: #f5f5f5;
    height: 3000px;
  }
  .tab{
    display: flex;
    justify-content: space-around;
    border: 1px solid #f5f5f5;
    line-height: 80px;
    position: fixed;
    z-index: 99;
    width: 100%;
    background-color: #f5f5f5;
    top: 0;
    .tab_logo a{
      display: inline-block;
      text-align: center;
      width: 100%;
      img{
        width: 100%;
        vertical-align: middle;
      }
      span{
      }
    }
  }
  .tab_title{
    display: flex;
    justify-content: space-around;
    position: relative;
    li{
      float: left;
      margin:0 10px;
      border-bottom: 2px solid #f5f5f5;
    }

    .title_line {
      position: absolute;
      width: 50px;
      height: 2px;
      background-color: #000000;
      bottom: 0;
      transition: width 1s linear;
      /*display: none;*/


    }
    /*.titleLine a:hover ~ .title_line{*/
    /*  display: block;*/
    /*  width: 50px;*/
    /*}*/
  }


  /* 设置搜索框的容器 */
  .search-wrapper{
    width: 296px;
    height: 50px;
    float: right;
    margin-top: 15px;
  }

  .search-wrapper .search-inp{
    box-sizing: border-box;
    width: 244px;
    border: none;
    float: left;
    padding: 0 10px;
    height: 50px;
    font-size: 16px;
    border: 1px solid rgb(224, 224, 224);
    outline: none;
  }

  /* 设置input获取焦点后的样式 */
  .search-wrapper .search-inp:focus,
  .search-wrapper .search-inp:focus + button{
    border-color: #000000;
  }

  .search-wrapper .search-btn{
    float: left;
    height: 50px;
    width: 52px;
    padding: 0;
    border: none;
    background-color: #fff;
    color: #616161;
    font-size: 16px;
    border: 1px solid rgb(224, 224, 224);
    border-left: none;
  }

  .search-wrapper .search-btn:hover{
    background-color: #020202;
    color: white;
    border: none;
  }

  .tab_person .tab:first-child{
    float: left;
    margin:0 10px;
  }
  .tab_person ul{
    position: relative;
    li{
      margin: 0 10px;
    }
    li:last-of-type a{
      border:2px solid #000000;
      padding: 5px;
      border-radius: 20px;
      transition: all ease-in-out 0.3s;
    }
    li:last-of-type a:hover{
      background-color: rgba(0, 0, 0, 0.94);
      color: white;
    }
    #tabPersonTag{
      position: absolute;
      width: 210px;
      /*height: 100px;*/
      bottom: -110px;
      left: 233px;
      /*visibility: hidden;*/
      display: none;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.16);
      background: #fff;
      /*background-color: pink;*/
      border: 1px solid #e8e8e8;
      transition:  ease-in-out .3s;
      /*z-index: 99;*/
      pointer-events: none;
      /*padding: 0 20px;*/
      ul{
        width: 100%;
        height: 100%;
      }
      i{
        position: absolute;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid white;
        /*border-top: 10px solid white;*/
        left: 102px;
        top: -10px;
      }
      li{
        /*display: block;*/
        /*background-color: pink;*/
        /*margin-top: 10px;*/
        /*padding: 0;*/
        /*margin: 0;*/
        height: 60px;
        line-height: 60px;
        text-align: center;
        /*vertical-align: middle;*/
      }
      li:hover{
        background-color: #8e8e8f;
      }
      li:first-of-type{
        border-bottom: 1px solid rgba(142, 142, 143, 0.52);
      }
    }
  }
  .tabPerson:hover + #tabPersonTag{
    /*visibility: visible;*/
    display: block;
  }
  #tabPersonTag:hover{
    display: block;
  }

</style>
