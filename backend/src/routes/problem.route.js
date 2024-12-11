import express, { Router } from "express";
import cookieParser from "cookie-parser";
import readCookie from "../middlewares/read-cookie.middleware.js";
import { getProblems, submitProblem, solveProblem } from "../controllers/problem.controller.js";

const router = Router();

router.use(express.json());
router.use(cookieParser());

router.get("/get", getProblems);
router.post("/submit", readCookie, submitProblem);
router.post("/solve", readCookie, solveProblem)

export default router;