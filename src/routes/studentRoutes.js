const express = require('express');

const {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
  uploadProfilePicture
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
router.route('/:id/fotoPerfil').post(uploadProfilePicture);

module.exports = router;
