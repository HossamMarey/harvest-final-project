
import express from "express"
import { login, register, forgetPassword, resetPassword, profile, updateUserProfile } from '../controllers/userController.js'
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.route('/me').get(protect, profile).put(protect, updateUserProfile)

router.post("/forget-password", forgetPassword)
router.post("/reset-password", resetPassword)


export default router