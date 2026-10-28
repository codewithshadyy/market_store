
const Password = require("../utils/password")
const ClientRepo = require("../repositories/Client.repository")


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
                throw new Error("Invalid email or password");
                
            }

            const isMatch = await Password.compare(password, client.password)

            if(!isMatch){
                throw new Error("Inalid credentials")
            }


            return client
            
        } catch (error) {

            throw new Error(`Error in login method of client service:${error.message}`)
            
        }
    }

    async findClientByEmail(email){

        return await ClientRepo.findClientByEmail(email)
    }
}


module.exports = new ClientService()