class DBOperations {
  findOperation(collectionName, {
    limit = 10,
    offset = 0,
    filters,
    sort
  }) {
    return {
      collection: collectionName,
      type: 'find',
      options: {
        limit,
        offset,
        filters,
        sort,
      }
    };
  }

  countOperation(collectionName, {
    filters
  }) {
    return {
      collection: collectionName,
      type: 'count',
      options: {
        filters,
      }
    };
  }

  findOneOperation(collectionName, {
    filters
  }) {
    return {
      collection: collectionName,
      type: 'findOne',
      options: {
        filters,
      }
    };
  }

  insertOneOperation(collectionName, item) {
    return {
      collection: collectionName,
      type: 'insertOne',
      item,
    };
  }
};

module.exports = new DBOperations();
