/* eslint-disable no-undef */

const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    level: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", joinSchema);
module.exports = Student;
