const serverlessExpress = require('@vendia/serverless-express')
const app = requires('./src/index');

const server = serverlessExpress.createServer(app);

module.handler = (event, context) => {
  console.log('event handled')
  return serverlessExpress.proxy(server, event, context);
};
