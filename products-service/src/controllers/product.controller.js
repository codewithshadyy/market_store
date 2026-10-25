


const ProductService = require("../services/product.service")


class ProductController{

    async createProduct(req, res, next){

        try {
            const {name, price, stock, category} = req.body


            if(!name ||  !price || !stock || !category){
                return res.status(400).json({message:"Sorry name and other field is required"})
            }

            const existingProduct = await ProductService.findProductByName({name})

            if(existingProduct){
                return res.status(400).json({message:"Product exists"})
            }

            const product = await ProductService.createProduct(
                name,
                price,
                stock,
                category    

            )

            console.log(product)

            return res.status(201).json({
                message:`${product.name} has been created`,
                data:product
            })
            
        } catch (error) {

            next(error)
            
        }
    }


    async updateProduct(req, res, next){

        try {

            const {id} = req.params
            const existingProduct = await ProductService.findProductById(id)

            if(!existingProduct){
                return res.status(404).json({

                    message:"Sorry product not found"
                })
            }

            const updatedProduct = await ProductService.updateProduct(
                id,
                req.body
            )

            return res.status(200).json({
                message:"Product updated successfully",
                data:updatedProduct
            })
            
        } catch (error) {

            next(error)
            
        }
    }

    async findProductById(req, res, next){

        try {

            const {id} = req.params

            const product = await ProductService.findProductById(id)

            if(!product){
                return res.status(404).json({
                    message:"Suggested product cannot be found"
                })
            }
            return res.status(200).json({
                source:"MongoDB",
                data:product
            })
        } catch (error) {

            next(error)
            
        }
    }



    async findProducts(req,res, next){

        try {
            const page = Number(req.query.page) || 1
            const limit = Number(req.query.limit) || 10

            const results = await ProductService.findProducts(page, limit)

            return res.status(200).json(results)

            
            
        } catch (error) {

            next(error)
            
        }
    }



    async findProductByName(req, res, next){

        try {

            const {name} = req.params

            const existingProduct = await ProductService.findProductByName(name)

            if(!existingProduct){
                return res.status(404).json({message:"suggested Product not found"})
            }

            return res.status(200).json(existingProduct)
            
        } catch (error) {

            next(error)
            
        }
    }


    async deleteProduct(req, res, next){

        try {

            const {id} = req.params

            const product = await ProductService.deleteProduct(id)

            return res.status(200).json({message:'product deleted successfully'})
            
        } catch (error) {

            next(error)
            
        }
    }

    
}


module.exports = new ProductController()