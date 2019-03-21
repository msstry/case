<template>
  <div id="aa">
    <tx-my-header v-if="tencentinfo.myHeader" :data="tencentinfo.myHeader"></tx-my-header>
    <div id="bb"><tx-my-section v-if="tencentinfo.mySection" :data="tencentinfo.mySection"></tx-my-section></div>
    <tx-footer></tx-footer>
  </div>
</template>

<script>
  import txMyHeader from "../txMy/txMyHeader"
  import txMySection from "../txMy/txMySection"
  import txFooter from "../common/txFooter"
  import TenCentApi from "../../../apis/TencentApi"
    export default {
        name: "tx-my",
        components: {
          txMySection,
          txMyHeader,
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
            console.log(data.data.myInfo)
            this.tencentinfo = data.data.myInfo
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
