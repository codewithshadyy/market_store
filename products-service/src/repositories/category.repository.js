
const categoryModel = require("../models/Category")

class CategoryRepository{



    async createCategory(data){
        
        const category = await categoryModel.create(data)


        return  category
    }

    async fndCategoryByName(name){
       return  await categoryModel.findOne(name)
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

            throw new Error(`Error in product repo:${error.message}`)

            
            
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

            throw new Error(`Error deleting category:${error.message}`)

            



            
        }
    }


async findCategories(){
    const category =  await categoryModel.find()

    return category
}


    
}


module.exports = new CategoryRepository()