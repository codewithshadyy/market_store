const express = require("express")
const router = express.Router()
const clientController = require("../controllers/client.controller")



router.post("/register", clientController.signup)
router.post("/login", clientController.login)
router.post("/:id", clientController.findClientById)


module.exports = router