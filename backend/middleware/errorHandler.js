import { ERROR_CODES } from "../constatnts/ERRPR_CODES.js"
import { AppError } from "../utils/appError.js"

export const errorHandler = (err, req, res, next) => {


  console.log(err?.message)

  if (err.name === 'ValidationError') {
    return res.status(400).json({ success: false, message: err.message, type: ERROR_CODES.VALIDATION_ERROR, details: err.details })
  }

  if (err instanceof AppError) {

    return res.status(err.statusCode).json({ success: false, message: err.message, errorCode: err.errorCode })
  }



  res.status(500).json({ success: false, message: err.message, type: ERROR_CODES.SERVER_ERROR })
}