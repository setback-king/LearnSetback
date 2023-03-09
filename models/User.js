import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email.",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 6,
    select: false,
  },
  location: { type: String, trim: true, maxlength: 20, default: "my city" },
  profilePic: { type: String, default: null },
  admin: { type: Boolean, default: false },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
