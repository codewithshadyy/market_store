
const express = require("express")
const router = express.Router()
const axios = require("axios")

require("dotenv").config()

const productClient =  axios.create({
    baseURL:process.env.PRODUCT_SERVICE_URL,
    timeout:3000
})


router.get("/", async(req, res, next) => {

    try {

        const response = await productClient.get("/products", {
            params:req.query
        })

        return res.status(response.status).json(response.data)


        
    } catch (error) {

        next(error)
        
    }
})



module.exports = router

