const CategoryController = require("../controllers/category.controllers")
const express = require("express")
const router = express.Router()


router.post("/create", CategoryController.createCategory)
router.put("/edit/:id", CategoryController.updatecategory)
router.get("/find/:id", CategoryController.findcategoryById)
router.get("/", CategoryController.findCategories)
router.delete("/delete/:id", CategoryController.deleteCategory)

module.exports =  router

