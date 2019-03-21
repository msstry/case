<template>
  <div class="dybj">
    <a href="##">
      <img :src="data.pic" alt=""/>
      <p>{{data.title}}</p>
    </a>
  </div>
</template>

<script>
    export default {
        name: "tx-index-nav-dy-top",
        props:["data"]
    }
</script>

<style scoped>
  .dybj{
    background: #080831;
    height: 2.586rem;
    width: 100%;
    margin-bottom: .24rem;
  }
  .dybj a img{
    width: 3.36rem;
    height: 1.89rem;
    margin: 0 auto;
  }
  .dybj a p{
    font-size: .14rem;
    color: #3175f7;
    text-align: center;
    line-height: .54rem;
  }
</style>
