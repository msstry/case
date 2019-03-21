<template>
    <div>
      <tx-index-nav-dy-top :data="data.dy"></tx-index-nav-dy-top>
      <tx-vip-section-list :data="data.dy.dyInfo"></tx-vip-section-list>
    </div>
</template>

<script>
  import txIndexNavDyTop from "./txIndexNavDyTop"
  import txVipSectionList from "../../txVip/txVipSectionList";
    export default {
        name: "tx-index-nav-dy",
        props:["data"],
        components:{
          txVipSectionList,
          txIndexNavDyTop
        }
    }
</script>

<style scoped>
.header-bottom{
  background: #080831;
}
</style>
