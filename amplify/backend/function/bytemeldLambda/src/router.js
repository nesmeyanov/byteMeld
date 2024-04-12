// const dbService = require('./database/db-service');
const lambdaDB = require('./lambdaDB/service');

const orders = require('./orders/controller');
const articles = require('./articles/controller');

module.exports = (app, router) => {
  app.use('/orders', orders(router, lambdaDB));

  app.use('/articles', articles(router, lambdaDB));
};
