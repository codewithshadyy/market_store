const logger = require("../observability/logger")

function errorHandler(err, req, res, next) {




 
    if (res.headersSent) {
        return next(err)
    }

    const statusCode =
        err.isOperational &&
        Number.isInteger(err.statusCode) &&
        err.statusCode >= 400 &&
        err.statusCode <= 599
            ? err.statusCode
            : 500

    logger.error({
        error: {
            name: err.name,
            message: err.message,
            code: err.code
        },
        requestId: req.id,
        service: "api-gateway",
        method: req.method,
        url: req.originalUrl
    }, "Request failed")

    return res.status(statusCode).json({
        success: false,
        message: err.isOperational && statusCode !== 500
            ? err.message
            : "Internal server error",
        requestId: req.id
    })
}

module.exports = errorHandler