import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import ResumeModel from "./models/Resume.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect("mongodb+srv://yash224yr:FraGod2op@cluster0.9qfibvj.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/register", (req, res) => {
  const { name, email, password, username } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      ResumeModel.create({
        name,
        email,
        username,
        password: hash,
      })
        .then((user) => res.json({ status: "OK" }))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("Server connected to port 3000");
});
