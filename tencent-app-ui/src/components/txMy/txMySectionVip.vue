<template>
  <div class="my-vip">
    <div class="my-vip-con">
      <a href="##" v-for="da in data">
        <p>{{da.myVipTitle}}<img src="static/img/m01.png" alt=""/></p>
        <span>{{da.myVipAct}}</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tx-my-section-vip",
        props:["data"]
    }
</script>

<style scoped>

</style>
