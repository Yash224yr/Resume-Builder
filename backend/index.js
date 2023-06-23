import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from "./models/Register.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect("mongodb+srv://yash224yr:FraGod2op@cluster0.9qfibvj.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/register", (req, res) => {
  const { name, email, password, username } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.create({
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        // Generate a JWT token
        const token = jwt.sign({ username: user.username }, "your-secret-key", {
          expiresIn: "1h", // Token expiration time
        });

        // Set the token as a cookie
        res.cookie("token", token, { httpOnly: true });

        res.status(200).json({ message: "Login successful", token });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


app.post("/update", async (req, res) => {
  const { firstname, lastname } = req.body;
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from the request headers

  try {
    // Verify the token
    jwt.verify(token, "your-secret-key", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      const { username } = decoded;

      // Find the user
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update the user's firstname and lastname
      user.firstname = firstname;
      user.lastname = lastname;

      // Save the updated user
      await user.save();

      res.status(200).json({ message: "User updated successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/details", async (req, res) => {
  try {
    const users = await User.find().select("firstname"); // Retrieve all users from the database
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});









app.listen(3000, () => {
  console.log("Server connected to port 3000");
});