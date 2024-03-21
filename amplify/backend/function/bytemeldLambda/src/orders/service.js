class OrdersService {
  constructor (db) {
    this.db = db;
    this.orders = [];
  }

  saveOrder(order) {
    this.orders.push(order);
    console.log('ORDERS', this.orders);
  }
}

module.exports = OrdersService;
