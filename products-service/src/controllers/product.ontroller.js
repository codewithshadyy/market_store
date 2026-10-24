

const ProductService = require("../services/product.service")


class ProductController{

    async createProduct(req, res, next){

        try {
            const {name, price, stock, category} = req.body


            if(!name ||  !price || !stock || !category){
                return res.status(400).json({message:"Sorry name and other field is required"})
            }

            const existingProduct = await ProductService.findProductByName(name)

            if(existingProduct){
                return res.status(400).json({message:"Product exists"})
            }

            const product = await ProductService.createProduct({
                name,
                price,
                stock,
                category,

            })

            return res.status(201).json({
                message:`${product.name} has been created`,
                data:product
            })
            
        } catch (error) {

            next(error)
            
        }
    }
}