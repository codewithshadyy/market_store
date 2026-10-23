require("dotenv").config()
const express  = require("express")
const categoryRoutes = require("./routes/category.routes")


const app = express()
app.use(express.json())

app.use("/category", categoryRoutes)



module.exports = app
