<template>
  <div class="vip-header">
    <tx-vip-header-top :data="data"></tx-vip-header-top>
    <tx-vip-header-bottom :data="data.vipNav"></tx-vip-header-bottom>
  </div>
</template>

<script>
    import txVipHeaderTop from "./txVipHeaderTop";
    import txVipHeaderBottom from "./txVipHeaderBottom";

    export default {
      components: {
        txVipHeaderBottom,
        txVipHeaderTop},
      name: "tx-vip-header",
        props:["data"]
    }
</script>

<style scoped>

</style>
