
const ProductController = require("../controllers/product.controller")
const express = require("express")
const router = express.Router()


router.post("/create", ProductController.createProduct)
router.put("/edit/:id", ProductController.updateProduct)
router.get("/", ProductController.findProducts)
router.get("/:id", ProductController.findProductById)
router.get("/:name", ProductController.findProductByName)
router.delete("/delete/:id", ProductController.deleteProduct)


module.exports = router

