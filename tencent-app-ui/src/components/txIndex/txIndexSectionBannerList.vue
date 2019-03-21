<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="ba in data">
      <a href="##">
        <div class="banner">
          <img :src="ba.bannerPic" width="100%" alt=""/>
          <p>{{ba.bannerWord}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-index-section-banner-list",
        props:["data"]
    }
</script>

<style scoped>
  .banner{
    width: 3.45rem;
    height: 2.28rem;
    margin: 0 auto;
  }
  .banner img{
    width: 3.45rem;
    height: 1.89rem;
    margin: 0 auto;
  }
  .banner p{
    padding-left: .1rem;
    font-size: 12px;
    color: #000000;
    line-height: .39rem;
  }

</style>
