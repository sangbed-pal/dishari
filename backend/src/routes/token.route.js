import { Router } from "express";
import { checkTokenStatus, createToken, deleteToken } from "../controllers/token.controller.js";

const router = Router();

router.get("/status", checkTokenStatus);
router.post("/", createToken);
router.delete("/", deleteToken);

export default router;