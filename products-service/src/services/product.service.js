
const productsRepository = require("../repositories/products.repository");
const ProductRepository =  require("../repositories/products.repository")

class ProductService{

    async createProduct(name, price, stock, category ){
        try {

            const existingProduct = await productsRepository.findProductByname(name)

            if(existingProduct){
                const error = new Error("Oops product already exists")
                throw error
            }

            const product = await productsRepository.createProduct({
                name,
                price,
                stock,
                category
            })

            const data =  {
                id:product._id,
                price:product.price,
                stock:product.stock,
                category:product.category.name
            }

            return data
            
        } catch (error) {

          const error =   new Error("product creation error in service");

          throw error


            
            
            
        }
    }

 





}

module.exports = new ProductService()