

const bcrypt = require("bcrypt")

class Password{

    async hash(password, salt){

        try {

            const HashedPassword = await bcrypt.hash(password, 10)

            return HashedPassword
            
        } catch (error) {

            throw new Error(`Error hashiing password:${error.message}`)
            
        }
    }
}