const express = require("express")
const app = express()

const proxy = require("express-http-proxy")


require("dotenv").config()
app.use(express.json())

app.use("/", proxy(process.env.PRODUCT_SERVICE_URL))




















module.exports = app