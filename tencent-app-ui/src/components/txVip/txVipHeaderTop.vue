<template>
  <div class="vip-header-top">
    <div class="vip-header-word">
      <img class="vip-header-imga" :src="data.userPic" alt="">
      <img class="vip-header-imgb" :src="data.userLevelPic" alt="">
      <span>尊敬的会员，您好</span>
    </div>
    <a href="##"><i class="iconfont icon-sousuo"></i></a>
  </div>
</template>

<script>
    export default {
        name: "tx-vip-header-top",
        props:["data"]
    }
</script>

<style scoped>
  .icon-sousuo{
    font-weight: 900;
    font-size: .20rem;
    color: #a0a1b5;
    padding: 0;
  }
</style>
