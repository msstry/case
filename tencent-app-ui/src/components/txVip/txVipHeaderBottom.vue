<template>
  <div class="vip-header-bottom">
    <router-link to="/vip">{{data[0]}}</router-link>
    <router-link to="/vipfl">{{data[1]}}</router-link>
    <router-link to="/vipdy">{{data[2]}}</router-link>
    <router-link to="/vipdsj">{{data[3]}}</router-link>
    <router-link to="/vipdm">{{data[4]}}</router-link>
    <router-link to="/vipxs">{{data[5]}}</router-link>
    <router-link to="/vipjlp">{{data[6]}}</router-link>
    <router-link to="/vipyy">{{data[7]}}</router-link>
    <router-link to="/vipty">{{data[8]}}</router-link>
  </div>
</template>

<script>
    export default {
        name: "tx-vip-header-bottom",
        props:["data"]
    }
</script>

<style scoped>
  .router-link-active{
    font-size: .2rem;
    color: #fc5c1e;
  }
</style>
