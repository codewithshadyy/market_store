

const ClientService = require("../services/client.service")


class ClientController{


    async signup(req, res, next){

        try {

            const {email, roles, password} = req.body

            const existingClient = await
            
        } catch (error) {
            next(error)
            
        }
    }
}