// const express = require('express');
// const ServiceClass = require('./service');
// const dbService = require('../database/db-service');

// const service = new ServiceClass(dbService);
// const router = express.Router();

// router.get('/', async function(req, res) {
//   const articles = await service.getArticles();
//   console.log('articles', articles);
//   res.json({success: 'get call succeed!', url: req.originalUrl, articles });
// });

// module.exports = router;

const ServiceClass = require('./service');

class ArticlesController {
  constructor(service) {
    this.service = service;
  }

  async getArticles (req, res) {
    const articles = await this.service.getArticles();

    res.json({success: 'get call succeed!', url: req.originalUrl, articles });
  }
}

module.exports = function(router, dbService) {
  const service = new ServiceClass(dbService);
  const controller = new ArticlesController(service);

  router.get('/', controller.getArticles.bind(controller));

  return router;
};
