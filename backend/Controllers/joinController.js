/* eslint-disable no-undef */

const validator = require("validator");
const Student = require("../Models/joinModel");
const joinStudent = async (req, res) => {
  const { name, email, phone, level } = req.body;
  if (!name || !email || !phone || !level) {
    return res.status(400).json({ error: "All Fields Are Required!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email Is Not Valid!" });
  }
  const student = await Student.findOne({ email });
  if (student) {
    return res.status(400).json({ error: "You Are Already Joined!" });
  }
  try {
    const student = await Student.create({ name, email, phone, level });
    if (!student) {
      return res.status(400).json({ error: "Joining Error, Try Again!" });
    }
    res.status(201).json({ message: "Welcome To German School!" });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

module.exports = { joinStudent };
