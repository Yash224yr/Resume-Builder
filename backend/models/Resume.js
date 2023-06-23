import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  role: {
    type: String,
    default: "Visitor",
  },
});

const ResumeModel = mongoose.model("Userinfo", ResumeSchema);

export default ResumeModel;
