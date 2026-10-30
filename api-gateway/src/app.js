const express = require("express")
const app = express()

const proxy = require("express-http-proxy")

const routes = require("../src/routes/index")


require("dotenv").config()
app.use(express.json())

app.use("/api/v1", routes)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});


app.use((err, req, res, next) => {

    if (err.response) {
        return res.status(err.response.status).json(
            err.response.data
        );
    }

    if (err.code === "ECONNABORTED") {
        return res.status(504).json({
            success: false,
            message: "Product service timed out"
        });
    }

    if (err.request) {
        return res.status(502).json({
            success: false,
            message: "Product service unavailable"
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal gateway error"
    });
});




















module.exports = app