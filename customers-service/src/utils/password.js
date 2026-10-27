

const bcrypt = require("bcrypt")

class Password{

    async hash(password, salt){

        try {

            const HashedPassword = await bcrypt.hash(password, salt)

            return HashedPassword
            
        } catch (error) {

            throw new Error(`Error hashiing password:${error.message}`)
            
        }
    }

    async compare(clientPassword, password){

        try {

            const isMatch = await bcrypt.compare(clientPassword, password)

            return isMatch
            
        } catch (error) {
            throw new Error(`Error comparing password:${error.message}`)
            
        }
    }
}


module.exports = new Password()