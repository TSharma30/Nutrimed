import express from "express";
import { register, login, logout ,forget,reset} from "../controllers/auth.controller.js";

const router = express.Router();

console.log("reached auth.route.js");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password",forget)
router.post("/reset-password",reset)

export default router;
