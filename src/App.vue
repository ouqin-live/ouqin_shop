<template>
  <div id="app">
    <van-tabbar route v-show="$route.meta.Footshow">
      <van-tabbar-item  to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/discover" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item  to="/order" icon="search">发现</van-tabbar-item>
      <van-tabbar-item  to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  date() {
    return {
      
    };
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
