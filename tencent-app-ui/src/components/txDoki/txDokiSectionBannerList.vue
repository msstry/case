<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="(da,index) in data" :key="index">
      <a href="##">
        <img :src="da.bannerPic" alt="" style="width: 3.4rem;height: 1.3rem;margin: 0 auto;" />
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-doki-section-banner-list",
        props:["data"]
    }
</script>

<style scoped>
  .swiper-pagination-bullet-active{
    background: #ff009f;
    width: .1rem;
    height: .04rem;
    border-radius: 2px;
  }

</style>
