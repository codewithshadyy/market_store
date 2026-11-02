
const {randomUUID} = require("crypto")

function requestId(req, res, next){

    const incoming = req.headers["x-request-id"]

    

     req.id = incoming || randomUUID()

    res.setHeader("X-Request-ID", req.id)

    next()
}


module.exports = requestId