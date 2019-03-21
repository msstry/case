<template>
  <div class="footer">
    <router-link to="/index/indexJx">
      <img :src="'/index/indexJx' === $route.path?tabBarImgArr[0].selected:tabBarImgArr[0].normal" alt="">
      <span>首页</span>
    </router-link>
    <router-link to="/yoo">
      <img :src="'/yoo' === $route.path?tabBarImgArr[1].selected:tabBarImgArr[1].normal" alt="">
      <span>yoo视频</span>
    </router-link>
    <router-link to="/vip">
      <img :src="'/vip' === $route.path?tabBarImgArr[2].selected:tabBarImgArr[2].normal" alt="">
      <span>VIP会员</span>
    </router-link>
    <router-link to="/doki">
      <img :src="'/doki' === $route.path?tabBarImgArr[3].selected:tabBarImgArr[3].normal" alt="">
      <span>doki</span>
    </router-link>
    <router-link to="/my">
      <img :src="'/my' === $route.path?tabBarImgArr[4].selected:tabBarImgArr[4].normal" alt="">
      <span>个人中心</span>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "tx-footer",
        methods:{
          switchTo(path){
            this.$router.replace(path)
          }
        },
        data(){
          return{
            tabBarImgArr:[
              {
                normal:require("../../../static/img/f02_2.png"),
                selected:require("../../../static/img/f02.png")
              },
              {
                normal:require("../../../static/img/f01.png"),
                selected:require("../../../static/img/f01_2.png")
              },
              {
                normal:require("../../../static/img/f03.png"),
                selected:require("../../../static/img/f03_02.png")
              },
              {
                normal:require("../../../static/img/f04.png"),
                selected:require("../../../static/img/f04_02.png")
              },
              {
                normal:require("../../../static/img/f05.png"),
                selected:require("../../../static/img/f05_02.png")
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .router-link-active span{
    color: #ff6f34;
  }
</style>
