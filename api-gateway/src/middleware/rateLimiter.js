

const { rateLimit } = require("express-rate-limit");
const { RedisStore } = require("rate-limit-redis");

const redisClient = require("../config/redis");

const anonymousLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 20,

    standardHeaders: "draft-8",
    legacyHeaders: false,

    store: new RedisStore({
        sendCommand: (...args) => redisClient.sendCommand(args),
    }),

    keyGenerator: (req) => {
        return `anonymous:${req.ip}`;
    },

    message: {
        success: false,
        message: "Too many requests. Please try again later."
    }
});

module.exports = anonymousLimiter;