const express = require('express');

const {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

const router = express.Router();

router
  .route('/')
  .get(getStudents)
  .post(createStudent);
router
  .route('/:id')
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
