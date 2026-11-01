
const {redisClient} = require("../config/redis")
const {RateLimiterRedis} = require("rate-limiter-flexible")

const rateLimiter =  new RateLimiterRedis({

    storeClient:redisClient,
    keyPrefix:"rateLimiter",
    points:100,
    duration:60
    
})

module.exports = rateLimiter