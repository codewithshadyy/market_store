

const ClientService = require("../services/client.service")
const Tokengenerator = require("../middleware/token")


class ClientController{


    async signup(req, res, next){

        try {

            const {email, roles, password} = req.body

            const existingClient = await ClientService.findClientByEmail(email)

            if(existingClient){
                return res.status(400).json({message:"email takemn"})
            }

            const client = await ClientService.signup(
                email,
                roles,
                password
            )

            const token = await Tokengenerator.token(client)

            return res.status(201).json({
                message:"Client created successfully",
                data:client,
                token
            })
            
        } catch (error) {
            next(error)
            
        }
    }



      async  login(req, res, next){


        try {

        const client = await ClientService.login(req.body)

        const token = await Tokengenerator.token(client)

        return res.status(200).json({
            message: "Login successful",
            client,
            token
        })


        } catch (error) {

            next(error)
            
        }


      }
}



module.exports = new ClientController()