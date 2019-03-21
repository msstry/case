<template>
  <div>
    <li v-for="da in data">{{da.riBaoCon}}</li>
  </div>
</template>

<script>
    export default {
        name: "tx-doki-section-news-list",
        props:["data"]
    }
</script>

<style scoped>

</style>
