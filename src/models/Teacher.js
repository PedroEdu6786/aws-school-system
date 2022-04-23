const Joi = require("joi");

const Teacher = Joi.object({
  id: Joi.number().required(),
  nombres: Joi.string().required(),
  apellidos: Joi.string().required(),
  numeroEmpleado: Joi.number().required(),
  horasClase: Joi.number().required(),
});

module.exports = Teacher;
