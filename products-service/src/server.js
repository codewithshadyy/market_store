

require("dotenv").config()
const  app = require("./app")
const {connectDB} = require("../src/config/db")

const {connnectRedis} = require("./config/redis")








async function startServer(){


try {
    await connectDB()
    
} catch (error) {
    console.log(`Error connecting to DB:${error.message}`)
    
}

try {

    await connnectRedis()
    
} catch (error) {

    console.log(`Error connecting to redis:${error.message}`)
    
}



 app.listen(process.env.PORT, () => {
        console.log(`Product service running on:http://localhost:${process.env.PORT}`)
    })



}

startServer()



