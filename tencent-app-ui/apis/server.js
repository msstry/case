const path = require("path")
const express = require("express")
const app = express()
const data = require("./tencentInfo")
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
})
app.get("/api/user",(req,res)=>{
    res.json({
        data
    })
})

app.listen(3000,()=>{
    console.log("ss");
})