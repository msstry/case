<template>
  <div class="doki-header-bottom">
    <div class="doki-h-left">
      <a href="##"><i class="iconfont icon-sousuo"></i>{{data}}</a>
    </div>
    <div class="doki-h-right">
      <a href="##"><img src="static/img/doki02.png" alt=""/></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-doki-header-bottom",
      props:["data"]
    }
</script>

<style scoped>
  .doki-h-left .icon-sousuo{
    font-weight: 900;
    font-size: .20rem;
    margin-right: .06rem;
  }
</style>
