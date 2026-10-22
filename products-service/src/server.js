

require("dotenv").config()
const  app = require("./app")
const {connectDB} = require("../src/config/db")








connectDB().then(
    app.listen(process.env.PORT, () => {
        console.log(`Product service running on:http://localhost:${process.env.PORT}`)
    })
)