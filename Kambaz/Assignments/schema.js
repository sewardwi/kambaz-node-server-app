import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    available: String,
    due: String,
    description: String,
    dueDateTime: Date,
    availableDateTime: Date,
    group: {
      type: String,
      enum: ["ASSIGNMENTS", "QUIZZES", "EXAMS"],
      default: "ASSIGNMENTS",
    },
    untilDateTime: Date,
  }, 
  { collection: 'assignments' }
);
export default assignmentSchema;