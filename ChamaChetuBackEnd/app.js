const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authenticationRoute = require("./routes/auth");
const groupRoute = require("./routes/groups");
const feedbackRoute = require("./routes/feedbacks");

//accept json data

app.use(express.json());

//connect MongoDb

mongoose
  .connect(
    "mongodb+srv://test1234:test1234@cluster0.wndkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDb connected successfully"))
  .catch((err) => {
    console.log(err);
  });

//api routing

app.use("/api/auth", authenticationRoute);
app.use("/api/groups", groupRoute);
app.use("/api/feedback", feedbackRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Backend at 8000`);
});