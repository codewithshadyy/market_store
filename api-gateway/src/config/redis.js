

const {createClient} = require("redis")
require("dotenv").config()


const redisClient = createClient({
    url:process.env.REDIS_URL
})

redisClient.on("error", (err) => {
    console.log("Error in redis", err.message)
})

async function connectRedis(){


    try {

        if(!redisClient.isOpen){
            await redisClient.connect()
            console.log("Connected to the redis successfully")
        }
        
    } catch (error) {

        console.log(`Error connecting to the redis`)
        console.log(`Error:${error.message}`)
        throw error
        
    }
}


module.exports = {
    redisClient,
    connectRedis
}