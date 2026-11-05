


const {Pool} = require("pg")
require("dotenv").config()

const pool = new Pool({
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
})



pool.on("connect", () => {
    console.log("Orders database connected")
})

pool.on("error", (error) => {

    console.log(`Error connecting to the database:${error.message}`)

})



module.exports =pool
