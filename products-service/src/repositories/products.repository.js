
const productModel = require("../models/Product")


class CustomerRepository{

    async  createProduct(productData){
         
        try {
            const product = await productModel.create({productData})
            
            return product
        } catch (error) {
            throw Error("Error creating the product in repo", error.message)
            
        }
    }



}