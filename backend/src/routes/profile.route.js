import { Router } from "express";
import multer from "multer";
import readCookie from "../middlewares/read-cookie.middleware.js";
import { getMyProfile, getProfile, createProfile, updateProfile, deleteProfile } from "../controllers/profile.controller.js";

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/tmp");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage});

router.get("/me", readCookie, getMyProfile);
router.get("/:uid", getProfile);
router.post("/", upload.single("photo"), readCookie, createProfile);
router.patch("/", readCookie, updateProfile);
router.delete("/", readCookie, deleteProfile);

export default router;