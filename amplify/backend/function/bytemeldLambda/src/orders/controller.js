const ServiceClass = require('./service');
const mailer = require('../mailer');
const Validation = require('../middlewares/validation');
const OrderSchema = require('./schemas/order.schema');

const validation = new Validation(OrderSchema);

class OrdersController {
  constructor(service) {
    this.service = service;
  }

  async saveOrder (req, res) {
    try {
      const order = await this.service.saveOrder(req.body);

      res.json({ status: 'OK', order });
    } catch (err) {
      console.log('[saveOrder]', err);

      return res.status(500).json({
        event: 'saveOrder',
        message: err.message,
      });
    }
  }
}

module.exports = function(router, dbService) {
  const service = new ServiceClass(dbService, mailer);
  const controller = new OrdersController(service);

  router.post('/', validation.validateAsync.bind(validation), controller.saveOrder.bind(controller));

  return router;
};