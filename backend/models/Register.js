import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  role: {
    type: String,
    default: "Visitor",
  },
});

const User = mongoose.model("Userinfo", RegisterSchema);

export default User;
