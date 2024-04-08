class OrdersService {
  collectionName = 'orders';

  constructor (db) {
    this.db = db;
  }

  async saveOrder(order) {
    console.log('save order', order);
    const result = await this.db.insertOne(this.collectionName, order);

    console.log('SAVE ORDER', result);

    return order;
  }
}

module.exports = OrdersService;
