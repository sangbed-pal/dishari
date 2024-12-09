import express, { Router } from "express";
import multer from "multer";
import cookieParser from "cookie-parser";
import readCookie from "../middlewares/read-cookie.middleware.js";
import createProfile from "../controllers/create-profile.controller.js";
import getProblems from "../controllers/get-problems.controller.js";
import submitProblem from "../controllers/submit-problem.controller.js";
import getOrganizationType from "../controllers/get-organization-type.js";
import getProfile from "../controllers/get-profile.controller.js";

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
router.get("/problems/get", getProblems);
router.post("/problems/submit", readCookie, submitProblem);

export default router;