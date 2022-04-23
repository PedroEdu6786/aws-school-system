const Student = require("../models/Student");

let students = [];

const getStudents = (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students were found" });
  }
  return res.status(200).json(students);
};

const getStudentById = (req, res) => {
  const student = students.find((s) => s.id == req.params.id);

  if (!student) {
    return res
      .status(404)
      .json({ message: "There is no student with id " + req.params.id });
  }

  return res.status(200).json(student);
};

const createStudent = (req, res) => {
  const student = { ...req.body };

  const { error, value } = Student.validate(student);

  if (error) {
    return res
      .status(400)
      .json({ message: "Invalid student data", error: error });
  }

  students.push(student);

  return res.status(201).json(value);
};

const updateStudent = (req, res) => {
  const student = { ...req.body };

  const { error } = Student.validate(student);

  if (error) {
    return res
      .status(400)
      .json({ message: "Invalid student data", error: error });
  }

  students = students.map((s) => {
    if (s.id == req.params.id) {
      s = student;
    }
    return s;
  });

  return res.status(200).json(students);
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const studentsLength = students.length;
  students = students.filter((student) => student.id != id);

  if (studentsLength === students.length) {
    return res
      .status(404)
      .json({ message: `There is no student with id: ${id}` });
  }

  return res.status(200).json(students);
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
};
