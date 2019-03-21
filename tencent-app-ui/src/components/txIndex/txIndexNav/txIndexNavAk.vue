<template>
  <tx-index-nav-ak-con :data="data.aiKan"></tx-index-nav-ak-con>
</template>

<script>
  import txIndexNavAkCon from "./txIndexNavAkCon"
    export default {
        name: "tx-index-nav-ak",
        props:["data"],
        components:{
          txIndexNavAkCon
        }
    }
</script>

<style scoped>

</style>
