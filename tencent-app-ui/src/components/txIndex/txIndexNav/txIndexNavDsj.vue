<template>
  <div>
    <tx-index-section-banner :data="data.dsj.banner"></tx-index-section-banner>
    <tx-index-section-cai :data="data.listInfo"></tx-index-section-cai>
    <tx-index-section-list :data="data.dsj"></tx-index-section-list>
    <tx-doki-section-yu-le :data="data.dsj"></tx-doki-section-yu-le>
    <tx-vip-section-list :data="data.dsj.dsjInfo"></tx-vip-section-list>
  </div>
</template>


<script>
  import txIndexSectionBanner from "../txIndexSectionBanner";
  import txIndexSectionCai from "../txIndexSectionCai"
  import txIndexSectionList from "../txIndexSectionList";
  import txDokiSectionYuLe from "../../txDoki/txDokiSectionYuLe";
  import txVipSectionList from "../../txVip/txVipSectionList";
    export default {
        name: "tx-index-nav-dsj",
        props:["data"],
        components:{
          txVipSectionList,
          txDokiSectionYuLe,
          txIndexSectionList,
          txIndexSectionBanner,
          txIndexSectionCai
        }
    }
</script>

<style scoped>

</style>
