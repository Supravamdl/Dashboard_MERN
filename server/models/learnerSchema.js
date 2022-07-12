import mongoose from "mongoose";

const LearnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "learners" }
);

const LearnerModel = mongoose.model("LearnerModel", LearnerSchema);
export default LearnerModel;
