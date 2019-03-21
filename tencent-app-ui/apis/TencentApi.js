import {TENCENTURL} from "./commons/Ajaxs"
import Api from "./commons/Api"

export default {
  getTencent(cb){
    Api.get(TENCENTURL,cb)
  }
}
