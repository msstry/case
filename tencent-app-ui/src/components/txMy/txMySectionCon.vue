<template>
  <div>
    <div class="my-history">
      <h3>{{data.hTitle}}</h3>
      <a href="##">更多<img src="static/img/m01.png" alt=""/></a>
    </div>
    <div class="my-his-list">
      <a href="##" v-for="da in data.hList">
        <img :src="da.hPic" alt=""/>
        <p>{{da.hName}}</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-my-section-con",
        props:["data"]
    }
</script>

<style scoped>

</style>
