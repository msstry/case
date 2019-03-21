<template>
    <div>
      <div class="my-history">
        <h3>{{data.dTitle}}</h3>
        <a href="##">更多<img src="static/img/m01.png" alt=""/></a>
      </div>
      <div class="my-his-list">
        <a href="##" v-for="da in data.dList">
          <img :src="da.dPic" alt=""/>
          <p>{{da.dName}}</p>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tx-my-section-do",
        props:["data"]
    }
</script>

<style scoped>

</style>
