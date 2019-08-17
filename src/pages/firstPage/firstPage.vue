<template>
  <div class="container">
    <Header title="杨庄北区" left="登录|注册" right="right"></Header>
    <div class="headNav">
      <ul>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
        <li>
          <img src="../../assets/订单.png" alt />
          <p>订单</p>
        </li>
      </ul>
    </div>
    <van-divider />
    <van-panel title="商家列表" status>
      <div>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          centered="true"
          currency="※"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        />
      </div>
    </van-panel>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
export default {
  date() {
    return {};
  },
  components: { Header }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
}
li {
  width: 33.3%;
  height: 80px;
  margin-bottom: 10px;
}
img {
  width: 60%;
  height: 50px;
}
p {
  margin: 0;
}
.van-divider {
  margin-top: 0;
}
/*商家列表*/
.van-cell__title,
.van-cell__value {
  display: flex;
}
</style>
