

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

            const client = await clientModel.findOne({email:email})

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


    async findClientById(id){
        try {

            const client = await clientModel.findById(id)

            if(!client){
                throw new Error(`Can't find the client by id in rep layer`)

            }

            return client
            
        } catch (error) {

            throw new Error(`Error in finding client by ID in repository layer`)
            
        }
    }
}



module.exports = new ClientRepository()