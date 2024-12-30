import { Router } from "express";
import encryptPassword from "../middlewares/encrypt-password.middleware.js";
import { createUser, deleteUser } from "../controllers/user.controller.js";
import readCookie from "../middlewares/read-cookie.middleware.js";

const router = Router();

router.post("/", encryptPassword, createUser);
router.delete("/", readCookie, deleteUser);

export default router;