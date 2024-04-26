const Students = require ('../models/Student.js')


const getStudents = async (req, res) => {
    try {
      const students = await Students.find();
      
      res.json({
        status: "success",
        data: students,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "something went error",
      });
    }
  }

  const createStudents = async (req, res) => {
    try {
      const { firstName, lastName, email } = req.body;
      // console.log(req.body)
  
      const students = await Students.create({ firstName, lastName, email });
  
      console.log(students)
      res.json({
        
        
        status: "success",
        message: "student created successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "something went error",
      });
    }
}

const updateStudents = async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email } = req.body;
  
      await Students.findByIdAndUpdate(id, { firstName, lastName, email });
  
      res.json({
        status: "success",
        message: "student updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "something went error",
      });
    }
  }

  const deleteStudents = async (req, res) => {
    try {
      const { id } = req.params;
      await Student.findByIdAndDelete(id);
      res.json({
        status: "success",
        message: "student deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "something went error",
      });
    }
  }

  module.exports = {
  getStudents,
  createStudents,
  updateStudents,
  deleteStudents


  }