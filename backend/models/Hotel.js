

import mongoose from "mongoose";

export const roomTypes = ["Entire home/apt", "Private room", "Shared room"];


const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,


  },
  imgUrls: [String],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  summary: String,
  capacity: Number,
  amenities: [String],
  bathrooms: Number,
  bedrooms: Number,
  roomType: {
    type: String,
    enum: roomTypes,
    default: "Entire home/apt"
  },
  loc: {
    country: String,
    countryCode: String,
    city: String,
    address: String,
    // lat: Number,
    // lng: Number,
    coordinates: [Number],
    type: { type: String, enum: ["Point"], default: "Point" },
  },
  labels: [String],
  avgRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  }
}, {
  timestamps: true,
  autoIndex: true,
});

export default mongoose.model("Hotel", hotelSchema)