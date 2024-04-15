const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');
const operations = require('./operations');

const client = new LambdaClient({ region: process.env.REGION });

const functionName = 'DatabaseLambda-dev';
const invocationType = 'RequestResponse';
const logType = 'Tail';

class DBLambda {
  operations = operations

  async #invokeLambda(payload) {
    const input = {
      FunctionName: functionName, // required
      InvocationType: invocationType,
      LogType: logType,
      Payload: Buffer.from(JSON.stringify(payload)),
    };
    
    const command = new InvokeCommand(input);
    
    const response = await client.send(command);
    const json = JSON.parse(Buffer.from(response.Payload).toString());
    
    return json.body;
  }
  
  async multi(...operations) {
    const payload = { operations };

    const result = await this.#invokeLambda(payload);

    return result;
  }

  async find(collectionName, {
    limit = 10,
    offset = 0,
    filters,
    sort
  }) {
    const payload = {
      operations: [this.operations.findOperation(collectionName, {
        limit,
        offset,
        filters,
        sort,
      })]
    }

    const [result] = await this.#invokeLambda(payload);

    return result;
  }

  async count(collectionName, {
    filters
  }) {
    const payload = {
      operations: [this.operations.countOperation(collectionName, {
        filters
      })]
    }

    const [result] = await this.#invokeLambda(payload);

    return result;
  }

  async findOne(collectionName, {
    filters
  }) {
    const payload = {
      operations: [this.operations.findOneOperation(collectionName, {
        filters
      })]
    }

    const [result] = await this.#invokeLambda(payload);

    return result;
  }

  async insertOne(collectionName, item) {
    const payload = {
      operations: [this.operations.insertOneOperation(collectionName, {
        item
      })]
    }

    const [result] = await this.#invokeLambda(payload);

    return result;
  }
};

module.exports = new DBLambda();
