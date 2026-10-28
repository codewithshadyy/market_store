

const ClientService = require("../services/client.service")


class ClientController{


    async signup(req, res, next){

        try {

            const {email, roles, password} = req.body

            const existingClient = await ClientService.findClientByEmail(email)

            if(existingClient){
                return res.status(400).json({message:"email takemn"})
            }

            const client = await ClientService.signup({
                email,
                roles,
                password
            })

            return res.status(201).json({
                message:"Client created successfully",
                data:client
            })
            
        } catch (error) {
            next(error)
            
        }
    }
}



module.exports = new ClientController()