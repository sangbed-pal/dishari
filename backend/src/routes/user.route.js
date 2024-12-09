import express, { Router } from "express";
import cookieParser from "cookie-parser";
import registerUser from "../controllers/register-user.controller.js";
import verifyUser from "../controllers/verify-user.controller.js";
import signOutUser from "../controllers/sign-out-user.controller.js";
import encryptPassword from "../middlewares/encrypt-password.middleware.js";

const router = Router();

router.use(express.json());
router.use(cookieParser());

router.post("/register", encryptPassword, registerUser);
router.post("/verify", verifyUser);
router.post("/sign-out", signOutUser);

export default router;