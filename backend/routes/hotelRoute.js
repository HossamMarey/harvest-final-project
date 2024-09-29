
import express from "express"
import { login, register, forgetPassword, resetPassword, profile, updateUserProfile } from '../controllers/userController.js'

const router = express.Router()

router.get("/", register)
export default router