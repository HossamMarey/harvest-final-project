
import express from "express"
import { getHotels, getHotelRoomTypes } from '../controllers/hotelController.js'

const router = express.Router()

router.get("/", getHotels)
router.get("/room-types", getHotelRoomTypes)

export default router