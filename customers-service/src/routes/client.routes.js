const express = require("express")
const router = express.Router()
const clientController = require("../controllers/client.controller")



router.post("/signup", clientController.signup)


module.exports = router