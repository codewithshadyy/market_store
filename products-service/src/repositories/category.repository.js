
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


    
}