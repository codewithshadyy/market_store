
const mongoose = require("mongoose")


const categorySchema = new mongoose.Schema({
    category:String
}, {timestamps:true})

const category = mongoose.model("Category", categorySchema)

module.exports = category