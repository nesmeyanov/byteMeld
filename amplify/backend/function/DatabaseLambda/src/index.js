const DBConnection = require('./db-connection');
const connection = new DBConnection();
const cl = connection.getDBClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const client = await cl;
    const db = client.db('bytemeld');
    const promises = event.operations.map((operation) => {
      switch (operation.type) {
        case 'find': {
          const collection = db.collection(operation.collection);
          const query = collection.find(operation.options.filters);
          if (operation.options.offset) query.skip(parseInt(operation.options.offset));
          if (operation.options.limit) query.limit(parseInt(operation.options.limit));
          if (operation.options.sort) query.sort(operation.options.sort);

          return query.toArray();
          break;
        }
        case 'count': {
          const collection = db.collection(operation.collection);

          return collection.count(operation.options.filters);
          break;
        }
        case 'findOne': {
          const collection = db.collection(operation.collection);

          return collection.findOne(operation.options.filters);
          break;
        }
        case 'insertOne': {
          const collection = db.collection(operation.collection);
          return collection.insertOne(operation.item);
          break;
        }
      }
    })

    const results = await Promise.all(promises);
    
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: results[0],
    };
};
