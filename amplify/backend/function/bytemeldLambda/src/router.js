const dbService = require('./database/db-service');

const orders = require('./orders/controller');
const articles = require('./articles/controller');

module.exports = (app, router) => {
  app.use('/orders', orders(router, dbService));

  app.use('/articles', articles(router, dbService));
};
