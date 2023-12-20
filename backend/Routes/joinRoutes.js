/* eslint-disable no-undef */

const {
  joinStudent,
  getStudent,
  getStudents,
  deleteStudent,
} = require("../Controllers/joinController");

const router = require("express").Router();

//JOIN STUDENT
router.post("/", joinStudent);

//GET STUDENT
router.get("/:id", getStudent);

//GET STUDENTS
router.get("/", getStudents);

//DELETE STUDENT
router.delete("/:id", deleteStudent);

module.exports = router;
