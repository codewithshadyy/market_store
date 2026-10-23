

require("dotenv").config()
const mongoose  = require("mongoose")
const {Schema} = require('mongoose')


const customerSchema = new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:true
  },
  price:{
    type:Number,
    required:true,
    min:0,
    default:0
  },
  stock:{
    type:Number,
    required:true,
    min:0,
    default:0

  },
  description:Text,
  category:{
    type:Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  banner:String

}, {timestamps:true})

const product = mongoose.model("Product", productSchema)

module.exports = product