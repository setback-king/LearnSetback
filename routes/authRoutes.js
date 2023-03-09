import express from "express";
import rateLimiter from "express-rate-limit";

import {
  login,
  logout,
  register,
  updateUser,
  deleteUser,
  getCurrentUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "too many requests from this IP",
});

const router = express.Router();

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/logout").get(logout);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/deleteUser").delete(authenticateUser, deleteUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
