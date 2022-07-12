const express = require("express");
const path = require("path");
const db = require('./config/connection');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use((exo = express.urlencoded({ extended: true })));
app.use(express.json());

// require our routes
const postRouter = require("./routes/posts")
const userRouter = require("./routes/users")
const authRouter = require("./routes/auth")

// use our routes
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

//express App needs this code to display static pages
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


//do we need this code for the DB connection?
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
