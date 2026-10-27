

const clientModel = require("../models/Client")



class ClientRepository{


    async createClient(email, roles, password){

        try {

            const data = await clientModel.create({
                email,
                roles,
                password
            })

            return data
            
        } catch (error) {

            throw new Error(`Error in client repo:${error.message}`)
            
        }

    }

    async findClientByEmail(email){

        try {

            const client = await clientModel.findOne(email)

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