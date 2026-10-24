require("dotenv").config()
const express  = require("express")
const categoryRoutes = require("./routes/category.routes")
const ProductsRoutes = require("./routes/product.routes")


const app = express()
app.use(express.json())

app.use("/category", categoryRoutes)
app.use("/products", ProductsRoutes)



module.exports = app
