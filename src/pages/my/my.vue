<template>
  <div>
    <Header title="我的"></Header>
    <div class="head">
      <div class="head_top" @click="goLogin">
        <img src="../../assets/我的.png" alt />
        <div class="head_top_text">
          <p>登录|注册</p>
          <p>暂无绑定手机号</p>
        </div>
        <i>></i>
      </div>
      <div class="head_bottom">
        <div>
          <p>0.00元</p>
          <p>我的余额</p>
        </div>
        <div>
          <p>0.00元</p>
          <p>我的余额</p>
        </div>
        <div>
          <p>0.00元</p>
          <p>我的余额</p>
        </div>
      </div>
    </div>
  <div class="list">
    <van-nav-bar title="我的订单"  name="first_vanbar">
      <van-icon name="orders-o" slot="left" size="20px" />
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar title="积分商城">
      <van-icon name="cash-back-record" slot="left" size="20px"/>
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
    <van-nav-bar title="服务中心">
      <van-icon name="manager-o" slot="left" size="20px"/>
      <van-icon name="arrow" slot="right" />
    </van-nav-bar>
  </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
export default {
  date() {
    return {};
  },
  components: { Header },
  methods:{
    goLogin(){
      this.$router.push({path:'/login'})
    }
  }
};
</script>

<style>
.head_top {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.head_top img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 15px;
}
.head_top_text {
  flex-grow: 3;
  text-align: left;
  margin-left: 10px;
}
.head_top i {
  flex-grow: 1;
  margin: auto;
}
.head_bottom {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}
.head_bottom div {
  width: 33.2%;
  border-bottom: 1px solid #ccc;
}
.head_bottom div:nth-child(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.list .van-nav-bar__title{
  text-align: left;
}
.van-nav-bar[name="first_vanbar"]{
  border-top: 1px solid #ccc;
}
.van-nav-bar{
  border-bottom: 1px solid #ccc;
}

</style>