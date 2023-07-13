const express = require("express")
const controller = require("./controllers/userController")
const router = express.Router();


router.route("/sign-up").post(controller.signUp)
router.route("/sign-in").post(controller.signIn)


module.exports = router;