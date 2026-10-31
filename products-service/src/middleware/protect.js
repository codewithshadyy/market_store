

const jwt = require("jsonwebtoken")



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

            const decoded = await jwt.sign(token)

            req.user = decoded

            next()
           
        } catch (error) {

            return res.status(401).json({message:"Invalid token"})


            
        }
    }
}

module.exports = new Authenticate()