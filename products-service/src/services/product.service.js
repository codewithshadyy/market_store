

const ProductRepository =  require("../repositories/products.repository")

const {redisClient} = require("../config/redis")

class ProductService{

    async createProduct(name, price, stock, category ){
        try {

            const existingProduct = await ProductRepository.findProductByname({name})

            if(existingProduct){
                throw  new Error("Oops product already exists")
                
            }
              
            

            const product = await ProductRepository.createProduct({
                name,
                price,
                stock,
                category
            })

            const data =  {
                id:product._id,
                name:product.name,
                price:product.price,
                stock:product.stock,
                category:product.category.name
            }

            return data
            
        } catch (error) {

            console.log(error.message)

          throw  new Error("product creation error in service");



            
            
            
        }
    }

    async findProducts(page = 1, limit = 10){

   try {

    const cacheKey = `product:page:${page}:limit:${limit}`
    
    const cachedProducts  = await redisClient.get(cacheKey)

    if(cachedProducts){
        return JSON.parse(cachedProducts)
    }


         const [products, totalProducts] = await Promise.all(
          [
              ProductRepository.findProducts(page, limit),
            ProductRepository.productsCount()
          ]
        )


        const results =  {
            data:products,
            source:"DB",
            pagination:{
                currentPage:page,
                limit,
                totalProducts,
                totalPages: Math.ceil(totalProducts / limit)

            }
        }

        await redisClient.set(cacheKey, JSON.stringify(results), {
            EX:60
        })

        return results

    
   } catch (error) {

    throw new Error("Error fetching products in service")
    
   }


        

    }

    async updateProduct(id, data){

       try {

         const product = await ProductRepository.updateProduct(
            id,
            data
        )

        if(!product){
            throw new Error("Product not found")
        }

        return product

        
       } catch (error) {
        throw new Error("Error updating product iin service")
        
       }

    }

    async deleteProduct(id){
       

        try {
             const product = await ProductRepository.deleteProduct(id)

        if(!product){
            throw new Error("product not found")
        }

        return product
            
        } catch (error) {

            throw new Error("Error deleting product")
            
        }
    }

    async findProductById(id){
       

        try {

            const product = await ProductRepository.findProductById(id)

        if(!product){
            throw new Error("Product not found")
        }

        return product
            
        } catch (error) {

            throw new Error("Error finding product")
            
        }
    }

    async findProductByName(name){
        return await ProductRepository.findProductByname(name)
    }


 





}

module.exports = new ProductService()