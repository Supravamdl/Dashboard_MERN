import { v4 as uuidv4 } from "uuid";
import LearnerModel from "../models/learnerSchema.js";
import StudentModel from "../models/studentSchema.js";

let learners = [];

export const getLearners = async (req, res) => {
  try {
    const learner = await LearnerModel.findOne({ email: req.query.username });
    if (!learner) {
      return res
        .status(404)
        .json({ message: `No learner with email ${req.query.username}` });
    }
    if (learner.password === req.query.password) {
      res.status(200).json({ message: `Login successful` });
    } else {
      res.status(401).json({ message: `Login unsuccessful` });
    }
  } catch (err) {}
};

export const createLearner = async (req, res) => {
  const learnerId = { ...req.body, id: uuidv4() };
  // //mongo table to dash push
  const learner = await LearnerModel.create(learnerId);
  // sends response
  res.status(200).json({ learner });
};

export const addStudents = async (req, res) => {
  const student = await StudentModel.create(req.body);
  res.status(200).json({ student });
};
