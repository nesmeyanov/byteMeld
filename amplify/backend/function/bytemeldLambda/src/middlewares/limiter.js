const { rateLimit } = require('express-rate-limit');

const oneSecond = 1 * 1000;

const limiter = rateLimit({
	windowMs: oneSecond,
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 1 second).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false,
})

module.exports = limiter;
