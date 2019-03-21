<template>
  <div class="vip-banner">
    <div class="swiper-container">
      <tx-vip-section-banner-list :data="data"></tx-vip-section-banner-list>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

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
    import txVipSectionBannerList from "./txVipSectionBannerList";
    export default {
      components: {txVipSectionBannerList},
      name: "tx-vip-section-banner",
      props:["data"],
      mounted:()=>{
        var mySwiper = new Swiper ('.swiper-container', {
          // slidesPerView:3,
          // slidesOffsetBefore : 5,
          // slidesOffsetAfter : 1,
          spaceBetween:-32,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

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
  /*轮播图*/
  .vip-banner{
    width: 100%;
    height: 1.89rem;
    margin-bottom: .18rem;
  }

  .swiper-container {
    width: 100%;
    height: 1.89rem;
  }
</style>
