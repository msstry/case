<template>
  <div class="doki-section">
    <tx-doki-section-banner :data="data.doKiBanner"></tx-doki-section-banner>
    <tx-doki-section-news :data="data.doKiRiBao"></tx-doki-section-news>
    <tx-doki-section-content :data="data.doKiMing"></tx-doki-section-content>
    <tx-doki-section-sec :data="data.doKiTieList"></tx-doki-section-sec>
    <tx-doki-section-list :data="data.doKiTieList"></tx-doki-section-list>
    <tx-doki-section-yu-le :data="data.doKiHot"></tx-doki-section-yu-le>

    <!-- 固定位置 -->
    <div class="doki-content-gd">
      <a href="##1"><img src="static/img/doki12.png" alt=""><span>文字</span></a>
      <a href="##2"><img src="static/img/doki13.png" alt=""><span>相册</span></a>
    </div>
  </div>
</template>

<script>
  import txDokiSectionBanner from "./txDokiSectionBanner"
  import txDokiSectionNews from "./txDokiSectionNews";
  import txDokiSectionContent from "./txDokiSectionContent";
  import txDokiSectionSec from "./txDokiSectionSec";
  import txDokiSectionList from "./txDokiSectionList";
  import txDokiSectionYuLe from "./txDokiSectionYuLe";
    export default {
        name: "tx-doki-section",
        components:{
          txDokiSectionYuLe,
          txDokiSectionList,
          txDokiSectionSec,
          txDokiSectionContent,
          txDokiSectionNews,
          txDokiSectionBanner
        },
        props:["data"]
    }
</script>

<style scoped>

</style>
