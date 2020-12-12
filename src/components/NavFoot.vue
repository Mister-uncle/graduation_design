<template>
    <div class="foot">
      <div class="footUp">
        <a href="javascript:">帐号用户协议</a>
        <span>|</span>
        <a href="javascript:">关于帐号隐私的声明</a>
        <span>|</span>
        <a href="javascript:">常见问题</a>
        <span>|</span>
        <a href="javascript:">Cookie</a>
        <div class="footDown">软件2017-02 陈家松  © 2017-2021</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavFoot"
    }
</script>

<style scoped lang="less">
  .foot{
    position: absolute;
    width: 100%;
    height: 110px;
    background-color: #f2f2f2;
    bottom: 0;
    /*background-color: orange;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    .footUp{
      /*background-color: pink;*/
      width: 100%;
      margin: 0 auto;
      text-align: center;
      font-size: 14px;
      color: #333;
      span{
        margin: 0 10px;
      }
      .footDown{
        margin-top: 15px;
        opacity: .3;
      }
    }
  }
</style>
