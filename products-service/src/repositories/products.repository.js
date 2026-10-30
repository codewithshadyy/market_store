
const productModel = require("../models/Product")


class ProductRepository{

    async  createProduct(data){
         
        try {

            const {name, price, stock, category} = data
        
             const product = (await productModel.create(data)).populate("category", "name")
            
            return product
        } catch (error) {

            console.log(error.message)
            throw  new  Error("Error creating the product in repo")

          
            
            
        }
    }

    async findProductByname(name){
        return await productModel.findOne(name).populate( "category" ,"name")
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
        .populate("category", "name")

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
        return await productModel.findByIdAndDelete(id)
    }



}

module.exports = new ProductRepository()