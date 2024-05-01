import ServiceClass from './service.js';
import mailer from '../mailer.js';
import Validation from '../middlewares/validation.js';
import limiter from '../middlewares/limiter.js';
import OrderSchema from './schemas/order.schema.js';

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

export default function(router, dbService) {
  const service = new ServiceClass(dbService, mailer);
  const controller = new OrdersController(service);

  router.post('/', limiter, validation.validateAsync.bind(validation), controller.saveOrder.bind(controller));

  return router;
};