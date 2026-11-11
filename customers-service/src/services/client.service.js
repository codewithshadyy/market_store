
const Password = require("../utils/password")
const ClientRepo = require("../repositories/Client.repository")
const AppError = require("../utils/AppError")


class ClientService{

    async signup(email, roles, password){
       

        try {

          

        const existingClient = await ClientRepo.findClientByEmail(email)

        if(existingClient){
            throw new Error("oop! the email is taken, try another email")
        }

        const hashedPassword = await Password.hash(password, 10)

        const client = await ClientRepo.createClient({
            email,
            roles,
            password:hashedPassword
        })


        return client


        


            
        } catch (error) {

            throw new Error(`Error in client service signup:${error.message}`)
            
        }
    }

    async login(data){

        try {

            const {email, password} = data


            const client = await ClientRepo.findClientByEmail(email)


            if(!client){
                throw new AppError("Invalid email or password", 401);
                
            }

            const isMatch = await Password.compare(password, client.password)

            if(!isMatch){
                 throw new AppError("Invalid email or password", 401);
            }


            return client
            
        } catch (error) {

            throw new Error(`Error in login method of client service:${error.message}`)
            
        }
    }

    async findClientByEmail(email){

        return await ClientRepo.findClientByEmail(email)
    }


    async findClientById(id){

        try {

            const client = await ClientRepo.findClientById(id)

             if(!client){
                throw new Error(`Can't find the client by id in rep layer`)

            }

            return client
            
        } catch (error) {

            throw new Error(`Error finding client by id in service layer:${error.message}`)
            
        }
    }
}


module.exports = new ClientService()