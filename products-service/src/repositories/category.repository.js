
const categoryModel = require("../models/Category")

class CategoryRepository{



    async createCategory(data){
        
        const category = await categoryModel.create(data)


        return  category
    }



    async findCategoryById(id){
        const category = await categoryModel.findById(id)

        return category
    }




    async updateCategory(id, data){
       

        try {

            const category = await  categoryModel.findByIdAndUpdate(
                id,
                {$set:data},
                {new:true, runValidators:true}
            )

            return category
            
        } catch (error) {

            const error = new Error(`Error in product repo:${error.message}`)

            throw error
            
        }


    }



    async deleteCategory(id){
        try {

            const category = await  categoryModel.findByIdAndUpdate(
                id,
                {$set:{isDeleted:true, deletedAt:new Date()}},
                {new:true}
            )

            return category
            
        } catch (error) {

            const error = new Error(`Error deleting category:${error.message}`)

            throw error



            
        }
    }


async findCategories(){
    const category =  await categoryModel.find()

    return category
}


    
}


module.exports = new CategoryRepository()