<template>
  <div >
    <Header title="发现" ></Header>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入商家或美食名称" >
      <van-button slot="button" size="small" type="primary">搜索</van-button>
      </van-field>
    </van-cell-group>
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

</style>
