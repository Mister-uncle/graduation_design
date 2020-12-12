<template>
    <div class="Nav">
      <div class="navBanner">
        <a href="javascript:" @click="swichTo('index')">
          <img src="../../static/img/logo.png"/>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavTitle",
      methods:{
        swichTo(path){
          this.$router.replace('/index')
          console.log(this.$router)
        }
      }
    }
</script>

<style scoped lang="less">
  .Nav{
    width: 100%;
    /*height: 50px;*/
    background-color: #f3f3f4;
    /*line-height: 50px;*/
    vertical-align: center;
    .navBanner{
      width: 60%;
      margin: 0 auto;
      /*background-color: pink;*/
      img{
        height: 60px;
      }
    }
  }
</style>
