
import express from "express"
import { getHotels, getHotelRoomTypes, getHotelById, seedHotels } from '../controllers/hotelController.js'

const router = express.Router()

router.get("/", getHotels)
router.get("/room-types", getHotelRoomTypes)
router.get("/seed-hotels", seedHotels)
router.get("/:id", getHotelById)

export default router