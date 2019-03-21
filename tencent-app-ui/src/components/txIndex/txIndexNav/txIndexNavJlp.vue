<template>
    <div>
      <tx-index-section-banner :data="data.jlp.banner"></tx-index-section-banner>
      <tx-doki-section-yu-le :data="data.jlp"></tx-doki-section-yu-le>
      <tx-vip-section-list :data="data.jlp.jlpInfo"></tx-vip-section-list>
    </div>
</template>

<script>
    import txIndexSectionBanner from "../txIndexSectionBanner";
    import txDokiSectionYuLe from "../../txDoki/txDokiSectionYuLe";
    import txVipSectionList from "../../txVip/txVipSectionList";

    export default {
      components: {
        txVipSectionList,
        txDokiSectionYuLe,
        txIndexSectionBanner},
      name: "tx-index-nav-jlp",
      props:["data"]
    }
</script>

<style scoped>

</style>
