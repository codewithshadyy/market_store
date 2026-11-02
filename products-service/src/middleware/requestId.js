
const {randomUUID} = require("crypto")

function requestId(req, res, next){

    const incoming = req.headers["x-request-id"]

    const id = randomUUID()

     req.id = incoming || id

    res.setHeader("X-Request-ID", id)

    next()
}


module.exports = requestId