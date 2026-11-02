




const {pinoHttp} = require("pino-http")
const logger = require("../observability/logger")



const requestLogger = pinoHttp({
    logger,
    genReqId:(req) => req.id,
    customProps:(req) => ({
        requestId:req.id,
        service:"products-service"
    }),

    customLogLevel:(req, res, err) => {

        if(err || res.statusCode >= 500){
            return "error"
        }

        if( res.statusCode >= 400){
            return "warn"
        }

        return "info"


    }
})

module.exports = requestLogger