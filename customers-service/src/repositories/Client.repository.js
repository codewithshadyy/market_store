

const clientModel = require("../models/Client")



class ClientRepository{


    async createClient(data){

        try {
            const {  email,roles,password}  = data
            const client = (await clientModel.create(data))

            return client
            
        } catch (error) {

            throw new Error(`Error in client repo:${error.message}`)
            
        }

    }

    async findClientByEmail(email){

        try {

            const client = await clientModel.findOne({email:email}).select("-password")

            return client
            
        } catch (error) {

            throw new Error(`Error in user repo:${error.message}`)
            
        }
    }


    async findClientsByRoles(roles){

        try {

            const clients = await clientModel.find(roles)

            return clients
            
        } catch (error) {

            throw new Error(`Error in client repo:${error.message}`)
            
        }


    }
}



module.exports = new ClientRepository()