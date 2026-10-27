
const Password = require("../utils/password")
const ClientRepo = require("../repositories/Client.repository")


class ClientService{

    async signup(data){
       

        try {

             const {email, roles, password} = data

        const existingClient = await ClientRepo.findClientByEmail(email)

        if(existingClient){
            throw new Error("oop! the email is taken, try another email")
        }

        const hashedPassword = await Password.hash(password, 10)

        const client = await ClientRepo.signup({
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

            const isMatch = await Password.compare(client.password, password)


            return client
            
        } catch (error) {

            throw new Error(`Error in login method of client srvice:${error.message}`)
            
        }
    }
}