<template>
    <div class="section">
      <tx-index-section-banner :data="data.bannerInfo"></tx-index-section-banner>
      <tx-index-section-cai :data="data.listInfo"></tx-index-section-cai>
      <tx-index-section-list :data="data.listInfo"></tx-index-section-list>
      <tx-index-section-guang-gao :data="data.advPic"></tx-index-section-guang-gao>
    </div>
</template>

<script>
  import txIndexSectionBanner from "./txIndexSectionBanner"
  import txIndexSectionCai from "./txIndexSectionCai"
  import txIndexSectionList from "./txIndexSectionList"
  import txIndexSectionGuangGao from "./txIndexSectionGuangGao"
    export default {
        name: "tx-index-section",
        components: {
          txIndexSectionBanner,
          txIndexSectionCai,
          txIndexSectionList,
          txIndexSectionGuangGao
        },
        props:["data"]
    }

</script>

<style scoped>
  .section{
    -webkit-flex: 1;
    overflow-y: auto;
  }
</style>
