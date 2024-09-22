import { asyncHandler } from "../utils/asyncHandler.js"
import joi from "joi"
import { AppError } from "../utils/appError.js"
import User from "../models/User.js"
const registerSchema = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
  phone: joi.string(),
})


export const register = asyncHandler(async (req, res) => {


  const { name, email, password, phone } = req.body


  const { error, value } = registerSchema.validate({ name, email, password, phone })

  if (error) {
    throw new AppError('INVALID_DATA', error.details[0].message, 400)
  }

  const newUser = await User.create({ name, email, password, phone })



  res.json({ success: true, data: newUser })
})

export const login = asyncHandler(async (req, res) => {



  res.json({ success: true, data: "Hello World" })
})

export const forgetPassword = asyncHandler(async (req, res) => {



  res.json({ success: true, data: "Hello World" })
})

export const resetPassword = asyncHandler(async (req, res) => {



  res.json({ success: true, data: "Hello World" })
})