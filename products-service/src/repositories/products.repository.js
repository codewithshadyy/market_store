
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


    async findProductById(id){
        const product = await productModel.findById(id)

        return product
    }


    async findProducts(){
        const products = await productModel.find()

        return products
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