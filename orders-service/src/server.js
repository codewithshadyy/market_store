

const app = require("./app")
const {dbConnection} = require("./config/db")

require("dotenv").config()








async function startServer(){

    try {

        await dbConnection()
        app.listen(process.env.PORT, () => {
            console.log("Oredrs Service started well")
            console.log(`http://localhost:${process.env.PORT}`)
        })
        
    } catch (error) {


        console.log("error starting the server:", error.message)
        process.exit(1)
        
    }
}


startServer()