<template>
  <div class="header-top">
    <router-link to="/index/indexJx">{{data[0]}}</router-link>
    <router-link to="/index/indexAk">{{data[1]}}</router-link>
    <router-link to="/index/indexDsj">{{data[2]}}</router-link>
    <router-link to="/index/indexDy">{{data[3]}}</router-link>
    <router-link to="/index/indexZy">{{data[4]}}</router-link>
    <router-link to="/index/indexSr">{{data[5]}}</router-link>
    <router-link to="/index/indexJlp">{{data[6]}}</router-link>
    <router-link to="/index/indexGx">{{data[7]}}</router-link>
    <router-link class="bb" to="/index/indexXw">{{data[8]}}</router-link>
    <img class="header-imga" src="static/img/more.png" alt="">
  </div>
</template>

<script>
    export default {
        name: "tx-index-header-nav",
      props:["data"]
    }
</script>

<style scoped>
  .header-top{
    height: .48rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    border-bottom: 1px solid #eaeaea;
    overflow-x: auto;
  }
  .header-top a{
    font-size: 12px;
    color: #818294;
    margin-right: .21rem;
    -webkit-flex-shrink:0;
  }
  .router-link-active{
    font-size: .2rem;
    color: #fc5c1e;
  }
  .bb{
    padding-right: .4rem;
  }
</style>
