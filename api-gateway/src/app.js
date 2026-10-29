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




















module.exports = app