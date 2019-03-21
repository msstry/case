<template>
  <div class="vip-list">
    <a href="##" v-for="da in data">
      <img :src="da.listInfoPic" alt=""/>
      <span>{{da.listInfoTitle}}</span>
      <i>{{da.listInfoDes}}</i>
    </a>
  </div>
</template>

<script>
    export default {
        name: "tx-vip-section-list",
        props:["data"]
    }
</script>

<style scoped>

</style>
