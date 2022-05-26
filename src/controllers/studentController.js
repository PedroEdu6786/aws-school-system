const { StudentValidator } = require('../utils/joi');
const Student = require('../models/Student');

const getStudents = async (req, res) => {
  const students = await Student.findAll();
  if (students.length === 0) {
    return res.status(404).json({ message: 'No students were found' });
  }
  return res.status(200).json(students);
};

const getStudentById = async (req, res) => {
  const student = await Student.findByPk(req.params.id);

  if (!student) {
    return res.status(404).json({ message: `There is no student with id ${req.params.id}` });
  }

  return res.status(200).json(student);
};

const createStudent = async (req, res) => {
  const student = { ...req.body };

  const { error, value } = StudentValidator.validate(student);

  if (error) {
    return res.status(400).json({ message: 'Invalid student data', error });
  }

  await Student.create(value);

  return res.status(201).json(value);
};

const updateStudent = async (req, res) => {
  const student = { ...req.body };

  const { error, value } = StudentValidator.validate(student);

  if (error) {
    return res.status(400).json({ message: 'Invalid student data', error });
  }

  await Student.update(value, { where: { id: req.params.id } });

  return res.status(200).json(value);
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.destroy({
    where: { id }
  });

  if (!student) {
    return res.status(404).json({ message: `There is no student with id: ${id}` });
  }

  return res.status(200).json(student);
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent
};
