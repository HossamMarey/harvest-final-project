import { ERROR_CODES } from "../constatnts/ERRPR_CODES.js"
import jwt from "jsonwebtoken"
import { AppError } from "../utils/appError.js"
import User from "../models/User.js"
import { asyncHandler } from "../utils/asyncHandler.js"


export const protect = asyncHandler(async (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1] || ''

  if (!token) {
    throw new AppError(ERROR_CODES.INVALID_DATA, "Invalid token", 400)
  }

  const userId = jwt.verify(token, process.env.JWT_SECRET).id

  if (!userId) {
    throw new AppError(ERROR_CODES.INVALID_DATA, "Invalid data", 400)
  }

  const user = await User.findById(userId).select("-password")

  if (!user) {
    throw new AppError(ERROR_CODES.UNAUTHORIZED, "unauthorized", 401)
  }



  req.user = user
  next()
})