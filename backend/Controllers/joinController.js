/* eslint-disable no-undef */

const validator = require("validator");
const mongoose = require('mongoose')
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
const getStudents = async (req, res) => {
  const students = await Student.find({})
  if(!students){
    return res.status(404).json({ error: 'There are no students yet!' })
  }
  res.status(200).json( students )
}

const getStudent = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ error: 'ID is not valid!' })
  }
  const student = await Student.findOne({ _id: id })
  if(!student){
    return res.status(404).json({ error : "Student doesn't exist!" })
  }
  res.status(200).json( {student} )
}
module.exports = { joinStudent, getStudent, getStudents };
