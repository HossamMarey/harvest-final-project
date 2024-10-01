import Hotel, { roomTypes } from "../models/Hotel.js";
import { asyncHandler } from "../utils/asyncHandler.js"


export const getHotels = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const skip = (page - 1) * perPage;

  const minPrice = parseInt(req.query.minPrice) || 0;
  const maxPrice = parseInt(req.query.maxPrice) || 0;

  const search = req.query.search || '';

  const type = req.query.type || '';
  const city = req.query.city || '';
  const country = req.query.country || '';
  const roomType = req.query.roomType || ''; // type,type

  const capacity = parseInt(req.query.capacity) || 0;
  const bathrooms = parseInt(req.query.bathrooms) || 0;
  const bedrooms = parseInt(req.query.bedrooms) || 0;

  const filters = {}


  if (minPrice) {
    filters.price = { $gte: minPrice }
  }

  if (maxPrice) {

    if (filters.price) {
      filters.price = { ...filters.price, $lte: maxPrice }
    } else {

      filters.price = { $lte: maxPrice }
    }
  }

  if (search) {
    const searchRegx = new RegExp(search, 'i')
    filters.$or = [
      { name: searchRegx },
      { summary: searchRegx },
    ]
  }

  if (type) filters.type = type
  if (city) filters['loc.city'] = type
  if (country) filters['loc.country'] = type

  if (roomType) {
    const roomTypeArr = roomType.split(',')
    filters.roomType = { $in: roomTypeArr }
  }

  if (capacity) filters.capacity = capacity
  if (bathrooms) filters.bathrooms = { $gte: bathrooms }
  if (bedrooms) filters.bedrooms = { $gte: bedrooms }



  // if (req.query.lat && req.query.lng) {

  //   const lat = parseFloat(req.query.lat)
  //   const lng = parseFloat(req.query.lng)
  //   const maxDistance = parseInt(req.query.maxDistance) || 1000  //  1k

  //   filters.loc = {
  //     $near: {
  //       $maxDistance: maxDistance,
  //       $geometry: {
  //         type: 'Point',
  //         coordinates: [lng, lat]
  //       },
  //     }
  //   }
  // }



  const data = await Hotel.find(filters).skip(skip).limit(perPage)
  const total = await Hotel.countDocuments()

  res.json({ success: true, data, pagination: { page, perPage, total } })
})


export const getHotelRoomTypes = asyncHandler(async (req, res) => {


  res.json({
    success: true,
    data: roomTypes
  })
})