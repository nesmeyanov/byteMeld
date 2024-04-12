const Joi = require('joi');

const schema = Joi.object({
  typeService: Joi.string().required(),
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  details: Joi.string(),
  services: Joi.string().required(),
  budget: Joi.string().required(),
});

module.exports = schema;
