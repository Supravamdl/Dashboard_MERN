import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "students" }
);

const StudentModel = mongoose.model("StudentModel", StudentSchema);
export default StudentModel;
