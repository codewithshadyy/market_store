

const jwt = require("jsonwebtoken")

require("dotenv").config()

class Tokengenerator{

    async token(client){

        try {

            return await jwt.sign({id:client._id, roles:client.roles}, process.env.JWT_SECRET, {

            algorithm:"HS256",   
            expiresIn:"7d",
            issuer:process.env.TOKEN_ISSUER,
            audience:process.env.TOKEN_AUDIENCE
        })
            
        } catch (error) {

            console.log(error.message)
            
        }
    }


}

module.exports = new Tokengenerator()