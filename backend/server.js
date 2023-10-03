/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const joinRoutes = require("./Routes/joinRoutes");
const contactRoutes = require("./Routes/contactRoutes");
require("dotenv").config();
const app = express();

const port = process.env.PORT;
const mongo = process.env.MONGO;

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/join", joinRoutes);
app.use("/contact", contactRoutes);
mongoose
  .connect(mongo)
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("Server Running"));
