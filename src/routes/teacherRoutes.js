const express = require('express');

const {
  getTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher
} = require('../controllers/teacherController');

const router = express.Router();

router
  .route('/')
  .get(getTeachers)
  .post(createTeacher);
router
  .route('/:id')
  .get(getTeacherById)
  .put(updateTeacher)
  .delete(deleteTeacher);

module.exports = router;
