<template>
  <div>
    <div class="yoo-content" v-for="da in data">
      <a href="##"><img :src="da.aKPic" alt="" width="100%" /></a>
      <div class="yoo-content-bottom">
        <a class="yoo-bottom-aa" href="##">
          <span class="yoo-bottom-spana"><img :src="da.aKUserPic" alt=""/></span>
          <span class="yoo-bottom-spanb">{{da.aKUserNic}}</span>
          <img class="yoo-bottom-imga" src="static/img/yoo04.png" alt=""/></a>
        <a href="##" class="yoo-bottom-aa">
          <span class="yoo-bottom-spana"><img :src="da.aKZPic" alt=""/></span>
          <span class="yoo-bottom-spanb">{{da.aKZName}}</span>
        </a>
        <p class="yoo-bottom-pa">
          <a href=""><img src="static/img/yoo02.png" alt=""/><span>{{da.aKUserCom}}</span></a>
          <a href=""><img src="static/img/yoo03.png" alt=""/></a>
        </p>
      </div>
      <p class="yoo-bottom-tc"></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-index-nav-ak-con",
        props:["data"]
    }
</script>

<style scoped>

</style>
