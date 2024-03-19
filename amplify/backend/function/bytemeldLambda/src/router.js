const orders = require('./orders/controller');
const articles = require('./articles/controller');

module.exports = (app) => {
  app.use('/orders', orders);
  app.use('/articles', articles);
};
