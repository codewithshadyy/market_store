

require("dotenv").config()
const mongoose  = require("mongoose")


const customerSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    roles:{
        type:String,
        enum:["customer", "admin", "seller"],
        default:["customer"]
    },
    password:{
        type:String
    }
}, {timestamps:true})

const customer = mongoose.model("Customer", customerSchema)