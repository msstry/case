<template>
  <tx-index-section :data="data"></tx-index-section>
</template>

<script>
  import txIndexSection from "../txIndexSection"
    export default {
        name: "tx-index-nav-jx",
        props:["data"],
        components:{
          txIndexSection
        }
    }
</script>

<style scoped>

</style>
