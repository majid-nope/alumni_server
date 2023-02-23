const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const cors = require("cors");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

const app = express();
require("mongoose").set("strictQuery",  false).connect(process.env.MONG_URL);

app.use(
  cors({
    credentials: true,
    origin: process.env.APP_URL,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

module.exports = app;
