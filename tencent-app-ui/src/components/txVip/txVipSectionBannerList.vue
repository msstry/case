<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="da in data">
      <a href="##">
        <img class="banner" :src="da.bannerPic" width="100%" alt=""/>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-vip-section-banner-list",
        props:["data"]
    }
</script>

<style scoped>
  .banner{
    width: 3.34rem;
    height: 1.89rem;
    margin: 0 auto;
  }
</style>
