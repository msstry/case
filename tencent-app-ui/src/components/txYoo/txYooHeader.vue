<template>
  <div class="yoo-header">
    <div class="yoo-header-top">
      <div class="yoo-header-word">
        <router-link to="/yoo">{{data[0]}}</router-link>
        <router-link to="/xsp">{{data[1]}}</router-link>
        <router-link to="/gu">{{data[2]}}</router-link>
      </div>
      <a href="##"><i class="iconfont icon-sousuo"></i></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-yoo-header",
        props:["data"]
    }
</script>

<style scoped>
  .router-link-active{
    font-size: .2rem;
    color: #fc5c1e;
  }
  .icon-sousuo{
    font-weight: 900;
    font-size: .20rem;
    color: #a0a1b5;
  }
</style>
