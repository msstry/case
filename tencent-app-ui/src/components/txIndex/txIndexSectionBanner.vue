<template>
  <div class="content-top">
    <div class="swiper-container">
        <tx-index-section-banner-list :data="data"></tx-index-section-banner-list>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
    import Swiper from "swiper"
    import txIndexSectionBannerList from "./txIndexSectionBannerList";
    export default {
      components: {txIndexSectionBannerList},
      props:["data"],
      name: "tx-index-section-banner",
        mounted:()=>{
        var mySwiper = new Swiper ('.swiper-container', {
          // slidesPerView:3,
          // slidesOffsetBefore : 5,
          // slidesOffsetAfter : 1,
          spaceBetween:-22,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项

          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination',
          // },

          // 如果需要前进后退按钮
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },

          // 如果需要滚动条
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        })
      }
    }


</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 2.28rem;
  }
</style>
