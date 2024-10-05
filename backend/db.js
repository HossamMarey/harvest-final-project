import mongoose from "mongoose";

export const initDb = async () => {

  try {

    const MONGO_URI = process.env.MONGO_URI
    await mongoose.connect(MONGO_URI, {})
    console.log('DATABASE CONNECTED', MONGO_URI)
  } catch (error) {
    console.log('ERROR  in DATABASE CONNECTION , ', error)
  }
}