import express, { Router } from "express"
import { createUser, get_single_user, get_users, loginUser } from "../controllers/userController"
import { userAuth } from "../middlewares/Auth"

const router: Router = express.Router()

router.route("/create_user").post(createUser)
router.route("/get_single_user/:id").get(get_single_user)
router.route("/get_users").get(userAuth, get_users)
router.route("/login_user").post(loginUser)

export default router
