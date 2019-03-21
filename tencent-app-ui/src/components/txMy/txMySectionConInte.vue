<template>
<div>
  <div class="my-history">
    <h3>{{data.iTitle}}</h3>
  </div>
  <div class="my-interest">
    <a class="my-interest-aa" href="##" v-for="da in data.iList">
      <p>
        <span>{{da.iName}}</span>
        <i>{{da.iWord}}</i>
      </p>
      <img :src="da.iPic" alt="">
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "tx-my-section-con-inte",
        props:["data"]
    }
</script>

<style scoped>

</style>
