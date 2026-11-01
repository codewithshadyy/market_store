

const {connectRedis} = require("./config/redis")





 
async function startServer(){

    try {

         await connectRedis()


       const app = require("./app")

        app.listen(process.env.PORT, () => {
            console.log("API gateway started successfully")
            console.log(`http://localhost:${process.env.PORT}`)
        })

       

        
        
    } catch (error) {

        throw new Error(`Error stating API gateway:${error.message}`)
        
    }

}

startServer()