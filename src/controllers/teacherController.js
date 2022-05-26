const { TeacherValidator } = require('../utils/joi');
const Teacher = require('../models/Teacher');

const getTeachers = async (req, res) => {
  const teachers = await Teacher.findAll();

  if (teachers.length === 0) {
    return res.status(404).json({ message: 'There is no teachers' });
  }
  return res.status(200).json(teachers);
};

const getTeacherById = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);

  if (!teacher) {
    return res.status(404).json({ message: `There is no teacher with id ${req.params.id}` });
  }

  return res.status(200).json(teacher);
};

const createTeacher = async (req, res) => {
  const teacher = { ...req.body };

  const { error, value } = TeacherValidator.validate(teacher);

  if (error) {
    return res.status(400).json({ message: 'Invalid teacher data', error });
  }

  const newTeacher = await Teacher.create(value);

  return res.status(201).json(newTeacher);
};

const updateTeacher = async (req, res) => {
  const teacher = { ...req.body };

  const { error, value } = TeacherValidator.validate(teacher);

  if (error) {
    return res.status(400).json({ message: 'Invalid teacher data', error });
  }

  const updatedTeacher = await Teacher.update(value, { where: { id: req.params.id } });

  return res.status(200).json(updatedTeacher);
};

const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  const teacher = await Teacher.destroy({
    where: { id }
  });

  if (!teacher) {
    return res.status(404).json({ message: `There is no teacher with id ${id}` });
  }

  return res.status(200).json(teacher);
};

module.exports = {
  getTeachers,
  getTeacherById,
  createTeacher,
  deleteTeacher,
  updateTeacher
};
