<template>
  <div class="doki-content-list">
    <a href="##" v-for="da in data.listCon">
      <img class="doki-content-imga" :src="da.pic" alt=""/>
      <span class="doki-content-spana">{{da.Title}}</span>
      <p><img class="doki-content-imgb" :src="da.userPic" alt=""/><span>{{da.userName}}</span></p>
    </a>
  </div>
</template>

<script>
    export default {
      name: "tx-doki-section-list",
      props:["data"]
    }
</script>

<style scoped>

</style>
