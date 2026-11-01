

const {createClient} = require("redis")
require("dotenv").config()


const redisClient = createClient({
    url:process.env.REDIS_URL
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
        
    }
}


module.exports = {
    redisClient,
    connectRedis
}