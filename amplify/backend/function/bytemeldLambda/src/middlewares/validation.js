class ValidationError {
  constructor(error) {
    this.status = 422;
    this.message = error.message;
  }
};

class Validation {
  constructor(schema) {
    this.schema = schema;
  }

  async validateAsync (req, res, next) {
    try {
      const value = await this.schema.validateAsync(req.body);
      return next();
    }
    catch (err) {
      console.log('[ERR][validateAsync]', err);
      const validationError = new ValidationError(err);
      return res.status(validationError.status).json(validationError);
    }
  }
};

export default Validation;
