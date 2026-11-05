

const app = require("./app")
const pool = require("./config/db")

require("dotenv").config()








async function startServer(){

    try {

        pool.query("SELECT NOW()")

        console.log(`Order service running on:http://localhost:${process.env.PORT}`)

        
        
    } catch (error) {


        console.log("Failed to start the order service:", error.message)
        process.exit(1)
        
    }
}


startServer()