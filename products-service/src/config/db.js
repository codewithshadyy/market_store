

const mongoose = require('mongoose')
require("dotenv").config()

exports.connectDB = async () => {

    try {

        const conn =  await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected successfully at:${conn.Connection.host} `)
        
        
    } catch (error) {

        throw Error("Error connecting to the database", error.message)
        
    }
    
}