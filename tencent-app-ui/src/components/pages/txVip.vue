<template>
  <div id="aa">
    <tx-vip-header v-if="tencentinfo.vipHeader" :data="tencentinfo.vipHeader"></tx-vip-header>
    <div id="bb"><tx-vip-section v-if="tencentinfo.vipSection" :data="tencentinfo.vipSection"></tx-vip-section></div>
    <tx-footer></tx-footer>
  </div>
</template>

<script>
  import txVipHeader from "../txVip/txVipHeader"
  import txVipSection from "../txVip/txVipSection"
  import txFooter from "../common/txFooter"
  import TenCentApi from "../../../apis/TencentApi"
  export default {
        name: "tx-vip",
      components:{
          txVipHeader,
          txVipSection,
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
            // console.log(data.data.vipInfo)
            this.tencentinfo = data.data.vipInfo
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
