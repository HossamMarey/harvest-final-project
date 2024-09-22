
import express from "express"
import { login, register, forgetPassword, resetPassword } from '../controllers/userController.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/forget-password", forgetPassword)
router.post("/reset-password", resetPassword)


export default router