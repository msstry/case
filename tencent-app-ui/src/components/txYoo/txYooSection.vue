<template>
  <div class="yoo-section">
    <tx-yoo-section-list :data="data"></tx-yoo-section-list>
  </div>
</template>

<script>
  import txYooSectionList from "./txYooSectionList"
    export default {
        name: "tx-yoo-section",
        props:["data"],
        components:{
          txYooSectionList
        }
    }
</script>

<style scoped>

</style>
