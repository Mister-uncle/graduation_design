<template>
  <div id="Home">
    <div class="tab">
      <div class="tab_logo">
        <a href="javascript:" @click="switchTo('/home')">
          <img src="../../../static/img/logo.png" alt="">
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
        <ul>
          <li >
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </li>
          <li>
            <a href="javascript:">
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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

    }
  },
  mounted() {
    this.lia = Array.from(this.$refs.titleLine.children)
    console.log(this.lia)

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
    z-index: 999;
    width: 100%;
    background-color: #f5f5f5;
    top: 0;
    .tab_logo a{
      display: inline-block;
      text-align: center;
      width: 80%;
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

  .tab_person li{
    float: left;
    margin:0 10px;
  }

</style>
