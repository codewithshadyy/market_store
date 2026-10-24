

const ProductRepository =  require("../repositories/products.repository")

class ProductService{

    async createProduct(name, price, stock, category ){
        try {

            const existingProduct = await ProductRepository.findProductByname(name)

            if(existingProduct){
                const error = new Error("Oops product already exists")
                throw error
            }
              
            

            const product = await ProductRepository.createProduct({
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

    async findProducts(page = 1, limit = 10){

   try {


         const [products, totalProducts] = await Promise.all(
          [
              ProductRepositoryroductsRepository.findProducts(page, limit),
            ProductRepository.productsCount()
          ]
        )


        return {
            data:products,
            pagination:{
                currentPage:page,
                limit,
                totalProducts,
                totalPages: Math.ceil(totalProducts / limit)

            }
        }

    
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

        if(product){
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