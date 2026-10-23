
const CategoryRepository = require("../repositories/category.repository")


class CategoryService{


    async createCategory(name){

        try {

            const categoryExists = await CategoryRepository.fndCategoryByName({name})

            if(categoryExists){
                throw new Error("Category Exists already, Try another name")
            }

            
            const category = await CategoryRepository.createCategory({
                name
            })

            
            
            return category
        } catch (error) {

            throw new  Error(`Error creating category:${error.message}`)
          
            
        }


    }


    async findCategoryById(id){
        try {

            const category = await CategoryRepository.findCategoryById(id)

            if(!category){
                throw new   Error("oops! category not found")

                
            }
            
        } catch (error) {

           throw  new Error(`Error finding Category:${error.message}`)
           
            
        }
    }


    async findCategories(){

        try {

        const data = await CategoryRepository.findCategories()

        return data
            
        } catch (error) {

            throw new Error(`Error fetching category:${error.message}`)

          
            
        }
        
    }

    async updateCategory(id, data){
        

    try {

        const categoryExists = await CategoryRepository.findCategoryById(id)

        if(!categoryExists){
            const error = new Error("Category does not exists")
        }

        const category = await CategoryRepository.updateCategory(id, data)

        return category


            
        } catch (error) {

            throw  new Error(`Error updating Category:${error.message}`)

            
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

            throw new Error(`Error deleting Category:${error.message}`)

            
            
        }

    }






    
}


module.exports = new CategoryService()

