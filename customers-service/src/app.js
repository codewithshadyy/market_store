
const express = require("express")
const app = express()

const requestId = require("./middleware/requestId")
const requestLogger = require("./middleware/requestLogger")


const clientRoutes = require("./routes/client.routes")



app.use(requestId)
app.use(requestLogger)
app.use(express.json())


app.use("/clients", clientRoutes)














module.exports  =  app