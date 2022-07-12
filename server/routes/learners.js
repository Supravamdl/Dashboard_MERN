import express from "express";
import {
  createLearner,
  getLearners,
  addStudents,
} from "../controllers/learners.js";

const router = express.Router();

//all routes in here are starting with /learners
router.get("/login", getLearners);

router.post("/sign-up", createLearner);

// /learners/2 => req.params (params is the paramenter to our functions)
router.post("/addStudent", addStudents);

export default router;
