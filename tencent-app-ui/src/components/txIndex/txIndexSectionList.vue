<template>
  <div class="content-bottom">
    <a href="##" v-for="ad in data.list">
      <img :src="ad.listPic" alt=""/>
      <span>{{ad.listTitle}}</span>
      <i>{{ad.listDes}}</i>
    </a>
  </div>
</template>

<script>
    export default {
        name: "tx-index-section-list",
        props:["data"]
    }
</script>

<style scoped>

</style>
