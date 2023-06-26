import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  fullname: String,
  title: String,
  city: String,
  number: String,
  degree: String,
  school: String,
  graduationYear: String,
  jobTitle: String,
  company: String,
  jobDescription: String,
  about: String,
  color: String,
  font: String,
  role: {
    type: String,
    default: "Visitor",
  },
});


const User = mongoose.model("Userinfo", RegisterSchema);

export default User;
