

require('dotenv').config()
const jwt = require("jsonwebtoken")


exports.authenticate = async(client) =>{

    return await jwt.sign({id:client._id, email:client.email, role:client.roles},
         process.env.JWT_SECRET,
          {expiresIn:"1hr"})
}

