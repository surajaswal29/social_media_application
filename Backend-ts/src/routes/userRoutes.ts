import express, { Router } from "express"
import * as userController from "../controllers/userController"
import { userAuth } from "../middlewares/Auth"
import { upload, uploadSingleFile } from "../utils/multerStorage"

const router: Router = express.Router()

router.route("/register_user").post(userController.createUser)
router.route("/get_single_user/:id").get(userController.getSingleUser)
router.route("/get_user_info").get(userAuth, userController.getUserInfo)
router.route("/login_user").post(userController.loginUser)
router.route("/upload_profile_media").post(uploadSingleFile, userController.uploadProfileMedia)

export default router
