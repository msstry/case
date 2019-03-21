<template>
  <div>
    <div class="yoo-content" v-for="da in data">
      <a href="##"><img :src="da.listPic" alt="" width="100%" /></a>
      <div class="yoo-content-bottom">
        <a class="yoo-bottom-aa" href="##">
          <span class="yoo-bottom-spana"><img :src="da.userPic" alt=""/></span>
          <span class="yoo-bottom-spanb">{{da.userNic}}</span>
          <img class="yoo-bottom-imga" src="static/img/yoo04.png" alt=""/></a>
        <p class="yoo-bottom-pa">
          <a href=""><img src="static/img/yoo02.png" alt=""/><span>{{da.userCom}}</span></a>
          <a href=""><img src="static/img/yoo03.png" alt=""/></a>
        </p>
      </div>
      <p class="yoo-bottom-tc"></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-yoo-section-list",
        props:["data"]
    }
</script>

<style scoped>

</style>
