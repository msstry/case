<template>
  <div class="doki-header">
    <tx-doki-header-top :data="data.doKiNavInfo"></tx-doki-header-top>
    <tx-doki-header-bottom :data="data.doKiSearchCon"></tx-doki-header-bottom>
  </div>
</template>

<script>
    import txDokiHeaderTop from "./txDokiHeaderTop";
    import txDokiHeaderBottom from "./txDokiHeaderBottom";

    export default {
      components: {
        txDokiHeaderBottom,
        txDokiHeaderTop},
      name: "tx-doki-header",
        props:["data"]
    }
</script>

<style scoped>

</style>
