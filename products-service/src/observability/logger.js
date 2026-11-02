




const pino = require("pino")

require("dotenv").config()


const logger = pino({
    level:process.env.LOG_LEVEL,
    timestamp:pino.stdTimeFunctions.isoTime,
    formatters:{
        level(label){
            return {
                level:label
            }
        }
    },

    redact:{
       paths: [
            "req.headers.authorization",
            "password",
            "token",
            "*.password",
            "*.token"
        ],

        censor:["Redacted"]
    }
})


module.exports = logger
const pino = require("pino")

require("dotenv").config()


const logger = pino({
    level:process.env.LOG_LEVEL,
    timestamp:pino.stdTimeFunctions.isoTime,
    formatters:{
        level(label){
            return {
                level:label
            }
        }
    },

    redact:{
       paths: [
            "req.headers.authorization",
            "password",
            "token",
            "*.password",
            "*.token"
        ],

        censor:["Redacted"]
    }
})


module.exports = logger