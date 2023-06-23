import mongoose  from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});


const User = mongoose.model('User', userSchema);

export default User
  