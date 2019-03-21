<template>
  <div class="my-section">
    <tx-my-section-vip :data="data.myVip"></tx-my-section-vip>
    <tx-my-section-jl :data="data.myMess"></tx-my-section-jl>
    <tx-my-section-con :data="data.myHistory"></tx-my-section-con>
    <tx-my-section-do :data="data.myDownload"></tx-my-section-do>
    <tx-my-section-con-inte :data="data.myInterest"></tx-my-section-con-inte>
  </div>
</template>

<script>
    import txMySectionJl from "./txMySectionJl";
    import txMySectionCon from "./txMySectionCon";
    import txMySectionConInte from "./txMySectionConInte";
    import txMySectionVip from "./txMySectionVip";
    import txMySectionDo from "./txMySectionDo";

    export default {
      components: {
        txMySectionDo,
        txMySectionVip,
        txMySectionConInte,
        txMySectionCon,
        txMySectionJl},
      name: "tx-my-section",
      props:["data"]
    }
</script>

<style scoped>

</style>
