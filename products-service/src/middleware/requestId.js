
const {randomUUID} = require("crypto")

function requestId(req, res, next){

    const incoming = req.headers["x-request-id"]

    const id = incoming || randomUUID()

    res.setHeader("X-Random-ID", id)

    next()
}


module.exports = requestId