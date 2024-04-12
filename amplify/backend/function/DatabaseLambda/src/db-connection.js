const { MongoClient } = require('mongodb');

class DBConnection {
  constructor() {
    this.client;
  }

  async getCreds() {
    return {
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    }
  }

  async createClient({ host, username, password, port }) {
    console.log('create client');
    const client = new MongoClient(`mongodb://${username}:${password}@${host}:${port}`, {
      tls: true,
      tlsCAFile: '/opt/certs/global-bundle.pem',
      retryWrites: false,
    });
    await client.connect();
    console.log('connected to DB');
    this.client = client;
  }

  async getDBClient() {
    try {
      if (!this.client) {
        const creds = await this.getCreds();
        await this.createClient(creds);
      }

      return this.client;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }
}

module.exports = DBConnection;
