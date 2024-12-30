import { Router } from "express";
import readCookie from "../middlewares/read-cookie.middleware.js";
import { getMyProblems, getProblems, submitProblem, updateProblem } from "../controllers/problem.controller.js";

const router = Router();

router.get("/", getProblems);
router.get("/me", readCookie, getMyProblems);
router.post("/", readCookie, submitProblem);
router.patch("/:uid", updateProblem);

export default router;