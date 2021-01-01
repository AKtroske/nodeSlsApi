const serverlessExpress = require('@vendia/serverless-express')
const app = require('./src/index');

const server = serverlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log('event handled')
  return serverlessExpress.proxy(server, event, context);
};
