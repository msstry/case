<template>
    <tx-index-nav-gx-con :data="data.xw"></tx-index-nav-gx-con>
</template>

<script>
    import txIndexNavGxCon from "./txIndexNavGxCon";

    export default {
      components: {txIndexNavGxCon},
      name: "tx-index-nav-xw",
      props:["data"]
    }
</script>

<style scoped>

</style>
