

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "owner", "admin"],
  },
  phone: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});



export default mongoose.model("User", userSchema)