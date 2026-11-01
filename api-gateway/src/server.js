

const app = require("./app")
const {connectRedis} = require("./config/redis")





 
async function startServer(){

    try {

        app.listen(process.env.PORT, () => {
            console.log("API gateway started successfully")
            console.log(`http://localhost:${process.env.PORT}`)
        })

        await connectRedis()

        
        
    } catch (error) {

        throw new Error(`Error stating API gateway:${error.message}`)
        
    }

}

startServer()