

const mongoose = require("mongoose")


async function connectDB(){
    try {

         await mongoose.connect(process.env.MONGODB_URL)

         console.log("MongoDB connected successfully ")
        

        
        
    } catch (error) {
        console.error(`Error connecting to mongoDB:${error.message}`)
        
    }
}
