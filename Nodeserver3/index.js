const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const studentRoutes = require("./src/routes/student.js");
app.use(express.json());
app.use(studentRoutes);

app.set("view engine", "ejs");

const port = 7000;

// const Book = mongoose.model("Book", {
//   author: String,
//   bookName: String,
// });

// search  /student (Read - with query parameters)
// app.get("/student", async (req, res) => {
//   try {
//     const student = await Student.find(req.query );

//     res.json({
//       status: "success",
//       data: student
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "failed",
//       message: "something went error",
//     });
//   }
// });

app.get("/", (req, res) => {
  res.send("our first node express server :) ");
});

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected , server is up"))
    .catch((error) => console.log(error));
});
