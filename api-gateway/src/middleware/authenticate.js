




const jwt = require("jsonwebtoken")

require('dotenv').config()



class Authenticate{

    async protect(req, res, next){


        try {

            let token

            if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
                token = req.headers.authorization.split(" ")[1]
            }

            if(!token){
                return res.status(400).json({message:"A token is required"})
            }

            const decoded = await jwt.sign(
                token,
                process.env.JWT_SECRET,
                {
                    algorithm:['HS256'],
                    issuer:process.env.TOKEN_ISSUER,
                    audience:process.env.TOKEN_AUDIENCE
                }
            )

            req.user = {
                id:decoded._id,
                role:decoded.roles
            }

            next()
           
        } catch (error) {

            return res.status(401).json({message:"Invalid token"})


            
        }
    }
}

module.exports = new Authenticate()