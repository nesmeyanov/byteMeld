class OrdersService {
  constructor () {
    this.orders = [];
  }

  saveOrder(order) {
    this.orders.push(order);
    console.log('ORDERS', this.orders);
  }
}

module.exports = new OrdersService();
