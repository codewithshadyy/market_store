

const jwt = require("jsonwebtoken")

class Tokengenerator{

    async token(client){

        return await jwt.sign({id:client._id, roles:client.roles}, process.env.JWT_SECRET, {expiresIn:"1hr"})
    }


}

module.exports = new Tokengenerator()