

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
}