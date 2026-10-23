
const CategoryRepository = require("../services/category.services")


class CategoryService{
    async createCatgegory(name){

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
}