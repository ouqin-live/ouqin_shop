<template>
  <div >
    <Header title="订单" ></Header>
    <div class="con">
      <p>登陆后查看外卖订单</p>
      <van-button type="primary">立即登录</van-button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  date(){
    return{
      
    }
  },
  components: {Header},  
};
</script>

<style>
.con{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 45%;
}
</style>