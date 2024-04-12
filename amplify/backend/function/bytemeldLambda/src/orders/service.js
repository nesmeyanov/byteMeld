class OrdersService {
  collectionName = 'orders';

  constructor (db, mailer) {
    this.db = db;
    this.mailer = mailer;
  }

  async saveOrder(order) {
    await this.mailer.sendEmail({
      from: 'no-reply@bytemeld.net',
      to: 'sales@bytemeld.net',
      subject: 'New Order Received',
      text: `New order received with such data: ${JSON.stringify(order)}`,
    });

    const result = await this.db.insertOne(this.collectionName, order);

    return order;
  }
}

module.exports = OrdersService;
