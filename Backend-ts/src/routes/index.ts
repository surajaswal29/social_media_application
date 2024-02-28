import express, { Router } from "express"
import controller from "../controllers/user.controller"

const router: Router = express.Router()

router.route("/create_user").post(controller.create_user)
router.route("/get_single_user/:id").get(controller.get_single_user)

export default router
