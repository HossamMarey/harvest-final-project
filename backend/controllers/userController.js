import { asyncHandler } from "../utils/asyncHandler.js"
import joi from "joi"
import { AppError } from "../utils/appError.js"
import User from "../models/User.js"
import { ERROR_CODES } from "../constatnts/ERRPR_CODES.js"
import { generateToken } from "../utils/genereteToken.js"


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
    throw new AppError(ERROR_CODES.INVALID_DATA, error.details[0].message, 400)
  }

  const newUser = await User.create({ ...value })

  const token = generateToken(newUser._id)

  if (newUser) {
    newUser.password = undefined
  }

  res.json({ success: true, data: newUser, token })
})



const loginSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
})


export const login = asyncHandler(async (req, res) => {

  const { email, password } = req.body

  const { error, value } = loginSchema.validate({ email, password })

  if (error) {
    throw new AppError(ERROR_CODES.INVALID_DATA, error.details[0].message, 400)
  }

  const user = await User.findOne({ email })

  if (!user || !await user.matchPassword(password)) {
    throw new AppError(ERROR_CODES.INVALID_CREDENTIALS, "Invalid credentials", 403)
  }

  const token = generateToken(user._id)

  if (user) {
    user.password = undefined
  }

  res.json({ success: true, data: user, token })
})


export const profile = asyncHandler(async (req, res) => {
  const user = req.user

  res.json({ success: true, data: user })
})


const updateSchema = joi.object().keys({
  name: joi.string(),
  email: joi.string().email(),
  password: joi.string().min(6),
  phone: joi.string(),
})

export const updateUserProfile = asyncHandler(async (req, res) => {



  const { name, email, password, phone } = req.body
  const { error, value } = updateSchema.validate({ name, email, password, phone })
  if (error) {
    throw new AppError(ERROR_CODES.INVALID_DATA, error.details[0].message, 400)
  }

  const user = await User.findById(req.user._id).select("-password")

  if (name) user.name = name
  if (email) user.email = email
  if (password) user.password = password
  if (phone) user.phone = phone

  await user.save()

  res.json({ success: true, data: user })
})

export const forgetPassword = asyncHandler(async (req, res) => {

  // const token = generateToken(user._id)
  // send token to user email
  // localhost:3000/reset-password?token=${token}

  res.json({ success: true, data: "Hello World" })
})

export const resetPassword = asyncHandler(async (req, res) => {

  const { token, password } = req.body

  // token verify => user id 
  // find user by id 
  // update user password

  res.json({ success: true, data: "Hello World" })
})