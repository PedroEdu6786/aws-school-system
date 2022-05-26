const Joi = require('joi');

const StudentValidator = Joi.object({
  nombres: Joi.string().required(),
  apellidos: Joi.string().required(),
  matricula: Joi.string().required(),
  promedio: Joi.number().required()
});

const TeacherValidator = Joi.object({
  nombres: Joi.string().required(),
  apellidos: Joi.string().required(),
  numeroEmpleado: Joi.number().required(),
  horasClase: Joi.number().required()
});

module.exports = { StudentValidator, TeacherValidator };
