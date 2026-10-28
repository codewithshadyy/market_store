
const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },

    roles:{
        type:[String],
        enum:["client", "admin"],
        default:["client"]
    },

    password:{
        type:String
    }
}, {timestamps:true})

const client = mongoose.model("Client", clientSchema)

module.exports = client