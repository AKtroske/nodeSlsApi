const serverlessExpress = require('@vendia/serverless-express')
const app = requires('./src/index');

const server = serverlessExpress.createServer(app);

module.handler = (event, context) => {
  console.log('event handled')
  return serverlessExpress.proxy(server, event, context);
}

// module.exports.hello = async event => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
//
//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
