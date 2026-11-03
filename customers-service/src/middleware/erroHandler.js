
const logger = require("../observability/logger")


function errorHandler(err, req, res, next){

    const statusCode = err.statusCode || 500

    logger.error({
        err,
        requestId:req.id,
        service:'api-gateway',
        method:req.method,
        url:req.originalUrl
    }, "Request failed")


    return res.status(statusCode).json({
        success:false,
        message:statusCode === 500 ? "Internal server Error" : err.message,
        requestId:req.id
    })


}

module.exports = errorHandler