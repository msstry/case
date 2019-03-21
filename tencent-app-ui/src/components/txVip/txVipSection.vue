<template>
  <div class="vip-section">
    <tx-vip-section-guang-gao :data="data.vipSectionDevPic"></tx-vip-section-guang-gao>
    <tx-vip-section-banner :data="data.vipBannerInfo"></tx-vip-section-banner>
    <tx-vip-section-list :data="data.vipSectionListInfo"></tx-vip-section-list>
  </div>
</template>

<script>
  import txVipSectionGuangGao from "./txVipSectionGuangGao"
  import txVipSectionBanner from "./txVipSectionBanner"
  import txVipSectionList from "./txVipSectionList"
    export default {
        name: "tx-vip-section",
      components:{
        txVipSectionGuangGao,
        txVipSectionBanner,
        txVipSectionList
      },
      props:["data"]
    }
</script>

<style scoped>

</style>
