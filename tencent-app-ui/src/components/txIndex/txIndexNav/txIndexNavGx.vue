<template>
    <tx-index-nav-gx-con :data="data.gx"></tx-index-nav-gx-con>
</template>

<script>
  import txIndexNavGxCon from "./txIndexNavGxCon"
    export default {
        name: "tx-index-nav-gx",
        props:["data"],
        components:{
          txIndexNavGxCon
        }
    }
</script>

<style scoped>

</style>
