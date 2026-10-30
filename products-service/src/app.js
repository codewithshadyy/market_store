require("dotenv").config()
const express  = require("express")
const categoryRoutes = require("./routes/category.routes")
const ProductsRoutes = require("./routes/product.routes")


const app = express()
app.use(express.json())

app.use("/category", categoryRoutes)
app.use("/products", ProductsRoutes)


app.use((err, req, res, next) => {

    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: err.message || "Internal server error"
    });

});



module.exports = app
