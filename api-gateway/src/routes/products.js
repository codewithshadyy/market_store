
const express = require("express")
const router = express.Router()
const axios = require("axios")

const Authenticate = require("../middleware/authenticate")
const Authorize = require("../middleware/authorize")



require("dotenv").config()

const productClient =  axios.create({
    baseURL:process.env.PRODUCT_SERVICE_URL,
    timeout:3000
})


router.get("/", Authenticate.protect, Authorize.roleCheck("admin", "client"), async(req, res, next) => {

    try {

        

        const response = await productClient.get("/products", {
            params:req.query,
              headers: {
        Authorization: req.headers.authorization
    }
        })

        return res.status(response.status).json(response.data)


        
    } catch (error) {

        next(error)
        
    }
})




router.post("/create", Authenticate.protect , async (req, res, next) => {

    try {

        const response = await productClient.post("/products/create", req.body)

        console.log(typeof(Authenticate.protect))


        return res.status(response.status).json(response.data)
        
    } catch (error) {

        next(error)
        
    }
    
})



router.put("/edit/:id", async (req, res, next) => {

    try {

        const {id} = req.params

        const response = await productClient.put(`products/edit/${id}`, req.body)

       

        return res.status(response.status).json(response.data)
        
    } catch (error) {

        next(error)
        
    }
    
})

router.delete("/delete/:id", async (req, res, next) => {

    try {

        const {id} = req.params

        const response = await productClient.delete(`products/delete/${id}`, {
            params:req.params
        })

       

        return res.status(response.status).json(response.data)
        
    } catch (error) {

        next(error)
        
    }
    
})


router.get("/:id", async (req, res, next) => {

    try {

        const {id} = req.params

        const response = await productClient.get(`products/${id}`, {
            params:req.query
        })

        
       

        return res.status(response.status).json(response.data)
        
    } catch (error) {

        next(error)
        
    }
    
})




module.exports = router

