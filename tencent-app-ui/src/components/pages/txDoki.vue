<template>
  <div id="aa">
    <tx-doki-header v-if="tencentinfo.doKiHeader" :data="tencentinfo.doKiHeader"></tx-doki-header>
    <div id="bb"><tx-doki-section v-if="tencentinfo.doKiSection" :data="tencentinfo.doKiSection"></tx-doki-section></div>
    <tx-footer></tx-footer>
  </div>
</template>

<script>
    import txDokiHeader from "../txDoki/txDokiHeader"
    import txDokiSection from "../txDoki/txDokiSection"
    import txFooter from "../common/txFooter"
    import TenCentApi from "../../../apis/TencentApi"
    export default {
      name: "tx-doki",
      components:{
        txDokiHeader,
        txDokiSection,
        txFooter
      },
      data(){
        return{
          tencentinfo:{}
        }
      },
      methods:{
        __initData() {
          TenCentApi.getTencent(data => {
            // console.log(data.data.doKiInfo)
            this.tencentinfo = data.data.doKiInfo
          })
        }
      },
      created(){
        this.__initData()
      }
    }
</script>

<style scoped>
  #aa{
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
  }
  #bb{
    flex: 1;
    overflow-y: auto;
  }
</style>
