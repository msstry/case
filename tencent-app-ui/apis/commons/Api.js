import Axiods from "axios"

const BaseUrl = "http://127.0.0.1:3000"
class FetxhApi{

  get(url,cb){
    /***
     * 通过get获取数据
     */
    fetch(`${BaseUrl}/${url}`).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
class AxiosApi {
  get(url,cb){
    Axiods.get(`${BaseUrl}/${url}`).then(res=>{
      cb(res.data)
    })
  }
}

export default new AxiosApi()

