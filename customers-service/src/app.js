
const express = require("express")
const app = express()


const clientRoutes = require("./routes/client.routes")

app.use(express.json())


app.use("/clients", clientRoutes)














module.exports  =  app