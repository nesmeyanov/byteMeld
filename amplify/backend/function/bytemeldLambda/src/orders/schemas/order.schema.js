import Joi from 'joi';

const schema = Joi.object({
  typeService: Joi.string().required(),
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  details: Joi.string(),
  services: Joi.string().required(),
  budget: Joi.string().required(),
});

export default schema;
