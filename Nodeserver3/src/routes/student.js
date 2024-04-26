const express = require("express");
const {getStudents,
  createStudents,
  updateStudents,
  deleteStudents
} = require('../controllers/students.js')

const router = express.Router()

router.get("/student",getStudents )

router.post("/student",   createStudents)

router.patch("/student/:id",updateStudents )

router.delete("/student/:id",  deleteStudents)

module.exports = router
  