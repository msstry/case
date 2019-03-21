<template>
  <div class="header">
    <tx-index-header-nav :data="data.navInfo"></tx-index-header-nav>
    <tx-index-header-sou-suo :data="data.souSuo"></tx-index-header-sou-suo>
  </div>
</template>

<script>
    import txIndexHeaderNav from "./txIndexHeaderNav"
    import txIndexHeaderSouSuo from "./txIndexHeaderSouSuo"
    export default {
        name: "tx-index-header",
        components:{
          txIndexHeaderNav,
          txIndexHeaderSouSuo
        },
        props:["data"]
    }
</script>

<style scoped>

</style>
