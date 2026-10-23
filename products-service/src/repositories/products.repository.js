
const productModel = require("../models/Product")


class ProductRepository{

    async  createProduct(productData){
         
        try {
        
             const product = await productModel.create({productData})
            
            return product
        } catch (error) {
            throw  new  Error("Error creating the product in repo", error.message)

          
            
            
        }
    }

    async findProductByname(name){
        return await productModel.findOne(name).populate( "category" ,"price stock description")
    }


    async findProductById(id){
        const product = await productModel.findById(id).populate("category" ,"name price stock description")

        return product
    }


    async findProducts(page = 1, limit = 10){

        const skip = (page - 1) * limit

        const products = await productModel
        .find()
        .skip(skip)
        .limit(limit)

        return products
    }

    async productsCount(){

        const productCount = await productModel.countDocuments()

        return productCount      
    }

    async  updateProduct(id, productData){
        const product = await productModel.findByIdAndUpdate(
            id,
            {$set:productData},
            {new:true, runValidators:true}
        )

        return product

        
    }

    async deleteProduct(id){
        return await productModel.findByIdAndUpdate(
            id,
            {$set: {isDeleted:true, deletedAt:new Date()}},
            {new:true}
        )
    }



}

module.exports = new ProductRepository()