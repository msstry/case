<template>
  <div class="header-bottom" v-if="">
    <div class="h-left">
      <a href="##"><i class="iconfont icon-sousuo"></i>{{data.search}}<span class="h-tj">[{{data.searchTj}}]</span></a>
    </div>
    <div class="h-right">
      <a href="##"><i class="iconfont icon-youxi"></i></a>
      <a href="##"><i class="iconfont icon-xiazai"></i></a>
      <a href="##"><i class="iconfont icon-shizhong"></i></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-index-header-sou-suo",
      props:["data"]
    }
</script>

<style scoped>
  .h-left .icon-sousuo{
    color: #fe6426;
    font-weight: 900;
    font-size: .18rem;
    margin-right: .06rem;
  }
</style>
