<template>
  <div class="container">
    <van-nav-bar left-arrow title="登录" fixed="true" @click-left="onClickLeft"></van-nav-bar>
    <h1>欧秦的外卖</h1>
    <van-tabs v-model="activeName">
      <van-tab title="短信登录" name="a">
        <van-cell-group>
          <van-field v-model="username" type="tel" clearable label="手机号" right="获取验证码" placeholder="请输入手机号">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>

          <van-field v-model="password" label="验证码" placeholder="请输入验证码" />
        </van-cell-group>
      </van-tab>
      <van-tab title="密码登录" name="b">
        <van-cell-group>
          <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名" />

          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
    <van-button class="login_btn" size="large"  type="primary">登录</van-button>
  </div>
</template>

<script>
import Header from "../../components/Header/Header";
export default {
  components: { Header },
  data() {
    return {
      activeName: "a"
    };
  },
  computed: {},
  watch: {},
  methods: {
      onClickLeft() {
         
      this.$router.back();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style  scoped>
.container{
    margin-top: 25%;
}
.van-cell{
    height:50px;
    width: 90%;
    margin-left: 5%;
    border: 1px solid #ccc;
    margin-top: 20px;
}
.login_btn{
    width: 90%;
    margin-top:20px;
    font-weight: 400;
    font-size: 20px;
}
</style>