const Joi = require("joi");

const Student = Joi.object({
  id: Joi.number().required(),
  nombres: Joi.string().required(),
  apellidos: Joi.string().required(),
  matricula: Joi.string().required(),
  promedio: Joi.number().required(),
});

module.exports = Student;
