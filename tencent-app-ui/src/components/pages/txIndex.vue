<template>
  <div id="aa">
    <tx-index-header v-if="tencentinfo.indexHeader" :data="tencentinfo.indexHeader"></tx-index-header>
    <!--<tx-index-section v-if="tencentinfo.indexSection" :data="tencentinfo.indexSection"></tx-index-section>-->
    <div id="bb"><router-view  v-if="tencentinfo.indexSection" :data="tencentinfo.indexSection"></router-view></div>
    <tx-footer></tx-footer>
  </div>
</template>

<script>
  import txIndexHeader from "../txIndex/txIndexHeader"
  import txIndexSection from "../txIndex/txIndexSection"
  import txFooter from "../common/txFooter"
  import TenCentApi from "../../../apis/TencentApi"
    export default {
        name: "tx-index",
        components:{
          txIndexHeader,
          txIndexSection,
          txFooter
        },
        data(){
          return {
            tencentinfo:{}
          }
        },
        methods:{
          __initData(){
            TenCentApi.getTencent(data=>{
              // console.log(data.data.indexInfo)
              this.tencentinfo = data.data.indexInfo
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
