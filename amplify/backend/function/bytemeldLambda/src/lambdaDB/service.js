const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');

const client = new LambdaClient({ region: process.env.REGION });

const functionName = 'DatabaseLambda-dev';
const invocationType = 'RequestResponse';
const logType = 'Tail';

class DBLambda {
  async find(collectionName, {
    limit = 10,
    offset = 0,
    filters,
    sort
  }) {
    const payload = {
      operations: [{
        collection: collectionName,
        type: 'find',
        options: {
          limit,
          offset,
          filters,
          sort,
        }
      }]
    }

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

  async count(collectionName, {
    filters
  }) {
    const payload = {
      operations: [{
        collection: collectionName,
        type: 'count',
        options: {
          filters,
        }
      }]
    }

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

  async findOne(collectionName, {
    filters
  }) {
    const payload = {
      operations: [{
        collection: collectionName,
        type: 'findOne',
        options: {
          filters,
        }
      }]
    }

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

  async insertOne(collectionName, item) {
    const payload = {
      operations: [{
        collection: collectionName,
        type: 'insertOne',
        item,
      }]
    }

    const input = {
      FunctionName: functionName, // required
      InvocationType: invocationType,
      LogType: logType,
      Payload: Buffer.from(JSON.stringify(payload)),
    };

    const command = new InvokeCommand(input);

    const response = await client.send(command);
    const json = JSON.parse(Buffer.from(response.Payload).toString());

    return json.data;
  }
};

module.exports = new DBLambda();
