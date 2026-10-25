

const {createClient} = require("redis")

const redisClient = createClient({
    url:process.env.REDIS_URL
})


async function connnectRedis(){

    if(!redisClient.isOpen){
        await redisClient.connect()

        console.log("Redis connected successfully")
    } else{
        console.log("Failed to connect to the redis")
    }


}

module.exports = {
    redisClient,
    connnectRedis
}