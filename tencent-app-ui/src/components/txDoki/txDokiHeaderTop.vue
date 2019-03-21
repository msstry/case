<template>
  <div class="doki-header-top">
    <div class="doki-header-word">
      <img class="doki-header-imga" src="static/img/doki03.png" alt="">
      <router-link to="/doki">{{data[0]}}</router-link>
      <router-link to="/dokitj">{{data[1]}}</router-link>
    </div>
    <a class="doki-header-aa" href="##"><img src="static/img/doki01.png" alt=""></a>
  </div>
</template>

<script>
    export default {
        name: "tx-doki-header-top",
        props:["data"]
    }
</script>

<style scoped>
  .router-link-active{
    font-size: .2rem;
    color: #fc5c1e;
  }
</style>
