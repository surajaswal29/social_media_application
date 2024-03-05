import express, { Router } from "express"
import userRoutes from "./userRoutes"

const router: Router = express.Router()

// user routes
router.use("/user", userRoutes)

// post routes

// admin routes

export default router
