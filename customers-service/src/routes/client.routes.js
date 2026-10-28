const express = require("express")
const router = express.Router()
const clientController = require("../controllers/client.controller")



router.post("/signup", clientController.signup)
router.post("/login", clientController.login)


module.exports = router