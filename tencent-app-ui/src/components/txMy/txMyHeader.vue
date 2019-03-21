<template>
  <div class="my-header">
    <a class="my-header-aa" href="##">
      <img class="my-header-imga" :src="data.myPic" alt=""/>
      <span>{{data.myName}}</span>
      <img class="my-header-imgb" :src="data.myLevelPic" alt=""/>
    </a>
    <a class="my-header-ab" href="##"><i class="iconfont icon-sousuo"></i></a>
  </div>
</template>

<script>
    export default {
        name: "tx-my-header",
        props:["data"]
    }
</script>

<style scoped>
  .my-header-ab .icon-sousuo{
    font-size: .24rem;
    font-weight: 900;
    color: #a0a1b6;
  }
</style>
