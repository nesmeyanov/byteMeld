// const dbService = require('./database/db-service');
import lambdaDB from './lambdaDB/service.js';

import orders from './orders/controller.js';
import articles from './articles/controller.js';

export default (app, router) => {
  app.use('/orders', orders(router, lambdaDB));

  app.use('/articles', articles(router, lambdaDB));
};
