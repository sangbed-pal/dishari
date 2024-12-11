import express, { Router } from "express";
import cookieParser from "cookie-parser";
import encryptPassword from "../middlewares/encrypt-password.middleware.js";
import { isSignedIn, registerUser, verifyUser, signOutUser } from "../controllers/auth.controller.js";

const router = Router();

router.use(express.json());
router.use(cookieParser());

router.get("/is-signed-in", isSignedIn);
router.post("/register", encryptPassword, registerUser);
router.post("/verify", verifyUser);
router.post("/sign-out", signOutUser);

export default router;