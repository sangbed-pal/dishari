import express, { Router } from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import registerUser from "../controllers/register-user.controller.js";
import verifyUser from "../controllers/verify-user.controller.js";
import signOutUser from "../controllers/sign-out-user.controller.js";
import createProfile from "../controllers/create-profile.controller.js"
import encryptPassword from "../middlewares/encrypt-password.middleware.js";
import readCookie from "../middlewares/read-cookie.middleware.js";

const router = Router();

router.use(express.json());
router.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({storage});

router.post("/register", encryptPassword, registerUser);
router.post("/verify", verifyUser);
router.post("/sign-out", signOutUser);
router.post("/create-profile", upload.single("photo"), readCookie, createProfile);

export default router;