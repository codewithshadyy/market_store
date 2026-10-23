


const CategoryService = require("../services/category.services")

class CategoryController{


    async createCategory(req,res, next){

        try {

            const {name} = req.body

            if(!name){
                return res.status(400).json({message:"Name is required"})
            }

            const category = await categoryServices.createCategory(name)

            return res.status(201).json({
                message:"Category created successfully",
                category
            })
            
        } catch (error) {

            next(error)
            
        }
    }

async findcategoryById(req,res,next){

    try {
        const {id} = req.params

        const category = await CategoryService.findcategoryById(id)

        if(!category){
            return res.status(404).json({message:"Not found!!!"})
        }

        return res.status(200).json(category)
        
    } catch (error) {

        next(error)
        
    }
}

async updatecategory(req, res, next){


    try {

        const {id} = req.params
        const category = await CategoryService.updateCategory(
            id,
            req.body
        )

        if(!category){
            return res.status(400).json({message:"Invalid input or Category Id"})
        }

        return res.status(200).json({
            
            message:"Category updated successfully",
            category


        })
        
    } catch (error) {

        next(error)
        
    }
}

async deleteCategory(req, res, next){
    try {

        const {id} = req.params

        const category = await CategoryService.deleteCategory(id)

        if(!category){
            return res.status(404).json({message:"category not found "})
        }

        return res.status(200).json({
            Message:`${category.name} deleted successfully`
        })
        
    } catch (error) {

        next(error)
        
    }
}

async findCategories(req, res, next){


    try {
        const categories = await CategoryService.findCategory()

        return res.status(200).json(categories)

        
    } catch (error) {
        next(error)
        
    }
}

}