<template>
  <div id="aa">
    <tx-yoo-header v-if="tencentinfo.yooHeader" :data="tencentinfo.yooHeader"></tx-yoo-header>
    <div id="bb"><tx-yoo-section v-if="tencentinfo.yooSectionList" :data="tencentinfo.yooSectionList"></tx-yoo-section></div>
    <tx-footer></tx-footer>
  </div>
</template>

<script>
    import txYooHeader from "../txYoo/txYooHeader"
    import txYooSection from "../txYoo/txYooSection"
    import txFooter from "../common/txFooter"
    import TenCentApi from "../../../apis/TencentApi"

    export default {
      name: "tx-yoo",
      components:{
          txYooHeader,
          txYooSection,
          txFooter
      },data(){
        return {
          tencentinfo:{}
        }
      },
      methods:{
        __initData(){
          TenCentApi.getTencent(data=>{
            // console.log(data.data.yooInfo)
            this.tencentinfo = data.data.yooInfo
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
