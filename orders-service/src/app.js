const express = require("express")
const app = express()





app.use(express.json())

app.get("/", (req, res) =>{
    return res.status(200).json({
        success:true,
        message:"Order service running"
    })
})






module.exports = app