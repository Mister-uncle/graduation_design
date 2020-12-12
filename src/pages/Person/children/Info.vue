<template>
  <div>
  <div class="info">
    <h1>个人信息</h1>
    <div class="content">

      <div class="head">
        <div>
          <img src="static/img/head.jpg" alt="">
        </div>
        <span>修改头像</span>
      </div>

      <div class="infomation">
        <h2>基础信息</h2>
        <span>昵称: &nbsp;&nbsp;<em>However°</em> </span>
        <span>性别: &nbsp;&nbsp;<em>男</em> </span>
      </div>

      <div class="edit" @click="editDialogVisible = true">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <span>编辑</span>
      </div>
    </div>
  </div>

  <el-dialog
    title="编辑基础资料"
    :visible.sync="editDialogVisible"
    class="payDialog"
    width="450px">
    <div class="input">
      <div class="name">
        <label>昵称:</label>
        <div>
          <el-input v-model="input" :value="nickName"></el-input>
        </div>

      </div>

      <div class="sex">
        <label>性别:</label>
        <input type="checkbox">男
        <input type="checkbox">女
      </div>
    </div>

    <div class="btn">
      <div class="save">保存</div>
      <div class="cancel" @click="editDialogVisible=false">取消</div>
    </div>



  </el-dialog>
</div>


</template>

<script>
    export default {
        name: "Info",
      data(){
          return{
            editDialogVisible:false,
            input:'',
            nickName:'However°'
          }
      }
    }
</script>

<style scoped lang="less">
  .info{
    h1{
      font-size: 30px;
      color: #757575;
    }
    .content{
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      .head{
        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 100px;
            margin-top: -20px;
          }
        }
        span{
          display: block;
          margin-top: 20px;
          color: #ac0825;
          cursor: pointer;
        }
      }
      .infomation{
        flex: 2;
        span{
          display: block;
          margin-top:20px;
          color: #757575;
        }
      }
      .edit{
        color: #ac0825;
        cursor: pointer;
      }
    }
  }
  .payDialog{
    font-weight: bolder;

    .input{
      margin-left: 30px;
      .name,.sex{
        margin-bottom: 20px;
        font-weight: lighter;
        label{
          font-weight: bolder;
        }
      }
      .name{
        display: flex;
        align-items: center;
        label{
          margin-right: 10px;
        }
        /deep/input{
          width: 250px;
          height: 35px;
          border-color: #e0e0e0;
        }
        /deep/input:focus{
          border-color: #ac0825;
        }
      }
      .sex{
        input{
          margin-right: 10px;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          line-height: 16px;
        }
      }
    }
    .btn{
      margin-top: 40px;
      text-align: center;
      div{
        width: 100px;
        height: 30px;
        background-color: #ac0825;
        color: white;
        display: inline-block;
        line-height: 30px;
        font-weight: lighter;
        margin-right: 20px;
        cursor: pointer;
      }
      .cancel{
        background-color: white;
        color: #757575;
        border:1px solid #e0e0e0;
      }
    }
  }
</style>
