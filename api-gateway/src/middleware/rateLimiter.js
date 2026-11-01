
const rateLimiter = require("../utils/redis.rate.limiter")

class RateLimit{

    async limit(req, res, next){

        try {

            await rateLimiter.consume(req.ip)
            next()


            
        } catch (error) {

            return res.status(429).json({
                message:"Too Many Requests. Please try again later."
            })
            
        }
    }
}

module.exports = new RateLimit()