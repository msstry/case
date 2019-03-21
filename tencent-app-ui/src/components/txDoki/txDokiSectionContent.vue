<template>
  <div class="doki-content">
    <a href="##" v-for="(da,index) in data" :key="index">
      <img :src="da.mingPic" alt=""/>
      <span>{{da.mingTitle}}</span>
      <i>{{da.mingDes}}</i>
    </a>
  </div>
</template>

<script>

    export default {
      name: "tx-doki-section-content",
      props:["data"]
    }
</script>

<style scoped>

</style>
