<template>
  <div class="doki-banner">
    <div class="swiper-container">
      <tx-doki-section-banner-list :data="data"></tx-doki-section-banner-list>
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
    import txDokiSectionBannerList from "./txDokiSectionBannerList";

    export default {
      components: {
        txDokiSectionBannerList
      },
      props:["data"],
      name: "tx-doki-section-banner",
      mounted:function(){
        var mySwiper = new Swiper ('.swiper-container', {
          // autoplay: {
          //   delay: 3000,
          //   stopOnLastSlide: false,
          //   disableOnInteraction: false,
          // },
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
  /*@import "../../assets/banner.css";*/
  .doki-banner{
    height: 1.3rem;
    margin-bottom: .2rem;
  }
  .swiper-container {
    width: 100%;
    height: 1.5rem;
  }
</style>
<style>
  .swiper-pagination-bullet{
    background: #cbcfd2;
    opacity: 1;
    width: .04rem;
    height: .04rem;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 .02rem;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -.2rem;
    left: 40%;
  }
  .swiper-pagination-bullet-active{
    background: #ff009f;
    width: .1rem;
    height: .04rem;
    border-radius: 2px;
  }
</style>
