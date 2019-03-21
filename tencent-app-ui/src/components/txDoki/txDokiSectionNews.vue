<template>
  <div class="doki-news">
    <p>{{data.doKiRiBaoTitle}}<img src="static/img/doki11.png" alt=""/></p>
    <div class="doki-news-div">
      <ul class="doki-news-ul">
        <tx-doki-section-news-list :data="data.doKiRiBaoList"></tx-doki-section-news-list>
      </ul>
    </div>
  </div>
</template>

<script>
    import txDokiSectionNewsList from "./txDokiSectionNewsList";

    export default {
      components: {txDokiSectionNewsList},
      name: "tx-doki-section-news",
      props:["data"]
    }
</script>

<style scoped>

</style>
