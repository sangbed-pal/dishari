import express, { Router } from "express";
import multer from "multer";
import cookieParser from "cookie-parser";
import readCookie from "../middlewares/read-cookie.middleware.js";
import { getOrganizationType, getProfile, createProfile } from "../controllers/organization.controller.js";

const router = Router();

router.use(express.json());
router.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/tmp");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage});

router.get("/type", readCookie, getOrganizationType);
router.get("/profile/get", readCookie, getProfile);
router.post("/profile/create", upload.single("photo"), readCookie, createProfile);

export default router;