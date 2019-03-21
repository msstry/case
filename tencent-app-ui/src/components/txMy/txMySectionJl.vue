<template>
  <div class="my-jl">
    <a href="##" v-for="da in data.myMessList">
      <i>{{da.myMessCount}}</i>
      <span>{{da.myMessWord}}</span>
    </a>
    <a href="##">
      <img class="my-jl-imga" :src="data.myMessPic" alt=""/>
      <span>{{data.myMessWords}}</span>
    </a>
  </div>
</template>

<script>

    export default {
      name: "tx-my-section-jl",
      props:["data"]
    }
</script>

<style scoped>

</style>
