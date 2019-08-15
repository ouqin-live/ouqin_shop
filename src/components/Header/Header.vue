<template>
  <div>
    <van-nav-bar
    :title="title"
    :left-text="left|''"
    fixed="true"
>

<van-icon name="search" :slot="right|0"/>
</van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props:{
      title:String,
      left:String,
      right:String,
  }
};
</script>

<style scoped>

</style>
