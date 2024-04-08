const ServiceClass = require('./service');

class OrdersController {
  constructor(service) {
    this.service = service;
  }

  async saveOrder (req, res) {
    const order = await this.service.saveOrder(req.body);

    res.json({ status: 'OK', order });
  }
}

module.exports = function(router, dbService) {
  const service = new ServiceClass(dbService);
  const controller = new OrdersController(service);

  router.post('/', controller.saveOrder.bind(controller));

  return router;
};