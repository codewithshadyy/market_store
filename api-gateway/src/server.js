

const {connectRedis} = require("./config/redis")


const logger = require("./observability/logger")





 
async function startServer(){

    try {

         await connectRedis()


       const app = require("./app")

        app.listen(process.env.PORT, () => {

            logger.info({
                service:"api-gateway",
                port:8001
            }, "API Gateway started successfuly ")
            console.log("API gateway started successfully")
            console.log(`http://localhost:${process.env.PORT}`)
        })

       

        
        
    } catch (error) {

        throw new Error(`Error stating API gateway:${error.message}`)
        
    }

}

startServer()