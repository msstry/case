<template>
    <div>
      <tx-index-section-banner :data="data.zy.banner"></tx-index-section-banner>
      <tx-index-section-cai :data="data.listInfo"></tx-index-section-cai>
      <tx-index-section-list :data="data.zy"></tx-index-section-list>
      <tx-doki-section-yu-le :data="data.zy"></tx-doki-section-yu-le>
      <tx-vip-section-list  :data="data.zy.zyInfo"></tx-vip-section-list>
    </div>
</template>

<script>
    import txIndexSectionBanner from "../txIndexSectionBanner";
    import txIndexSectionCai from "../txIndexSectionCai";
    import txIndexSectionList from "../txIndexSectionList";
    import txDokiSectionYuLe from "../../txDoki/txDokiSectionYuLe";
    import txVipSectionList from "../../txVip/txVipSectionList";

    export default {
      components: {
        txVipSectionList,
        txDokiSectionYuLe,
        txIndexSectionList,
        txIndexSectionCai,
        txIndexSectionBanner},
      name: "tx-index-nav-zy",
      props:["data"]
    }
</script>

<style scoped>

</style>
