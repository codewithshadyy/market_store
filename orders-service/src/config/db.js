


const {Pool} = require("pg")
require("dotenv").config()

const pool = new Pool({
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
})


async function dbConnection(){

    try {

        pool.connect()
        console.log("Postgresql connected successfully")
        
    } catch (error) {
        console.log(`Erro connecting to postgresql:${error.message}`)
        
    }
}


module.exports = {
    pool, dbConnection
}