const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.websocket = async (event, context) => {
  const connectionId = event.requestContext.connectionId;
  
  switch (event.requestContext.routeKey) {
    
    case '$connect':
      // Handle connection establishment
      console.log(`Client connected: ${connectionId} connected console`);
      break;

    case '$disconnect':
      // Handle disconnection
      console.log(`Client disconnected: ${connectionId}`);
      break;

    case '$default':
      // Handle default WebSocket message
     // const body = JSON.parse(event.body || '');
      const message = event.body;

      console.log(`Received message: ${message} from connection ID: ${connectionId}`);

      // Save the message to a database or perform any other business logic
      // await saveMessageToDatabase(connectionId, message);

      break;

    default:
      console.log(`Unsupported route: ${event.requestContext.routeKey}`);
  }

  return { statusCode: 200, body: 'Success' };
};

const saveMessageToDatabase = async (connectionId, message) => {
  const params = {
    TableName: 'my-database-table',
    Item: {
      connectionId,
      message,
      timestamp: new Date().toISOString(),
    },
  };

  await dynamoDB.put(params).promise();
};
