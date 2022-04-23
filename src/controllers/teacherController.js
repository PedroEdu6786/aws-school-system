const Teacher = require("../models/Teacher");

let teachers = [];

const getTeachers = (req, res) => {
  if (teachers.length === 0) {
    return res.status(404).json({ message: "There is no teachers" });
  }
  return res.status(200).json(teachers);
};

const getTeacherById = (req, res) => {
  const teacher = teachers.find((t) => t.id == req.params.id);

  if (!teacher) {
    return res
      .status(404)
      .json({ message: "There is no teacher with id " + req.params.id });
  }

  return res.status(200).json(teacher);
};

const createTeacher = (req, res) => {
  const teacher = { ...req.body };

  const { error, value } = Teacher.validate(teacher);

  if (error) {
    return res
      .status(400)
      .json({ message: "Invalid teacher data", error: error });
  }

  teachers.push(teacher);

  return res.status(201).json(value);
};

const updateTeacher = (req, res) => {
  const teacher = { ...req.body };

  const { error } = Teacher.validate(teacher);

  if (error) {
    return res
      .status(400)
      .json({ message: "Invalid teacher data", error: error });
  }

  teachers = teachers.map((t) => {
    if (t.id == req.params.id) {
      t = teacher;
    }
    return t;
  });

  return res.status(200).json(teacher);
};

const deleteTeacher = (req, res) => {
  const { id } = req.params;
  const teachersLength = teachers.length;
  teachers = teachers.filter((teacher) => teacher.id != id);

  if (teachersLength === teachers.length) {
    return res
      .status(404)
      .json({ message: `There is no teacher with id ${id}` });
  }

  return res.status(200).json(teachers);
};

module.exports = {
  getTeachers,
  getTeacherById,
  createTeacher,
  deleteTeacher,
  updateTeacher,
};
