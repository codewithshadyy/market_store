


const app = require("./app")
const connectDB = require("./config/db")

require("dotenv").config()





async function startServer(){

    await connectDB()


    app.listen(process.env.PORT, () => {
        console.log(`server running on http://localhost:${process.env.PORT}`)
    })
}

startServer()