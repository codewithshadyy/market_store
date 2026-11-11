const axios = require("axios")
const express = require('express')
const router = express.Router()
require('dotenv').config()

const AppError = require("../utils/AppError")

const customerClient = axios.create({
    baseURL:process.env.CUSTOMER_SERVICE_URL,
    timeout:3000
})



router.post("/register", async(req, res, next) => {

    try {

        const response = await customerClient.post("/clients/register", 
            req.body,
            
        )

        return res.status(response.status).json(response.data)
        
    } catch (error) {

        next(error)
        
    }
})


router.post("/login", async(req, res, next) => {

    try {

        const response = await customerClient.post("/clients/login", 
            req.body,
            {
                headers:{
                    "X-Request-ID":req.id
                }
            }
        )

        if(!response){
        throw new AppError("Invalid email or password", 401)
        }

        return res.status(response.status).json(response.data)
        
    } catch (error) {

        next(error)
        
    }
})

router.get("/:id", async(req, res, next) => {

    try {
        const {id} = req.params

        const response = await customerClient.get(`clients/${id}`, {
            params:req.params
        })

        console.log(response.message)

        if(!response){
        throw new AppError("Client not Found", 404)
        }
        
        return res.status(200).json({
            data:response
        })
    } catch (error) {

        next(error)
        
    }

})

module.exports = router