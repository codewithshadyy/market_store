
const CategoryRepository = require("../services/category.services")


class CategoryService{


    async createCategory(name){

        try {

            
            const category = await CategoryRepository.CategoryRepository(name)

            if(category){
                const error = new Error("oops category Exists")

                throw error
            }
            
            return category
        } catch (error) {

            const error = new  Error(`Error creating category:${error.message}`)
            throw error
            
        }


    }


    async findCategoryById(id){
        try {

            const category = await CategoryRepository.findCategoryById(id)

            if(!category){
                const error  = new  Error("oops! category not found")

                throw error
            }
            
        } catch (error) {

           const error =  new Error(`Error finding Category:${error.message}`)
           return error
            
        }
    }


    async findCategory(){

        try {

        const data = await CategoryRepository.findCategory()

        return data
            
        } catch (error) {

            const error = new error(`Error fetching category:${error.message}`)

            throw error
            
        }
        
    }

    async updateCategory(id, data){
        

    try {

        const categoryExists = await CategoryRepository.findCategoryById(id)

        if(!categoryExists){
            const error = new Error("Category does not exists")
        }

        const category = await CategoryRepository.updateCategory(data)

        return category


            
        } catch (error) {

            const error = new error(`Error updating Category:${error.message}`)

            throw error
            
        }
    }




    async deleteCategory(id){

        try {

        const categoryExists = await CategoryRepository.findCategoryById(id)

        if(!categoryExists){
            const error = new Error("Category does not exists")
        }

        const category = await CategoryRepository.deleteCategory(id)

        return category


            
        } catch (error) {

            const error = new Error(`Error deleting Category:${error.message}`)

            throw error
            
        }

    }






    
}


module.exports = new CategoryService()

