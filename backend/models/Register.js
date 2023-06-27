import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  fullname: String,
  title: String,
  city: String,
  useremail: String,
  number: String,
  skillist: [String],
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
    default: 'Visitor',
  },
});

const User = mongoose.model('User', RegisterSchema);

export default User;
